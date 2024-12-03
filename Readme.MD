# TraceMyJourney

TraceMyJourney is a Chrome extension that revolutionizes the way you view and interact with your browsing history. By leveraging advanced search indexing, tag generation, and interactive visualizations, TraceMyJourney provides a comprehensive and engaging experience to help you better understand and manage your online activities.

## Demo Video
[TraceMyJourney Demo Video](https://youtu.be/Kp_4MBp7q08)

## Features

- **Search History Indexing & Tag Generation**
  - Automatically indexes your browsing history and generates relevant tags for each history item.
  
- **Tag Filters**
  - Easily filter your browsing history based on generated tags to find specific activities quickly.
  
- **Interactive Word Clouds**
  - Visualize your browsing history through dynamic word clouds created from tags. Clicking on a word cloud allows you to fetch all related history items instantly.
  
- **Quick Summaries**
  - Generate concise summaries of your browsing history for specific topics, providing you with insightful overviews.
  
- **Creative Engagements**
  - If you're feeling creative, generate poems, jokes, and other engaging content based on your browsing history.
  
## Installation

1. **Download the Repository**
   ```bash
   git clone https://github.com/prakhar1114/chrome-history-analyser
   ```
   
2. **Build the Extension**
   Navigate to the project directory and build the extension using Webpack:
   ```bash
   npm run build
   ```
   
3. **Load the Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click on **Load unpacked** and select the `dist` folder from the cloned repository.
   
4. **Usage**
   - After loading the extension, it will start indexing your browsing history. 
   
   **Please note that indexing older history may take some time initially. Over time, when more and more history is indexed, the word clouds will become more and more accurate. Indexing of all the new history items are done in real-time by the background service worker.**
   **Since the summarization and tag generation api is still under development, infrequently they tend to fail. Just pressing the refresh button to retry generation should fix the issue.**

## Usage

- **Viewing History**
  - Access TraceMyJourney from the Chrome toolbar to view your indexed browsing history.
  
- **Searching & Filtering**
  - Use the search bar to find specific history items or apply tag filters to narrow down your results.
  
- **Interactive Word Clouds**
  - Click on words within the word cloud to view all related history items.
  
- **Generating Summaries**
  - Select a specific topic to receive a quick summary of your browsing activities related to that topic.
  
- **Creative Features**
  - Utilize the creative tools to generate poems, jokes, and more based on your browsing history for a fun and engaging experience.

## Notes

- **Development**
  - To run the development server and automatically update the `dist` folder:
    ```bash
    npm run dev
    ```
  
  - To manually build the `dist` folder:
    ```bash
    npm run build
    ```

### TODO
- [X] Add chrome local storage DB
- [X] Index history items
- [X] Cleanup looks
- [ ] Website content indexing not working
  - [ ] Keep all host permissions optional: maybe use external API if allowed to fetch content: later
  - [X] Default to indexing from title and URL
  - [ ] Maybe use content indicators as used by Google by doing a Google search with the URL, get the first result use it for context of summary
- [ ] Use writer API for summary description generation, give it more context, maybe fetch from Google metadata
- [ ] Maybe limit indexing to one month to start with to fasten it up
- [X] Store failed indexing keys to keep on retrying whenever available with a retry count, add batch processing too: add logic for continue indexing
- [X] Add logic to populate % indexing complete and add logic for refresh button
- [X] Remove use of import scripts
- [X] Make Webpack for Chrome extension
- [X] Use fuzzy search for search

### History Dashboard TODO
- [X] Search history of the selected time : maybe histogram/ top items :green_circle:
- [X] The Text summary should be of the selected time period, not the whole history :green_circle:
- [ ] More specific tags
- [X] Filter by tags, exclude filters :red_circle:
- [ ] Rewrite summary to be visually appealing and useful :red_circle:
- [ ] Write, Rewrite API for summary :yellow_circle:
- [ ] Embedding search for history items :green_circle:
- [ ] Generate multiple embeddings for each history item and use them for search
- [ ] Token search should be from tags space, text/questions search should be from summary space and maybe titles using embeddings
- [X] Add exclude filters
- [ ] Beautify summary: add a list of all domains, which expand to show its contents on click
- [ ] My snippet library: will appear in drop down on selecting and right-clicking in web browser
