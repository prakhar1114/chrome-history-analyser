import { cleanInput } from './utils.js';
import { summarize, summarizeStreaming } from '../ai/summarizer.js';
import { marked } from 'marked';
import { fisherYatesShuffle } from './utils.js';
import { adjustWidgetSize } from './widgets.js';

async function createBasicSummaryElement(newWidget, topNHostnamesWithTitles, signal) {
    const historyItems = topNHostnamesWithTitles.map(item => item.titles).flat();
  
    // Append all history items to a single string
    const historyItemTitles = historyItems.map(item => item.title).join(', ');
  
    // Create chunks of 4000 characters
    const chunks = [];
    for (let i = 0; i < historyItemTitles.length; i += 2000) {
      chunks.push(historyItemTitles.slice(i, i + 2000));
    }
  
    const context = 'Summarize user behaviour from the titles. Return a concise summary about different points in markdown format. For each part of summary, use format: heading, description, keywords. Dont talk about the same thing in multiple parts. Dont talk about very generic things.';
  
    // Summarize each chunk and append to the result
    for (const chunk of chunks) {
  
      let textElement = document.createElement('p');
      textElement.classList.add('basic-summary-contents');
      newWidget.appendChild(textElement);

      let stream;
      try {
        stream = await summarizeStreaming(cleanInput(chunk), context, signal);

        for await (const streamChunk of stream) {
            textElement.innerHTML = marked.parse(streamChunk);
            adjustWidgetSize(newWidget, ['.widget-header', '.basic-summary-contents'], 60);
        }

      } catch (error) {
          if (error.name === 'AbortError') {
              console.log('Summarization task was aborted.');
              
              while (newWidget.lastChild && newWidget.lastChild.className && newWidget.lastChild.className.includes('contents')) {
                  newWidget.removeChild(newWidget.lastChild);
              }
  
              adjustWidgetSize(newWidget, ['.widget-header'], 20);
              return;
            } else {
              console.log('Error during summarization:', error);
              continue;
            }
      }
    }
  }

async function createBriefSummaryElement(newWidget, topNHostnamesWithTitles, signal) {
    const historyItems = topNHostnamesWithTitles.map(item => item.titles).flat();

    // shuffle history items
    const shuffledHistoryItems = fisherYatesShuffle(historyItems);

    // select top 100
    const top100HistoryItems = shuffledHistoryItems.slice(0, 100);

    // Append all history items to a single string
    const historyItemTitles = top100HistoryItems.map(item => item.title).join(', ');

    // Create chunks of 4000 characters
    const chunks = [];
    for (let i = 0; i < historyItemTitles.length; i += 3000) {
        chunks.push(historyItemTitles.slice(i, i + 3000));
    }
    console.log(chunks.length);

    const context = 'Summarize user history from the titles. Return a concise summary about different points in markdown format. For each part of summary, use format: heading, description, keywords. Dont talk about the same thing in multiple parts. Dont talk about very generic things.';


    let textElement = document.createElement('p');
    textElement.classList.add('basic-summary-contents');
    newWidget.appendChild(textElement);

    let chunk = chunks[0]
  
    let stream;
    try {
        stream = await summarizeStreaming(cleanInput(chunk), context, signal);

        for await (const streamChunk of stream) {
            textElement.innerHTML = marked.parse(streamChunk);
            adjustWidgetSize(newWidget, ['.widget-header', '.basic-summary-contents'], 60);
        }

    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Summarization task was aborted.');
            
            while (newWidget.lastChild && newWidget.lastChild.className && newWidget.lastChild.className.includes('contents')) {
                newWidget.removeChild(newWidget.lastChild);
            }

            adjustWidgetSize(newWidget, ['.widget-header'], 20);
            return;
        } else {
            console.log('Error during summarization:', error);
        }
    }
}



async function createInterestingThingElement(newWidget, topNHostnamesWithTitles, signal) {

}

async function createLearnElement(newWidget, topNHostnamesWithTitles, signal) {

}

async function createJokeElement(newWidget, topNHostnamesWithTitles, signal) {

}

export { createBasicSummaryElement, createBriefSummaryElement, createInterestingThingElement, createLearnElement, createJokeElement };