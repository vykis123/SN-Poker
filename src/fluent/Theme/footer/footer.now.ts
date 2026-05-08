import { SPHeaderFooter } from '@servicenow/sdk/core'

SPHeaderFooter({
    $id: Now.ID['spf10'],
    name: 'SN Poker Footer',
    htmlTemplate: `
        <p class="footer_text"> SN Poker Application. All rights by Vykis © {{::c.currentDate}}</p>
    `,
    customCss: `.footer_text {
            font-size: clamp(1.2rem, 3vw, 1.7rem);
            color: $secondary-green;
            padding: 1rem 3rem;
            text-align: center;
            text-wrap: balance;
        }`,
    clientScript: Now.include('./client_script.js'),
    serverScript: Now.include('./server_script.js'),
    linkScript: Now.include('./link-script.js'),
})
