// Initialize a single AI session
let aiSession = null;

/**
 * Delays execution for a specified number of milliseconds.
 * @param {number} ms - Milliseconds to delay.
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Initializes and retrieves a single AI session.
 * Reuses the session if it's already created.
 * Implements a retry mechanism with exponential backoff.
 * @returns {Promise<Object>} - The AI session object.
 * @throws {Error} - If unable to create AI session after retries.
 */
async function getPromptAPISession() {
    if (aiSession) {
        return aiSession;
    }

    const maxRetries = 1;
    let attempt = 0;
    const baseDelay = 500; // Initial delay in ms

    while (attempt < maxRetries) {
        try {
            // Ensure the AI library is initialized
            const { available } = await ai.languageModel.capabilities();

            if (available !== "no") {
                aiSession = await ai.languageModel.create({
                    systemPrompt: "You are a friendly assistant and know the user. You are helping the user to analyze their browsing history and help them search it without exact keywords matching."
                });
                return aiSession;
            } else {
                throw new Error("AI model not available. Please check your setup and try again.");
            }

        } catch (error) {
            attempt++;
            console.info(error)
            console.info(`Error creating AI session (Attempt ${attempt} of ${maxRetries}):`, error);

            if (attempt >= maxRetries) {
                console.error("Max retries reached. Unable to create AI session.");
                throw new Error("Failed to create AI session after multiple attempts. Please check your setup and try again.");
            }

            // Exponential Backoff Delay
            const delayDuration = baseDelay * Math.pow(2, attempt - 1);
            console.log(`Retrying in ${delayDuration/1000} s...`);
            await delay(delayDuration);
        }
    }
}

/**
 * Generates tags for a single URL and title.
 * @param {string} url - The website URL.
 * @param {string} title - The website title.
 * @returns {Promise<string[]>} - An array of tag strings.
 */
async function getTags(title, url) {
    const refined_prompt = createRefinedPrompt(sanitizeUrl(url), title);
    const session = await getPromptAPISession();
    let currentSession;
    try {
        currentSession = await session.clone();
    } catch (error) {
        if (aiSession) {
            aiSession.destroy();
            aiSession = null; // Reset the global session
        }
        session = await getPromptAPISession(); // Get a fresh session
        currentSession = await session.clone(); // Try cloning again
    }
    
    let tags;
    try {
        tags = await currentSession.prompt(refined_prompt);
    } catch (error) {
        console.log("Error generating tags:", error);
        tags = "FAILED";
    }
    await currentSession.destroy();
    // TODO: might need writer, rewriter api to correct structure, sometimes it gives wrong structure
    return getTagsArray(tags);
}


/**
 * Constructs the refined prompt for Gemini Nano.
 * @param {string} url - The website URL.
 * @param {string} title - The website title.
 * @returns {string} - The formatted prompt.
 */
function createRefinedPrompt(url, title) {
    return `
You are an AI assistant specialized in generating relevant tags for websites to enhance semantic search functionality.

Given the following website URL and title, perform the following tasks:

1. **Generate 5-10 specific tags** that accurately represent the content and topics of the page based on the URL and title.
2. **Add 2-3 generic tags** from the predefined list below that best categorize the website's content.
3. Return only tags in a comma-separated string.

**Predefined Generic Tags:** Work, Productivity, Entertainment, Social, Education, Technology, Health, News, Finance, Lifestyle

**Website URL:** ${url}
**Title:** ${title}

**Tags:**`;
}

function getTagsArray(tags) {
    return tags.split(',').map(tag => tag.trim().toLowerCase());
}

function sanitizeUrl(url) {
    // Remove the protocol part (http:// or https://)
    const sanitizedUrl = url.replace(/^https?:\/\//, '');

    // Replace all characters that are not alphanumeric, '/', '.', '-', or '=' with '_'
    return sanitizedUrl.replace(/[^a-zA-Z0-9\/\.\-=_]/g, '_');
}