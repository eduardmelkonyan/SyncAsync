const fs = require('fs')
fs.writeFile('info', 'Eduard Melkonyan, 22 years old, study: ASUE, faculty: Management, email: eduard@mail.ru', (err) =>{
    if(err){
        throw err;
    }else{
        console.log('ok');
    }
});
