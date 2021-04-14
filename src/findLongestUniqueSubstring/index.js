export default function findLongestUniqueSubstring (s) {
    if(s.length <= 1) return s.length;

    let total = [];
    let current = "";

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        const charAt = current.indexOf(char);
        if(charAt === -1) {
            current += char;
            if(i === s.length - 1) total.push(current.length);
        } else {
            total.push(current.length);
            current = current.substring(charAt + 1, current.length) + char;
        }
    }

    return Math.max(...total);
};