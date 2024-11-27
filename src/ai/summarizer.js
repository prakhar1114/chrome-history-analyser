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

async function summarize(text) {
    try {
        const summarizer = await getSummarizer();
        const result = await summarizer.summarize(text, {
            context: 'Give interesting insights about user behaviours from the titles. Give important information about the user\'s interests and habits.',
        });
        await summarizer.destroy();
        return result;
    } catch (error) {
        console.log('Error during summarization:', error);
        return '';
    }
}

export { summarize };