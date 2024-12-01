

async function getSummarizer() {
    const options = {
        sharedContext: 'This is a list of titles visited by the user',
        type: 'key-points',
        format: 'markdown',
        length: 'medium',
      };
      
      const available = (await self.ai.summarizer.capabilities()).available;
      let summarizer;
      if (available === 'no') {
        // The Summarizer API isn't usable.
        throw new Error('Summarizer API is not available');
      }
      if (available === 'readily') {
        // The Summarizer API can be used immediately .
        summarizer = await self.ai.summarizer.create(options);
        return summarizer;
      } else {
        // The Summarizer API can be used after the model is downloaded.
        summarizer = await self.ai.summarizer.create(options);
        summarizer.addEventListener('downloadprogress', (e) => {
          console.log(e.loaded, e.total);
        });
        await summarizer.ready;
        return summarizer;
      }
}

async function summarize(text, context, signal) {
    try {
        if (signal.aborted) {
            throw new DOMException('Operation aborted', 'AbortError');
        }

        const summarizer = await getSummarizer();

        // Listen for abort event to cancel summarization
        return new Promise(async (resolve, reject) => {
            const onAbort = () => {
                console.log('Abort signal received. Destroying summarizer.');
                summarizer.destroy();
                reject(new DOMException('Operation aborted', 'AbortError'));
            };

            signal.addEventListener('abort', onAbort);

            try {
                const result = await summarizer.summarize(text, {context});
                await summarizer.destroy();
                resolve(result);
            } catch (error) {
                await summarizer.destroy();
                reject(error);
            } finally {
                signal.removeEventListener('abort', onAbort);
            }
        });
    } catch (error) {
        console.log('Error during summarization:', error);
        throw error;
    }
}

async function summarizeStreaming(text, context, signal) {
    try {
        if (signal.aborted) {
            throw new DOMException('Operation aborted', 'AbortError');
        }

        const summarizer = await getSummarizer();

        // Listen for abort event to cancel summarization
        const streamPromise = new Promise(async (resolve, reject) => {
            const onAbort = () => {
                console.log('Abort signal received. Destroying summarizer.');
                summarizer.destroy();
                reject(new DOMException('Operation aborted', 'AbortError'));
            };

            signal.addEventListener('abort', onAbort);

            try {
                const stream = await summarizer.summarizeStreaming(text, { context });
                resolve(stream);
            } catch (error) {
                await summarizer.destroy();
                reject(error);
            }
            // Do not remove the abort listener here; it will be handled after stream consumption
        });

        const stream = await streamPromise;

        // Create a wrapper async generator to handle summarizer destruction after stream consumption
        async function* wrappedStream() {
            try {
                for await (const chunk of stream) {
                    yield chunk;
                }
            } finally {
                console.log('Stream consumption complete. Destroying summarizer.');
                await summarizer.destroy();
                signal.removeEventListener('abort', () => {}); // Remove the actual handler if possible
            }
        }

        return wrappedStream();
    } catch (error) {
        console.log('Error during summarization:', error);
        throw error;
    }
}

async function summarizeWithContext(text, context) {
    try {
        const summarizer = await getSummarizer();
        const result = await summarizer.summarize(text, { context });
        await summarizer.destroy();
        return result;
    } catch (error) {
        console.log('Error during summarization:', error);
        return '';
    }
}

async function summarizeLargeTextWithContext(text, context) {
    const chunks = text.match(/.{1,2000}/g);
    const summaries = [];
    for (const chunk of chunks) {
        const summary = await summarizeWithContext(cleanInput(chunk), context);
        summaries.push(summary);
    }
}

export { summarize, summarizeWithContext, summarizeLargeTextWithContext, summarizeStreaming };