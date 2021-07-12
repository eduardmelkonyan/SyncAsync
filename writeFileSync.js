const fs = require('fs');
const result = fs.writeFileSync('info', 'Eduard Melkonyan, 22 years old, study: ASUE, faculty: Management, email: eduard@mail.ru')
const result1 = fs.readFileSync('info', 'utf-8');
console.log(result1);