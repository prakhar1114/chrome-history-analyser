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
        feature: "Write a funny poem from my history",
        context: 'Generate a poem about the user history from the titles. It should include the user history in a creative way. Add references to the user history in the poem.',
        model: 'writer',
        seed_prompt: 'Generate a poem about the user history from the titles. It should include the user history in a creative way. Add references to the user history in the poem. It should have a rhyming scheme and be in a poetic form with \n to separate lines. Attached below is the list of titles.'
    },
    {
        feature: "Write 5 joke with references that only I will get?",
        context: 'Generate 5 jokes about the user history from the titles. It should include the user history in a creative way. Add references to the user history in the joke.',
        model: 'writer',
        seed_prompt: 'Generate 5 jokes about the user history from the titles. It should include the user history in a creative way. Write it in a funny way as a numbered list. Attached below is the list of titles.'
    },
    {
        feature: "What a summary of my research to share with my colleagues?",
        context: 'Summarize user behaviour from the titles. Return a concise summary about different points in markdown format. For each part of summary, use format: heading, description, keywords. Dont talk about the same thing in multiple parts. Dont talk about very generic things.',
        model: 'writer',
        seed_prompt: 'Summarize user behaviour from the titles. Return a concise summary about different points in markdown format. For each part of summary, use format: heading, description, keywords. Dont talk about the same thing in multiple parts. Dont talk about very generic things. Attached below is the list of titles.'
    },
]

export { featureObjects };