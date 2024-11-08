async function getSummarizer() {
    const canSummarize = await ai.summarizer.capabilities();
    let summarizer;
    if (canSummarize && canSummarize.available !== 'no') {
        if (canSummarize.available === 'readily') {
            // The summarizer can immediately be used.
            summarizer = await ai.summarizer.create();
            console.log('summarizer ready now');
        } else {
            // The summarizer can be used after the model download.
            summarizer = await ai.summarizer.create();
            summarizer.addEventListener('downloadprogress', (e) => {
                console.log(e.loaded, e.total);
            });
            await summarizer.ready;
        }
    } else {
        console.log('Feature not supported');
        throw new Error('Feature not supported');
        // The summarizer can't be used at all.
    }
    return summarizer;
}

export { getSummarizer };