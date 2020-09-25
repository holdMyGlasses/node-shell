




const fs = require('fs')


module.exports =  function cat(file){
  fs.readFile(file, 'utf8', (err, fileContent) => {
        if (err){
            throw err}
else {
    process.stdout.write(fileContent)
    process.stdout.write('prompt > ')
}
})
}
