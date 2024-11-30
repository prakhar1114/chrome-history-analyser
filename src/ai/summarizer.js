

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

async function summarize(text, signal) {
    try {
        if (signal.aborted) {
            throw new DOMException('Operation aborted', 'AbortError');
        }

        const summarizer = await getSummarizer(signal);

        // Listen for abort event to cancel summarization
        return new Promise(async (resolve, reject) => {
            const onAbort = () => {
                console.log('Abort signal received. Destroying summarizer.');
                summarizer.destroy();
                reject(new DOMException('Operation aborted', 'AbortError'));
            };

            signal.addEventListener('abort', onAbort);

            try {
                const result = await summarizer.summarize(text, {
                    context: 'Give interesting insights about user behaviours from the titles. Give important information about the user\'s interests and habits.',
                });
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

export { summarize, summarizeWithContext, summarizeLargeTextWithContext };