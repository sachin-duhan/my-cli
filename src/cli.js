const _p = require('./msg');
export function cli(args) {
    if (args[2] == "start") {
        _p.init();
    }
}