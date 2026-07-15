import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['wi2'],
    id: 'active-players',
    name: 'Active Players',
    clientScript: Now.include('./client.js'),
    serverScript: Now.include('./server.js'),
    htmlTemplate: Now.include('./template.html'),
    linkScript: Now.include('./link.js'),
    customCss: Now.include('./style.scss'),
})