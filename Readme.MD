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
- [ ] Make index old data, continue indexing button: either one visible, decide on default continuous indexing :green_circle:
- [X] Remove use of import scripts
- [ ] make webpack for chrome extension
- [ ] use fuzzy search for search

## General Notes
- npm run dev: to run dev server to automatically update dist always
- npm run build: to build the dist folder manually

## Approach

Indexing:
- Create a variable to track the last indexed time epoch and store it in chrome local storage, defaulting to null
- create a button "Index Old Data": to dump existing db and index all history items
    - while indexing older data just use url, and title
    - generate tags and summary: use placeholder functions
    - add a button to popup for this

Generating summaries - Realtime:
- Run background script to generate summary for the tab and keyword and add it to the database collection, maybe wherever allowed? (what about banking and all)
    - use placeholder functions for generating summary and tags
    - use different functions for realtime summary and tag generation and older data indexing
- keep on updating last indexed time epoch


# Announcement

- [X] Announce on twitter and reddit and collect users for betatesting? on twitter just get design ideas and interest
- [ ] maybe just showcase using a video 


# Features
Possibility to search history with date instead of manually adding it as a filter
