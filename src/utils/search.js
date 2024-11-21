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

export function getFilteredHistoryItems(historyItems, selectedFilters) {
    if (!selectedFilters || selectedFilters.length === 0) {
        return historyItems;
    }

    const lowerCaseFilters = selectedFilters.map(filter => filter.toLowerCase());

    return historyItems.filter(item => {
        const title = item.title ? item.title.toLowerCase() : '';
        const summary = item.summary ? item.summary.toLowerCase() : '';
        const tags = item.tags ? item.tags.map(tag => tag.toLowerCase()) : [];

        return lowerCaseFilters.some(filter => 
            title.includes(filter) ||
            summary.includes(filter) ||
            tags.includes(filter)
        );
    });
}
