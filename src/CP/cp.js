import {
    strict
} from 'assert';
const colors = require('colors');
const fs = require('fs');
const _name = require('../util').R_Number(10, 100);
const cp_template = require('../util')._competitve_programming_template();
const shell = require('shelljs');

export function handle_making_file(args) {
    let file_name = args[3] ? args[3] : `${_name}.cpp`;
    const re = new RegExp('/*.cpp');
    const data = Array.isArray(file_name.match(re)) ? cp_template : "";
    fs.writeFileSync(file_name, data, (err) => {
        console.log(`${err}`.red);
    });
    console.log(`${file_name} created successfully!`.green);
    process.exit(0);
}

export function run_file(args) {
    console.log('Will write this someother day!'.red);
    process.exit(0);
}

export function run_code(args) {
    // console.log(__dirname);
    shell.exec('cd /home/sachin/Desktop/Practice && code . && google-chrome', {
        silent: true
    }, (error, stdout, stderr) => {
        if (stdout) console.log(stdout.blue);
        if (stderr) console.log(stderr.red);
        if (error) console.log(`Error Code : + ${error}`.red);
    });
    process.exit(0);
}