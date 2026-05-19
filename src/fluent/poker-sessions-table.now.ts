import { StringColumn, Table } from '@servicenow/sdk/core'

export const x_872084_sn_poker_sessions = Table({
    name: 'x_872084_sn_poker_sessions',
    label: 'SN Poker Sessions',
    schema: {
        title: StringColumn({ label: 'Title', maxLength: 120, mandatory: true }),
        number: StringColumn({
            attributes: {
                ignore_filter_on_new: true,
            },
            default: 'javascript:global.getNextObjNumberPadded();',
            label: 'Number',
        }),
    },
    actions: ['read', 'update', 'create'],
    attributes: {
        enforce_dot_walk_cross_scope_access: true,
    },
    autoNumber: {
        prefix: 'SNP',
    },
})
