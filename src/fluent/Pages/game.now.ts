import { SPPage } from '@servicenow/sdk/core'

SPPage({
    title: 'Poker Game',
    category: 'custom',
    pageId: 'game',
    shortDescription: 'SN Poker game page',
    containers: [
        {
            $id: 'e83db9dec3828390aa47d8ec05013184',
            order: 1,
            name: 'Poker Game - Container 1',
            width: 'container-fluid',
            rows: [
                {
                    $id: '7e6d7912c3c28390aa47d8ec050131c8',
                    order: 1,
                    columns: [
                        {
                            $id: '3e6d7912c3c28390aa47d8ec050131cd',
                            order: 1,
                            instances: [
                                {
                                    $id: '2f6db912c3c28390aa47d8ec05013150',
                                    widget: '81d10c9b891349f4b6cdb4c5f6434d1b',
                                    order: 1,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})
