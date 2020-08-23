const shell = require('shelljs');

export function R_Number(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let val = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    return `code_${val}`;
}

export function brightness_manager_for_external_monitor(args) {
    let dim_val = args[3] ? args[3] : 0.7;
    shell.exec(`xrandr --output DP-1 --brightness ${dim_val}`, {
        silent: true
    }, (error, stdout, stderr) => {
        if (stdout) console.log(stdout.blue);
        if (stderr) console.log(stderr.red);
        if (error) console.log(`Error Code : + ${error}`.red);
    });
    process.exit(0);
}

export function shutdown() {
    shell.exec('shutdown now', {
        silent: true
    }, (error, stdout, stderr) => {
        if (stdout) console.log(stdout.blue);
        if (stderr) console.log(stderr.red);
        if (error) console.log(`Error Code : + ${error}`.red);
    });
    process.exit(0);
}