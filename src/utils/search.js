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
        threshold: 0.4
    });

    const results = fuse.search(query);
    return results;
}