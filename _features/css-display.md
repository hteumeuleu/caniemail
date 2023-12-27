---
title: "display"
description: "Sets whether an element is treated as a block or inline element and the layout used for its children."
category: css
keywords: "inline, block, inline-block"
last_test_date: "2021-12-01"
test_url: "/tests/css-display.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/eyGBFSORjrHd635gw4udynxX8ykC5bzlMUUrF6yi7Kspu/list"
stats: {
    apple-mail: {
        macos: {
            "15":"y"
        },
        ios: {
            "15":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"a #1"
        },
        android: {
            "2021-12":"a #1"
        },
        mobile-webmail: {
            "2021-12":"y"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-12":"a #2 #3"
        },
        ios: {
            "2021-12":"a #2"
        },
        android: {
            "2021-12":"a #2"
        }
    },
    outlook: {
        windows: {
            "2007":"a #4 #5",
            "2010":"a #4 #5",
            "2013":"a #4 #5",
            "2016":"a #4 #5",
            "2019":"a #4 #5"
        },
        windows-mail: {
            "2021-12":"a #4 #5"
        },
        macos: {
            "16.56":"y",
            "16.80": "y",
        },
        outlook-com: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"y"
        },
        android: {
            "2021-12":"y"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"y"
        },
        android: {
            "2021-12":"y"
        }
    },
    thunderbird: {
        macos: {
            "91.2":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2021-12":"a #6"
        },
        ios: {
            "2021-12":"a #6"
        },
        android: {
            "2021-12":"a #6"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-12":"a #6"
        },
        ios: {
            "2021-12":"a #6"
        },
        android: {
            "2021-12":"a #6"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"y"
        },
        android: {
            "2021-12":"y"
        }
    },
    hey: {
        desktop-webmail: {
            "2021-12":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2021-12":"y"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-12": "a #7"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-12": "y"
        }
    },
    gmx: {
        desktop-webmail: {
            "2022-06": "a #2"
        },
        ios: {
            "2022-06":"y"
        },
        android: {
            "2022-06":"y"
        }
    },
    web-de: {
        desktop-webmail: {
            "2022-06": "a #2"
        },
        ios: {
            "2022-06":"y"
        },
        android: {
            "2022-06":"y"
        }
    },
    ionos-1and1: {
        desktop-webmail: {
            "2022-06": "y"
        },
        android: {
            "2022-06":"y"
        }
    }
}
notes_by_num: {
    "1": "Partial. `flex`, `grid`, `flow-root`, `contents`, `inline flow-root`, `inline flex`, `inline grid`, `initial`, `revert`, `unset` are not supported with Non Gmail Accounts.",
    "2": "Partial. `inline-flex`, `inline-grid`, `flex`, `grid`, `flow-root`, `contents`, `inline flow-root`, `inline flex`, `inline grid`, `initial`, `revert`, `unset` values are not supported.",
    "3": "Buggy. Only the first value is kept with the two-value syntax.",
    "4": "Buggy. `display:none` does not inherit to inner tables.",
    "5": "Partial. Only supports `display:none` (but not on `<img>`).",
    "6": "Partial. `flow-root`, `inline-flex`, `inline-grid`, `inline flow`, `contents`, `revert` are not supported.",
    "7": "Partial. Two-value syntax are combined into a single one with a dash."
}
links: {
    "Can I use: display":"https://caniuse.com/mdn-css_properties_display",
    "MDN: display":"https://developer.mozilla.org/en-US/docs/Web/CSS/display"
}
---
