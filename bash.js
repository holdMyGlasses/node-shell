process.stdout.write('prompt > ')

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()

    process.stdout.write('You typed: ' + cmd)
    process.stdout.write('\nprompt > ')

    if (cmd === 'pwd'){
        process.stdout.write('\n your current directory is: ' + process.cwd())
        process.stdout.write('\nprompt > ')
    }

})
