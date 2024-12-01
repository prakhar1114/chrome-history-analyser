async function getWriter() {
    const options = {
        sharedContext: 'This is a list of titles visited by the user',
        tone: 'funny',
      };
      
    let writer =  await ai.writer.create(options);
    return writer;
}


async function writeStreaming(text, context, signal) {
    try {
        if (signal.aborted) {
            throw new DOMException('Operation aborted', 'AbortError');
        }

        const writer = await getWriter();

        // Listen for abort event to cancel summarization
        const streamPromise = new Promise(async (resolve, reject) => {
            const onAbort = () => {
                console.log('Abort signal received. Destroying writer.');
                writer.destroy();
                reject(new DOMException('Operation aborted', 'AbortError'));
            };

            signal.addEventListener('abort', onAbort);

            try {
                const stream = await writer.writeStreaming(text, { context });
                resolve(stream);
            } catch (error) {
                await writer.destroy();
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
                console.log('Stream consumption complete. Destroying writer.');
                await writer.destroy();
                signal.removeEventListener('abort', () => {}); // Remove the actual handler if possible
            }
        }

        return wrappedStream();
    } catch (error) {
        console.log('Error during summarization:', error);
        throw error;
    }
}

export { writeStreaming };