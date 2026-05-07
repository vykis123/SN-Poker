import { SPHeaderFooter } from '@servicenow/sdk/core'

SPHeaderFooter({
    $id: Now.ID['sph10'],
    name: 'SN Poker Header',
    htmlTemplate: `
        <nav class="nav">
            <div class="logo">
                <img src="x_872084_sn_poker.sn-poker-logo.svg" alt="SN Poker Image" width="164" height="32" />
            </div>
        </nav>
    `,
    customCss: `
        .nav {
            padding: 1rem;
        }
    `,

})
