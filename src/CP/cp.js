// handling competitive programming shortcuts!

const colors = require('colors');
const _name = require('../util').R_Number(10, 100);
const cp_template = require('../util')._competitve_programming_template();
const fs = require('fs');


export function handle_cp(args) {
    let file_name = args[3] ? args[3] : `${_name}.cpp`;
    fs.writeFileSync(file_name, cp_template, (err) => {
        console.log(`${err}`.red);
    });
    console.log(`${file_name} created successfully!`.green);
    process.exit(0);
}

export function run_file(args) {
    console.log('handle running file here!'.red);
    process.exit(0);
}