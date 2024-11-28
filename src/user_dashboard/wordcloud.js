import * as d3 from 'd3';
import cloud from 'd3-cloud';

import { createOrGetWidget } from './widgets.js';
import { getHistoryWithTopNStats } from './history.js';
import { adjustWidgetSize } from './widgets.js';

async function addOrUpdateWordCloudWidget(wordDistribution, onSelectWord, onDeselectWord) {
    const newWidget = createOrGetWidget('wordcloud-main', 'Word Cloud');

  // delete children containing *recent-history-contents*
  while (newWidget.lastChild && newWidget.lastChild.className && newWidget.lastChild.className.includes('wordcloud-contents')) {
    newWidget.removeChild(newWidget.lastChild);
    }

  createWordCloudElement(newWidget, wordDistribution, onSelectWord, onDeselectWord);
}

/**
 * Creates and appends a word cloud to the specified widget.
 * @param {HTMLElement} widget - The DOM element to which the word cloud is appended.
 * @param {Array} wordDistribution - An array of word objects with 'text' and 'size' properties.
 * @param {Function} onSelectWord - Callback invoked when a word is selected.
 * @param {Function} onDeselectWord - Callback invoked when a word is deselected.
 */
function createWordCloudElement(widget, wordDistribution, onSelectWord, onDeselectWord) {
    // Remove any existing word cloud content
    const wordCloudContainer = document.createElement('div');
    wordCloudContainer.className = 'wordcloud-contents';
    widget.appendChild(wordCloudContainer);

    // Define dimensions for the word cloud
    const width = 500;
    const height = 400;

    // Create an SVG element for the word cloud: canvas where it renders
    const svg = d3.select(wordCloudContainer)
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // Initialize currently selected word (null means no selection)
    let selectedWord = null;

    // Define the layout for the word cloud: computer position of each word based on size and frequency
    const layout = cloud()
        .size([width, height])
        .words(wordDistribution.map(d => ({ text: d.text, size: d.size })))
        .padding(5)
        .rotate(() => 0) // No rotation; modify as needed
        .font('Arial')
        .fontSize(d => scaleFontSize(d.size))
        .on('end', draw);

    // start positioning words
    layout.start();

    /**
     * Scales the font size based on word frequency.
     * @param {number} size - The frequency count of the word.
     * @returns {number} - The scaled font size.
     */
    function scaleFontSize(size) {
        const minSize = 10;
        const maxSize = 100;
        const sizes = wordDistribution.map(d => d.size);
        const min = Math.min(...sizes);
        const max = Math.max(...sizes);
        return ((size - min) / (max - min)) * (maxSize - minSize) + minSize;
    }

    /**
     * Draws the word cloud on the SVG canvas.
     * @param {Array} words - The array of word objects with positioning data.
     */
    function draw(words) {
        svg.append('g')
            .attr('transform', `translate(${width / 2},${height / 2})`)
            .selectAll('text')
            .data(words)
            .enter().append('text')
            .each(function(d) {
                d.originalColor = d3.schemeCategory10[Math.floor(Math.random() * 10)];
            })
            .style('font-family', 'Arial')
            .style('fill', d => d.originalColor)
            .style('font-size', d => `${d.size}px`)
            .attr('text-anchor', 'middle')
            .attr('transform', d => `translate(${d.x},${d.y}) rotate(${d.rotate})`)
            .text(d => d.text)
            .style('cursor', 'pointer')
            // Click event to handle selection
            .on('click', function(event, d) {
                // console.log('Clicked element:', this); // Debugging statement
                // console.log('Selected word before:', selectedWord); // Debugging statement

                // If the clicked word is already selected, deselect it
                if (selectedWord === this) {
                    d3.select(this).classed('word-selected', false);
                    selectedWord = null;
                    console.log(`Word deselected: ${d.text}`);
                    onDeselectWord(d.text); // Invoke deselect callback
                } else {
                    // Deselect the previously selected word, if any
                    if (selectedWord) {
                        d3.select(selectedWord).classed('word-selected', false);
                        // const prevData = d3.select(selectedWord).data()[0];
                        // console.log(`Word deselected: ${prevData.text}`);
                        // onDeselectWord(prevData.text); // Invoke deselect callback for previous word
                    }
                    // Select the new word
                    d3.select(this).classed('word-selected', true);
                    selectedWord = this;
                    console.log(`Word selected: ${d.text}`);
                    onSelectWord(d.text); // Invoke select callback
                }

                // Placeholder for additional callback functions
                // addYourCallbackFunction(d.text);
            })
            // Mouseover event to highlight word
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .style('fill', 'orange');
            })
            // Mouseout event to remove highlight
            .on('mouseout', function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .style('fill', d.originalColor);

                // If the word is selected, maintain the 'word-selected' style
                if (selectedWord === this) {
                    d3.select(this)
                        .style('fill', 'red'); // Ensure selected words retain their selected color
                }
            });
    }

    // Adjust widget size as needed
    adjustWidgetSize(widget, ['.wordcloud-contents'], 100);
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