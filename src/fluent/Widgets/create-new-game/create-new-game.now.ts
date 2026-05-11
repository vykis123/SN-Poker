import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['wi0'],
    id: 'create-new-game',
    name: 'Create New Game',
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    htmlTemplate: Now.include('./template.html'),
    linkScript: Now.include('./link_script.js'),
    customCss: Now.include('./style.scss'),
})