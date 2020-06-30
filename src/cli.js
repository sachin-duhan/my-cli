const _p = require('./msg/msg');
const _cp = require('./CP/cp');
const util = require('./util');

export function cli(args) {
    if (args[2] == "help") _p.init();
    else if (args[2] == "cp") _cp.handle_making_file(args);
    else if (args[2] == 'run') _cp.run_file(args);
    else if (args[2] == "code") _cp.run_code(args);
    else if (args[2] == "shutdown") util.shutdown();
    else if (args[2] == "dim") util.brightness_manager_for_external_monitor(args);
    else _p.handle_error(args);
}