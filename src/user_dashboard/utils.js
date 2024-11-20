// write a function to extract domain name from a url
function extractDomain(url) {
    return new URL(url).hostname;
  }
  
  
  function markdownToHtml(markdownText) {
    // Convert bold text: **text**
    let html = markdownText.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Convert italic text: *text*
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Convert bullet points: * item
    html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');
    
    // Wrap list items in <ul> tags
    html = html.replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>');
  
    return html;
  }

export { extractDomain, markdownToHtml };