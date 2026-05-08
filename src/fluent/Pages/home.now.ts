import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Home Page',
    category: 'custom',
    pageId: 'home_page',
    shortDescription: 'Home page for SN Poker portal',
    containers: [
        {
            $id: '5a1888e09370c710ba8dfd29dd03d60c',
            order: 1,
            name: 'Home Page - Container 1',
            rows: [
                {
                    $id: 'c22840249370c710ba8dfd29dd03d692',
                    order: 1,
                    columns: [
                        {
                            $id: '4a2840249370c710ba8dfd29dd03d697',
                            order: 1,
                            instances: [
                                {
                                    $id: '4138c8ac9330c710ba8dfd29dd03d6e8',
                                    widget: 'bc2705a1e1154428aa5b6d508f4a1562',
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
            width: 'container-fluid',
        },
    ],
})
