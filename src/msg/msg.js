const colors = require('colors');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const init = () => {
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
};

const features_supported = [
    "USE GIT                             - duhan git push -m '{{message}}'",
    "start VS code  & chrome             - duhan code",
    "run servers                         - duhan server {{server_name}}",
    "SHUTDOWN PC                         - duhan shutdown",
    "RESTART                             - duhan restart",
    "LAUNCH STUDY MODE                   - duhan study",
    "Making a CP file                    - duhan cp [name]",
    "Making basic CPP file               - duhan cpp [name]",
    "Running a CP file                   - duhan build [name]",
    "Brightness adjustment for PC        - duhan dim [val]",
];

export const handle_error = (args) => {
    console.log('OOPS! Invalid argument'.red);
    console.log(`Enter 'duhan help' for more details`.green);
    process.exit(0);
}

const handle_user_input = (input) => {
    if (input == 'Y' || input == 'yes' || input == 'y' || input == 'yeah') {
        console.log(`
_________________________________________________________________________

                            OVERVIEW and Commands Supported
_________________________________________________________________________
`.blue);
    }

    // printing features here!
    features_supported.forEach((feature, index) => console.log(`  ${index+1} - ${feature}`.yellow));
    process.exit(0);
}