import { summarizeLargeTextWithContext } from '../ai/summarizer.js';
import { getHistoryWithTopNStats } from './history.js';


async function getFullSummary(startDate, endDate, selectedFilters, excludeFilters) {
    const topNHostnamesWithTitles = await getHistoryWithTopNStats(startDate, endDate, 20, selectedFilters, excludeFilters);
    const historyItems = topNHostnamesWithTitles.map(item => item.titles).flat();

    const historyItemTitles = historyItems.map(item => item.title).join(', ');
    // Create chunks of 4000 characters
    const chunks = [];
    for (let i = 0; i < historyItemTitles.length; i += 2000) {
        chunks.push(historyItemTitles.slice(i, i + 2000));
    }

    let fullSummary = '';
    for (const chunk of chunks) {
        const summary = await summarizeLargeTextWithContext(chunk, "Summarize user behaviour from the titles. Give interesting insights about the user behaviour. Focus on unique and new things the user is doing.");
        fullSummary += summary;
    }

    return fullSummary;
}

async function generativePromptStreaming(summary, prompt, textbox) {
    const writer = await ai.writer.create({
        sharedContext: summary
    });
    
    prompt = "Write interesting engaging content using the context provided. Focus on the user's behaviour and interests and write content accordingly. Follow this prompt:" + prompt;

    const stream = await writer.writeStreaming(prompt);
    
    let fullContent = '';
    for await (const chunk of stream) {
        fullContent += chunk;

        if (textbox) {
            textbox.append(chunk);
        }
    }
      
    return fullContent;
}

async function generativePrompt(summary, prompt, textbox) {
    const writer = await ai.writer.create({
        sharedContext: summary
    });
    
    prompt = "Write interesting engaging content using the context provided. Focus on the user's behaviour and interests and write content accordingly. Follow this prompt:" + prompt;

    const stream = await writer.write(prompt);
      
    return stream;
}