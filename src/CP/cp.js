const colors = require('colors');
const fs = require('fs');
const _name = require('../util').R_Number(10, 100);
const cp_template = require('../util')._competitve_programming_template();

export function handle_making_file(args) {
    let file_name = args[3] ? args[3] : `${_name}.cpp`;
    const re = new RegExp('/*.cpp');
    const data = Array.isArray(file_name.match(re)) ? cp_template : "";
    is_err = false;
    fs.writeFileSync(file_name, data, (err) => {
        console.log(`${err}`.red);
        is_err = true;
    });
    if (!is_err) console.log(`${file_name} created successfully!`.green);
    process.exit(0);
}

export function run_file(args) {
    console.log('handle running file here!'.red);
    process.exit(0);
}