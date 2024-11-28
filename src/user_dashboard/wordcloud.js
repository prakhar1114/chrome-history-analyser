import * as d3 from 'd3';
import cloud from 'd3-cloud';

import { createOrGetWidget } from './widgets.js';
import { getHistoryWithTopNStats } from './history.js';

async function addOrUpdateWordCloudWidget(wordDistribution) {
    const newWidget = createOrGetWidget('wordcloud-main', 'Word Cloud');

  // delete children containing *recent-history-contents*
  while (newWidget.lastChild && newWidget.lastChild.className && newWidget.lastChild.className.includes('wordcloud-contents')) {
    newWidget.removeChild(newWidget.lastChild);
    }

  await createWordCloudElement(newWidget, wordDistribution);
}

async function createWordCloudElement(widget, wordDistribution) {
    // Remove any existing word cloud content
    const wordCloudContainer = document.createElement('div');
    wordCloudContainer.className = 'wordcloud-contents';
    widget.appendChild(wordCloudContainer);

    // Define dimensions for the word cloud
    const width = 500;
    const height = 400;

    // Create an SVG element for the word cloud
    const svg = d3.select(wordCloudContainer)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Define the layout for the word cloud
    const layout = cloud()
        .size([width, height])
        .words(wordDistribution.map(d => ({ text: d.text, size: d.size })))
        .padding(5)
        .rotate(() => 0) // No rotation; modify as needed
        .font('Impact')
        .fontSize(d => scaleFontSize(d.size))
        .on('end', draw);

    layout.start();

    // Function to scale font sizes based on word frequency
    function scaleFontSize(size) {
        const minSize = 10;
        const maxSize = 100;
        const sizes = wordDistribution.map(d => d.size);
        const min = Math.min(...sizes);
        const max = Math.max(...sizes);
        return ((size - min) / (max - min)) * (maxSize - minSize) + minSize;
    }

    // Function to draw the word cloud
    function draw(words) {
        svg.append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .selectAll('text')
            .data(words)
            .enter().append('text')
            .style('font-family', 'Impact')
            .style('fill', () => d3.schemeCategory10[Math.floor(Math.random() * 10)])
            .style('font-size', d => `${d.size}px`)
            .attr('text-anchor', 'middle')
            .attr('transform', d => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
            .text(d => d.text);
    }
}

async function getWordDistribution(startDate, endDate, selectedFilters, excludeFilters) {
    const { filteredHistoryItems } = await getHistoryWithTopNStats(startDate, endDate, 50, selectedFilters, excludeFilters);

    const tags = filteredHistoryItems.map(item => item.tags);

    const tagFrequency = new Map();

    // Optional: Define stop words to exclude
    const stopWords = new Set(['the', 'and', 'a', 'of', 'in', 'to', 'is', 'it', 'for', 'on']);

    // Step 3: Iterate and count frequencies with normalization and filtering
    for (const tagList of tags) {
        for (const tag of tagList) {
            const normalizedTag = tag.trim().toLowerCase();

            // Skip empty tags and stop words
            if (normalizedTag === "" || stopWords.has(normalizedTag)) continue;

            // Update the count in the Map
            tagFrequency.set(normalizedTag, (tagFrequency.get(normalizedTag) || 0) + 1);
        }
    }

    // Step 4: Convert Map to an array of { tag, count } objects
    const histogram = Array.from(tagFrequency, ([text, size]) => ({ text, size }));

    // Step 5: Sort the histogram by count descending
    histogram.sort((a, b) => b.size - a.size);

    // Optional: Limit to top N tags
    const topN = 100;
    const topNHistogram = histogram.slice(0, topN);

    return topNHistogram;

}

// 2 cloud: one for ones, one for lots
// add threshold filter based on frequency median: top 50% etc like that
// max and min of freqeuncy
// select one's randomly

export { addOrUpdateWordCloudWidget, getWordDistribution };