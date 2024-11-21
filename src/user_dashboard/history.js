import { getHistoryInTimeRange } from '../utils/db.js';
import { getFilteredHistoryItems } from '../utils/search.js';

async function getHistory(startDate, endDate) {

    return new Promise((resolve, reject) => {
      chrome.history.search({text: '', startTime: startDate.getTime(), endTime: endDate.getTime(), maxResults: 40 }, (results) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          console.log(results);
          resolve(results);
        }
      });
    });
  }


/**
 * 
 * @param {*} startDate 
 * @param {*} endDate 
 * @param {*} N 
 * @returns 
 * 
 * 
 * (5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{hostname: 'www.cursor.com', titles: Array(6), count: 24}
1
: 
{hostname: 'www.youtube.com', titles: Array(12), count: 21}
2
: 
{hostname: 'mail.google.com', titles: Array(12), count: 18}
3
: 
{hostname: 'developer.chrome.com', titles: Array(2), count: 16}
4
: 
{hostname: 'github.com', titles: Array(7), count: 12}

example titles:

0
: 
{title: 'in cursur during indexing, is the results stored lcoally - Google Search', url: 'https://www.google.com/search?q=in+cursur+during+i…SAQkxMjUzMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'}
1
: 
{title: 'slack integration to notion - Google Search', url: 'https://www.google.com/search?q=slack+integration+…TSAQg2MzAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8'}
2
: 
{title: 'i want to convert a slack channel to notion document - Google Search', url: 'https://www.google.com/search?q=i+want+to+convert+…ugYGCAEQARgTkgcEOS4zN6AHgccC&sclient=gws-wiz-serp'}
3
: 
{title: 'convert pil image to dicom file - Google Search', url: 'https://www.google.com/search?q=convert+pil+image+…AdIBCDg0NzlqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8'}
4
: 
{title: 'super resolution models - Google Search', url: 'https://www.google.com/search?q=super+resolution+m…e0gEINjIyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8'}
5
: 
{title: 'super resolution model online free - Google Search', url: 'https://www.google.com/search?q=super+resolution+m…FmAMAiAYBkAYIkgcEMi4xM6AHklk&sclient=gws-wiz-serp'}
 */

export async function getHistoryWithTopNStats(startDate, endDate, N, selectedFilters) {
    const historyItems = await getHistoryInTimeRange(startDate.getTime(), endDate.getTime());
    const filteredHistoryItems = getFilteredHistoryItems(historyItems, selectedFilters);
    const parsedHistoryItems = filteredHistoryItems.map(item => parse_url_part(item.url, item.title));
    const hostnameMap = count_by_hostname(parsedHistoryItems);
    const hostnameTitleMap = createHostNameTitleMap(parsedHistoryItems);
    const sortedHostnames = Array.from(hostnameMap.entries()).sort((a, b) => b[1] - a[1]);
    const topNHostnames = sortedHostnames.slice(0, N);
    const topNHostnamesWithTitles = topNHostnames.map(item => ({ hostname: item[0], titles: hostnameTitleMap.get(item[0]), count: item[1] }));

    return topNHostnamesWithTitles;
}


function parse_url_part(url, title) {
    try {
        const parsedUrl = new URL(url);

        // Extract protocol without the trailing colon (e.g., 'https')
        const protocol = parsedUrl.protocol.replace(':', '');

        // Split hostname into parts to identify subdomain, domain, and TLD
        const hostnameParts = parsedUrl.hostname.split('.');
        let subdomain = '';
        let domain = '';
        let tld = '';

        if (hostnameParts.length > 2) {
            subdomain = hostnameParts.slice(0, hostnameParts.length - 2).join('.');
            domain = hostnameParts[hostnameParts.length - 2];
            tld = hostnameParts[hostnameParts.length - 1];
        } else if (hostnameParts.length === 2) {
            domain = hostnameParts[0];
            tld = hostnameParts[1];
        } else {
            domain = parsedUrl.hostname;
            tld = '';
        }

        // Extract path (endpoint)
        const path = parsedUrl.pathname;

        // Extract query parameters as key-value pairs
        const queryParams = {};
        parsedUrl.searchParams.forEach((value, key) => {
            // If the key already exists, convert it into an array
            if (queryParams[key]) {
                if (Array.isArray(queryParams[key])) {
                    queryParams[key].push(value);
                } else {
                    queryParams[key] = [queryParams[key], value];
                }
            } else {
                queryParams[key] = value;
            }
        });

        // Extract fragment without the leading hash (e.g., 'section1')
        const fragment = parsedUrl.hash.replace('#', '');

        // Extract port if specified, else default based on protocol
        let port = parsedUrl.port;
        if (!port) {
            if (protocol === 'http') {
                port = '80';
            } else if (protocol === 'https') {
                port = '443';
            } else {
                port = '';
            }
        }

        return {
            protocol,
            subdomain,
            domain,
            tld,
            path,
            queryParams,
            fragment,
            port,
            // Additional Useful Components
            host: parsedUrl.host, // includes hostname and port
            hostname: parsedUrl.hostname,
            href: parsedUrl.href,
            origin: parsedUrl.origin,
            title
        };
    } catch (error) {
        console.error(`Invalid URL: ${url}`, error);
        return null;
    }
}

function count_by_hostname(parsedHistoryItems) {
    const hostnameMap = new Map();

    parsedHistoryItems.forEach(item => {
        const hostname = item.hostname;
        if (hostname) {
            if (hostnameMap.has(hostname)) {
                hostnameMap.set(hostname, hostnameMap.get(hostname) + 1);
            } else {
                hostnameMap.set(hostname, 1);
            }
        }
    });

    return hostnameMap;
}

function createHostNameTitleMap(parsedHistoryItems) {
    const hostnameMap = new Map();
    parsedHistoryItems.forEach(item => {
        const hostname = item.hostname;
        var title = item.title;
        const url = item.href;

        // if title is empty, use hostname as title
        if (!title) {
            title = hostname;
        }

        // maintain a list of titles for each hostname
        if (hostnameMap.has(hostname)) {
            // if title is already in the list, don't add it again
            if (!hostnameMap.get(hostname).some(t => t.title === title)) {
                hostnameMap.get(hostname).push({title, url});
            }
        } else {
            hostnameMap.set(hostname, [{title, url}]);
        }
    });

    return hostnameMap;
}



// export { getHistory };