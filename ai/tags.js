// Initialize a single AI session
let aiSession = null;

/**
 * Initializes and retrieves a single AI session.
 * Reuses the session if it's already created.
 * @returns {Promise<Object>} - The AI session object.
 */
async function getPromptAPISession() {
    if (aiSession) {
        return aiSession;
    }
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
        console.error("Error creating AI session:", error);
        throw new Error("Failed to create AI session. Please check your setup and try again.");
    }
}

/**
 * Generates tags for a single URL and title.
 * @param {string} url - The website URL.
 * @param {string} title - The website title.
 * @returns {Promise<string>} - A comma-separated string of tags.
 */
async function getTags(url, title) {
    const refined_prompt = createRefinedPrompt(url, title);
    try {
        const session = await getPromptAPISession();
        // const currentSession = await session.clone();
        // const tags = await currentSession.prompt(refined_prompt);
        // currentSession.destroy();

        const tags = await session.prompt(refined_prompt);

        return tags;
    } catch (error) {
        console.error("Error generating tags:", error);
        throw error;
    }
}

async function getTags2(url, title) {
    const refined_prompt = createRefinedPrompt(url, title);
    const session = await getPromptAPISession();
    let currentSession;
    try {
        currentSession = await session.clone();
    } catch (error) {
        aiSession.destroy();
        aiSession = null; // Reset the global session
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
    return tags;
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