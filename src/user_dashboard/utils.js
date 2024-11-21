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


/**
 * Cleans and sanitizes input text for safe processing with language models.
 *
 * @param {string} text - The input text to be sanitized.
 * @param {number} maxLength - Maximum allowed length for the input text.
 * @returns {string} The sanitized text.
 * @throws {Error} If the sanitized text exceeds the maximum length.
 */
function cleanInput(text, maxLength = 4000) {
  // 1. Remove Control Characters
  text = text.replace(/[\x00-\x1F\x7F]/g, '');

  // 2. Normalize Unicode
  text = text.normalize('NFC');

  // 3. Remove Malformed Unicode
  try {
      decodeURIComponent(escape(text));
  } catch (e) {
      text = text.replace(/�/g, '');
  }

  // 4. Escape Special Symbols
  text = text.replace(/[\\`{}\[\]()<>;|&]/g, '\\$&');

  // 5. Limit Repetitive Characters to 3
  text = text.replace(/(.)\1{3,}/g, '$1$1$1');

  // 6. Whitelist Allowed Characters (Alphanumerics and common punctuation)
  text = text.replace(/[^a-zA-Z0-9 .,!?'-]/g, '');

  // 7. Trim Excessive Whitespace
  text = text.replace(/\s+/g, ' ').trim();

  // 8. Validate Length
  if (text.length > maxLength) {
      throw new Error(`Input exceeds maximum allowed length of ${maxLength} characters.`);
  }

  return text;
}

export { extractDomain, markdownToHtml, cleanInput };