import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '2715830893b80710ba8dfd29dd03d670': {
                        table: 'sys_kmf_module_key_policy'
                        id: '2715830893b80710ba8dfd29dd03d670'
                    }
                    '8a31c8649330c710ba8dfd29dd03d642': {
                        table: 'sp_metatag'
                        id: '8a31c8649330c710ba8dfd29dd03d642'
                    }
                    ae2148649330c710ba8dfd29dd03d67a: {
                        table: 'sp_metatag'
                        id: 'ae2148649330c710ba8dfd29dd03d67a'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '6bf3131c98f94f178183c6a71cdcfe61'
                    }
                    mt10: {
                        table: 'sp_metatag'
                        id: 'bcb7bc2bffa34f33a5ff3efaf6a14057'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'a8a3ad59d9ff4a139877a89e3e72a701'
                    }
                    sp10: {
                        table: 'sp_portal'
                        id: '7a8078bcdcde495eb344e5c28bed6ea2'
                    }
                    spf10: {
                        table: 'sp_header_footer'
                        id: '2c8a3327ecf7496083f6933acdb2fae2'
                    }
                    spf11: {
                        table: 'sp_header_footer'
                        id: 'b4c74bc7959f490c9f71c50cd40e5342'
                        deleted: true
                    }
                    sph10: {
                        table: 'sp_header_footer'
                        id: '4a371129d99e407e8747fed8d4a236e4'
                    }
                    spt10: {
                        table: 'sp_theme'
                        id: '6950a69f574d4cfab0426ae777ff24e5'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'f397f218d2864c5f8193ba54c189cc87'
                    }
                }
                composite: [
                    {
                        table: 'sp_page'
                        id: '54f4f9cbc34b425086fca7a3146672ed'
                        key: {
                            id: 'home_page'
                        }
                    },
                ]
            }
        }
    }
}
