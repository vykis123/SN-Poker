import { ChoiceColumn, ReferenceColumn, Table } from '@servicenow/sdk/core'

export const x_872084_sn_poker_user_sessions = Table({
    name: 'x_872084_sn_poker_user_sessions',
    label: 'SN Poker User Sessions',
    schema: {
        game: ReferenceColumn({
            label: 'Game',
            referenceTable: 'x_872084_sn_poker_sessions',
        }),
        player: ReferenceColumn({
            label: 'Player',
            referenceTable: 'sys_user',
        }),
        status: ChoiceColumn({
            dropdown: 'dropdown_with_none',
            label: 'Status',
        }),
    },
    actions: ['read', 'update', 'create'],
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    autoNumber: {
        prefix: 'SNUS',
    },
    index: [
        {
            name: 'index',
            unique: false,
            element: 'game',
        },
        {
            name: 'index2',
            unique: false,
            element: 'player',
        },
    ],
})
