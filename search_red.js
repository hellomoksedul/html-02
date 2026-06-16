const fs = require('fs');
const content = fs.readFileSync('01.html', 'utf8');

const matches = [];
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('red') || line.includes('#ff') || line.includes('rgb(')) {
    matches.push(`${idx + 1}: ${line.trim()}`);
  }
});

console.log("Matches:", matches);
