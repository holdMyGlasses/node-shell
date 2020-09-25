const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
// const file = require('./file')

process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt > ')

    if(cmd === 'pwd'){
        pwd()
    }
    if(cmd === 'ls'){
        ls()
    }
console.log("CMD:", cmd)
    if(cmd === `cat ${file}`){
        console.log(file, "FIIILLEEE")
        cat(file)
    }


})

// module.exports = file;