const _p = require('./msg/msg');
const _cp = require('./CP/cp');

export function cli(args) {
    if (args[2] == "help") _p.init();
    else if (args[2] == "cp") _cp.handle_cp(args);
    else if (args[2] == 'run') _cp.run_file(args);
    else _p.handle_error(args);
}