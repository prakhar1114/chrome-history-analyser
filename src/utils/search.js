import Fuse from 'fuse.js';
import { getAllHistoryItems } from '../utils/db.js';


export async function getSearchResults(raw_query) {
    const query = raw_query.trim().toLowerCase();
    const historyItems = await getAllHistoryItems();
    const fuse = new Fuse(historyItems, {
        keys: [
            'title',
            'summary',
            { name: 'tags', weight: 0.5 }
        ],
        threshold: 0.2
    });

    const results = fuse.search(query);
    return results;
}

export function getFilteredHistoryItems(historyItems, selectedFilters, excludeFilters) {
    // Start with all history items
    let filteredItems = historyItems;

    // Apply inclusion filters if any
    if (selectedFilters && selectedFilters.length > 0) {
        const lowerCaseSelectedFilters = selectedFilters.map(filter => filter.toLowerCase());

        filteredItems = filteredItems.filter(item => {
            const title = item.title ? item.title.toLowerCase() : '';
            const summary = item.summary ? item.summary.toLowerCase() : '';
            const tags = item.tags ? item.tags.map(tag => tag.toLowerCase()) : [];
            const url = item.url ? item.url.toLowerCase() : '';

            return lowerCaseSelectedFilters.some(filter => 
                title.includes(filter) ||
                summary.includes(filter) ||
                tags.includes(filter) ||
                url.includes(filter)
            );
        });
    }

    // Apply exclusion filters if any
    if (excludeFilters && excludeFilters.length > 0) {
        const lowerCaseExcludeFilters = excludeFilters.map(filter => filter.toLowerCase());

        filteredItems = filteredItems.filter(item => {
            const title = item.title ? item.title.toLowerCase() : '';
            const summary = item.summary ? item.summary.toLowerCase() : '';
            const tags = item.tags ? item.tags.map(tag => tag.toLowerCase()) : [];
            const url = item.url ? item.url.toLowerCase() : '';

            return !lowerCaseExcludeFilters.some(filter => 
                title.includes(filter) ||
                summary.includes(filter) ||
                tags.includes(filter) ||
                url.includes(filter)
            );
        });
    }

    return filteredItems;
}
