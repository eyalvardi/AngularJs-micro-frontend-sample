/**
 * Created by Eyal Vardi LTD. on 12/02/2021.
 */
const inquirer = require('inquirer');

module.exports = inquirer
    .prompt([
        {
            type : 'checkbox',
            name : 'projects',
            message: 'Choose the projects:',
            choices : [
                { name :'app-shell' ,value : 'shellAppConfig' ,checked: true},
                { name :'app-todo'  ,value : 'todoAppConfig'  ,checked: true},
                { name :'app-users' ,value : 'usersAppConfig' ,checked: true},
            ]
        },
        {
            type : 'checkbox',
            name : 'uiRouterTrace',
            message: 'Choose the trace level:',
            choices : [
                { name :'TRANSITION' ,checked: true},
                { name :'RESOLVE'       },
                { name :'HOOK'          },
                { name :'INVOKE'        },
                { name :'UIVIEW'        },
                { name :'VIEWCONFIG'    },
            ]
        },
        {
            type: 'confirm',
            name: 'isUiVisualizer',
            default : false,
            message : 'Turn on the UI Visualizer?'
        }

    ]);
