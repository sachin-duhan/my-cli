const colors = require('colors');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function init() {
    console.log(`
_________________________________________________________________________

                    WELCOME TO SACHIN DUHAN 's CLI!
_________________________________________________________________________
`.blue);
    console.log(`
                              .       .                            
                             / ".   .' "                            
                     .---.  <    > <    >  .---.                    
                     |    \  \ - ~ ~ - /  /    |                    
         _____          ..-~             ~-..-~                     
        |     |   \~~~\.'                    "./~~~/                
       ---------   \__/                        \__/                 
      .'  O    \     /               /       \  "                   
     (_____,    "._.'               |         }  \/~~~/             
      "----.          /       }     |        /    \__/              
            "-.      |       /      |       /      ". ,~~|          
                ~-.__|      /_ - ~ ^|      /- _      "..-'          
                     |     /        |     /     ~-.     "-. _  _  _ 
                     |_____|        |_____|         ~ - . _ _ _ _ _>
    `.grey);

    rl.question("Enter 'Y' for more details - ", function saveInput(name) {
        handle_user_input(name);
        rl.close();
    });
}

export function handle_error(args) {
    console.log('OOPS! Invalid argument'.red);
    rl.question("Enter 'Y' for more details - ", function saveInput(name) {
        handle_user_input(name);
        rl.close();
    });
}

function handle_user_input(input) {
    if (input == 'Y' || input == 'yes' || input == 'y' || input == 'yeah') {
        console.log(`
_________________________________________________________________________

                            OVERVIEW and Commands Supported
_________________________________________________________________________
`.blue);

        console.log(`

        1. USE GIT              - duhan git push -m '{{message}}'
        2. start VS code        - duhan code {{dir}}
        3. run servers          - duhan {{server_name}}
        4. SHUTDOWN PC          - duhan shutdown
        5. RESTART              - duhan restart
        6. LAUNCH STUDY MODE    - duhan study
        7. Doing competitve programming - duhan cp [name]
        8. Running a file - duhan run [name]
    `.yellow);
    }
    process.exit(0);
}