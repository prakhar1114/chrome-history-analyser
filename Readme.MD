# My History Analyses
## TODO

- [X] Add chrome local storage DB
- [X] index history items
- [X] Cleanup looks
  -  [ ] Storage not appearing in Application tab in extension

- [ ] Website content indexing not working
  -  [ ] keep all host permission optional: maybe use external api if allowed to fetch content: later
   - [X] default to indexing from title and url
   - [ ] maybe use content indicators as used by google by doing a google search with the url, get the first result use it for context of summary
- [ ] use writer api for summary description generation, give it more context, maybe fetch from google metadata
- [ ] Maybe limit indexing to one month to start with: to fasten it up

- [X] Store failed indexing keys to keep on retrying whenever available with a retry count, add batch processing too: add logic for continue indexing
- [X] Add logic to populate % indexing complete and add logic for refresh button
- [ ] Make index old data, continue indexing button: either one visible, decide on default continuous indexing, Make a button to pause and play indexing last 3 months history :yellow_circle:
- [X] Remove use of import scripts
- [X] make webpack for chrome extension
- [X] use fuzzy search for search

### History Dashboard TODO:
- [X] Search history of the selected time : maybe histogram/ top items :green_circle:
- [X] The Text summary, should be of the selected time period, not the whole history :green_circle:
- [ ] More specific tags
- [ ] Filter by tags, exclude filters :red_circle:
- [ ] Rewrite summary to be visually appealingg and useful :red_circle:
- [ ] Write, Rewrite API for summary :yellow_circle:
- [ ] Embedding search for history items :green_circle:
- [ ] Generate multiple embeddings for each history item and use them for search
- [ ] Token search should be from tags space, text/questions search should be from summary space and maybe titles using embeddings
- [X] Add exclude filters
- [ ] Beautify summary: add a list of all domains, which expand to show its contents on click
- [ ] My snippet library: will appear in drop down on selecting and right clicking in web browser

## General Notes
- npm run dev: to run dev server to automatically update dist always
- npm run build: to build the dist folder manually

## Dashboard Idea
1. Give me a summary of my browsing history for the last X days :red_circle:
    - create a text summary
    - can contain top 10 visited sites and the number of times visited
    - create a word cloud of all tags associated with the history items
    - counts of few common words like: entertainment, work, social and counts for them, "+"
        - "+" sign allows users to add more words to the list
        - the function should search these words within history items and give a count of how many times it appeared
    - everything could be % since we have limited number of links hit
2. Maybe compare this with other months :green_circle:
3. Allow synonym search: check how google does it :green_circle:
4. Allow multitag matching as AND or OR :yellow_circle:
5. Crawling and indexing of website content :yellow_circle:

Create a story around it:
- it is getting more and more about giving the write context to the required places
- This will help you generate context for you 
- With access to your history, it can help you understanding yourself better


# Announcement

- [X] Announce on twitter and reddit and collect users for betatesting? on twitter just get design ideas and interest
- [ ] maybe just showcase using a video


# Features
Possibility to search history with date instead of manually adding it as a filter
