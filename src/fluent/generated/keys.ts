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
                    '2f6db912c3c28390aa47d8ec05013150': {
                        table: 'sp_instance'
                        id: '2f6db912c3c28390aa47d8ec05013150'
                    }
                    '3e6d7912c3c28390aa47d8ec050131cd': {
                        table: 'sp_column'
                        id: '3e6d7912c3c28390aa47d8ec050131cd'
                    }
                    '4138c8ac9330c710ba8dfd29dd03d6e8': {
                        table: 'sp_instance'
                        id: '4138c8ac9330c710ba8dfd29dd03d6e8'
                    }
                    '4a2840249370c710ba8dfd29dd03d697': {
                        table: 'sp_column'
                        id: '4a2840249370c710ba8dfd29dd03d697'
                    }
                    '5a0d46d093c54750ba8dfd29dd03d646': {
                        table: 'sys_scope_privilege'
                        id: '5a0d46d093c54750ba8dfd29dd03d646'
                    }
                    '5a1888e09370c710ba8dfd29dd03d60c': {
                        table: 'sp_container'
                        id: '5a1888e09370c710ba8dfd29dd03d60c'
                    }
                    '760d46d093c54750ba8dfd29dd03d64d': {
                        table: 'sys_scope_privilege'
                        id: '760d46d093c54750ba8dfd29dd03d64d'
                    }
                    '7e6d7912c3c28390aa47d8ec050131c8': {
                        table: 'sp_row'
                        id: '7e6d7912c3c28390aa47d8ec050131c8'
                    }
                    '8a31c8649330c710ba8dfd29dd03d642': {
                        table: 'sp_metatag'
                        id: '8a31c8649330c710ba8dfd29dd03d642'
                    }
                    '986df112c3c28390aa47d8ec05013142': {
                        table: 'sp_container'
                        id: '986df112c3c28390aa47d8ec05013142'
                        deleted: true
                    }
                    ae2148649330c710ba8dfd29dd03d67a: {
                        table: 'sp_metatag'
                        id: 'ae2148649330c710ba8dfd29dd03d67a'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '6bf3131c98f94f178183c6a71cdcfe61'
                    }
                    c22840249370c710ba8dfd29dd03d692: {
                        table: 'sp_row'
                        id: 'c22840249370c710ba8dfd29dd03d692'
                    }
                    da0f4adac3068390aa47d8ec0501311b: {
                        table: 'sys_scope_privilege'
                        id: 'da0f4adac3068390aa47d8ec0501311b'
                    }
                    e83db9dec3828390aa47d8ec05013184: {
                        table: 'sp_container'
                        id: 'e83db9dec3828390aa47d8ec05013184'
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
                    wi0: {
                        table: 'sp_widget'
                        id: 'bc2705a1e1154428aa5b6d508f4a1562'
                    }
                    wi1: {
                        table: 'sp_widget'
                        id: '6b8f5426c7f546ca895468feacf299ed'
                    }
                    wi2: {
                        table: 'sp_widget'
                        id: '81d10c9b891349f4b6cdb4c5f6434d1b'
                    }
                }
                composite: [
                    {
                        table: 'sys_db_object'
                        id: '11dbe74c5cfa4c72a83bfa11396abcf9'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '19c66e937a2642578b9eae29ec89e401'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '210c08549b7b4ed6b1451647b8376de2'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '2a76ec7653e287109fa879b0a0490eb4'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3cc6acb653e287109fa879b0a0490e83'
                        key: {
                            sys_ui_section: {
                                id: '2a76ec7653e287109fa879b0a0490eb4'
                                key: {
                                    name: 'x_872084_sn_poker_user_sessions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a766785f68140eea3a69d0d59077b73'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cf363c05ee94ad0adcadbbcf07c9f67'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4f1bd5a48ba842329cec0986715b6acf'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '54f4f9cbc34b425086fca7a3146672ed'
                        key: {
                            id: 'home_page'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6033cd089305c350ba8dfd29dd03d62e'
                        key: {
                            sys_ui_section: {
                                id: '8632cd849305c350ba8dfd29dd03d6ba'
                                key: {
                                    name: 'x_872084_sn_poker_sessions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '63372dd0dc4e49b0b5197342b5de53d6'
                        key: {
                            category: 'x_872084_sn_poker_user_sessions'
                            prefix: 'SNUS'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c718146a2c9401c8c6fd4b8156577a4'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'game'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7ca8472817ad4eafb2f7ea93ba2f2a1a'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80c24bfbabb34c11acca2f726a3688bd'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'player'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '83f6a4f653e287109fa879b0a0490eec'
                        key: {
                            sys_ui_section: {
                                id: '2a76ec7653e287109fa879b0a0490eb4'
                                key: {
                                    name: 'x_872084_sn_poker_user_sessions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'player'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '8632cd849305c350ba8dfd29dd03d6ba'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            caption: 'NULL'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '87f664f653e287109fa879b0a0490e1d'
                        key: {
                            sys_ui_section: {
                                id: '2a76ec7653e287109fa879b0a0490eb4'
                                key: {
                                    name: 'x_872084_sn_poker_user_sessions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'game'
                            position: '2'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '88e1cbd1f3d64df7971f6d851764efa7'
                        key: {
                            id: 'game'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9a7dd2ef48284107923405de0ccaf485'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b44241c49305c350ba8dfd29dd03d615'
                        key: {
                            sys_ui_section: {
                                id: '8632cd849305c350ba8dfd29dd03d6ba'
                                key: {
                                    name: 'x_872084_sn_poker_sessions'
                                    caption: 'NULL'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'title'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'bd4b16c6277244a3be94820bc3e12439'
                        key: {
                            logical_table_name: 'x_872084_sn_poker_user_sessions'
                            col_name_string: 'game'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cca359d5c1964cfa889442948a6bc990'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'd2f76aae67fb4362801b8b76fdde9a33'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'da695830791246eb9ace403b145f117f'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'player'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'e64b7a6e8ffc4200ab356e6244f47020'
                        key: {
                            logical_table_name: 'x_872084_sn_poker_user_sessions'
                            col_name_string: 'player'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ea6e640c01e54ddeb3a66eeede9f4e2f'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed3bfd591a1b4b95be89fbc49da8fc6c'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f8a9f4d817fa4a5ba623012d35516bfb'
                        key: {
                            name: 'x_872084_sn_poker_sessions'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'fa230dc49305c350ba8dfd29dd03d624'
                        key: {
                            category: 'x_872084_sn_poker_sessions'
                            prefix: 'SNP'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb4dd76449834416b419e34e534cb470'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fbf71da28fc649e8a23499ce59e908a2'
                        key: {
                            name: 'x_872084_sn_poker_user_sessions'
                            element: 'game'
                        }
                    },
                ]
            }
        }
    }
}
