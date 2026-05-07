import { SPTheme } from '@servicenow/sdk/core'

SPTheme({
    $id: Now.ID['spt10'],
    name: 'SN Poker Theme',
    header: "4a371129d99e407e8747fed8d4a236e4",
    footer: "2c8a3327ecf7496083f6933acdb2fae2",
    customCss: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        $main-background: #293E40;
        $main-green: #62D84E;
        $secondary-green: #81B5A1;
        $dark-grey: #1b2a2c;
        $lighter-grey: #3e5658;
        $light-grey: #e8edee;
        $white: #ffffff;
        $white2: #f5f7f7;
        $sucess: #a4e84e;
        $warn: #f2a93b;
        $error: #e8564a;
        $blue: #4a9ee8;

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        };
        html {
            font-size: 62.5%;
        }
        body{
            font-family: "Roboto", system-ui, -apple-system, sans-serif;
            background-color: $main-background;
        };
        img, picture, svg, video {
            display: block;
            max-width: 100%;
        }
        input, textarea, button, select {
            font: inherit;
        }
    `
})