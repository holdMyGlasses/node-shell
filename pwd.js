
    module.exports = function pwd() {
        process.stdout.write('\n your current directory is: ' + process.cwd())
        process.stdout.write('\nprompt > ')
    }

