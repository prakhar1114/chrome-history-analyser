const featureObjects = [
    {
        feature: "Detailed Summary",
        context: 'Summarize user behaviour from the titles. Return a concise summary about different points in markdown format. For each part of summary, use format: heading, description, keywords. Dont talk about the same thing in multiple parts. Dont talk about very generic things.',
        model: 'summarizer',
        seed_prompt: ''
    },
    {
        feature: "Brief Summary",
        context: 'Summarize user history from the titles. Return a concise summary about different points in markdown format. For each part of summary, use format: heading, description, keywords. Dont talk about the same thing in multiple parts. Dont talk about very generic things.',
        model: 'summarizer',
        seed_prompt: ''
    },
    {
        "feature": "Write a Funny Poem from My History",
        "context": "Create a humorous poem that creatively incorporates the user's browsing history titles, blending them seamlessly into the narrative.",
        "model": "prompt",
        "seed_prompt": "Generate a funny poem that includes elements from the user's browsing history titles. Use a rhyming scheme and format the poem with line breaks using \\n. Always remember to use \\n to separate the lines at the rhyming points. Below is a list of titles to inspire the poem:\n"
    },
    {
        "feature": "Write 5 Personalized Jokes",
        "context": "Create 5 humorous jokes that cleverly reference the user's browsing history titles in a personalized manner.",
        "model": "prompt",
        "seed_prompt": "Generate 5 funny jokes that incorporate elements from the user's browsing history titles. Present the jokes as a numbered list. Below is the list of titles to inspire the jokes:\n"
    },
    {
        "feature": "Summary of My Research to Share with Colleagues",
        "context": "Provide a concise and structured summary of the user's research based on browsing history titles, formatted in Markdown with clear sections.",
        "model": "prompt",
        "seed_prompt": "Summarize the user's research based on their browsing history titles. Present the summary in Markdown format, with each section containing a heading, a brief description, and relevant keywords. Ensure each section covers unique aspects without redundancy or overly generic information. Below is the list of titles to inspire the summary:\n"
    },
]

export { featureObjects };