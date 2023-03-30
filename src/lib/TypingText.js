export default async function TypingText(typingSpeed, typingText, setText) {
    var _cache = '';
    // Loop through each character in the text content
    for (let i = 0; i < typingText.length; i++) {
        // Add the next character to the text cache
        _cache = _cache + typingText.charAt(i);
        // Set the state to the text cache
        setText(_cache);
        await new Promise(resolve => setTimeout(resolve, typingSpeed));
    }
}