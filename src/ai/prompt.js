async function getPromptSession() {
    const {available, defaultTemperature, defaultTopK, maxTopK } = await ai.languageModel.capabilities();

    if (available !== "no") {
      const session = await ai.languageModel.create();
      return session;
    } else {
        throw new Error('Prompt model is not available');
    }
    
}


async function promptAPIStreaming(text, context, signal) {
    try {
        if (signal.aborted) {
            throw new DOMException('Operation aborted', 'AbortError');
        }

        const promptSession = await getPromptSession();

        // Listen for abort event to cancel summarization
        const streamPromise = new Promise(async (resolve, reject) => {
            const onAbort = () => {
                console.log('Abort signal received. Destroying prompt session.');
                promptSession.destroy();
                reject(new DOMException('Operation aborted', 'AbortError'));
            };

            signal.addEventListener('abort', onAbort);

            try {
                const stream = await promptSession.promptStreaming(text, { context });
                resolve(stream);
            } catch (error) {
                await promptSession.destroy();
                reject(error);
            }
            // Do not remove the abort listener here; it will be handled after stream consumption
        });

        const stream = await streamPromise;

        // Create a wrapper async generator to handle writer destruction after stream consumption
        async function* wrappedStream() {
            try {
                for await (const chunk of stream) {
                    yield chunk;
                }
            } finally {
                console.log('Stream consumption complete. Destroying prompt session.');
                await promptSession.destroy();
                signal.removeEventListener('abort', () => {}); // Remove the actual handler if possible
            }
        }

        return wrappedStream();
    } catch (error) {
        console.log('Error during summarization:', error);
        throw error;
    }
}

export { promptAPIStreaming };