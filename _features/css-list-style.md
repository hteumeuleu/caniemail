---
title: "list-style"
category: css
last_test_date: "2020-04-20"
test_url: "/tests/css-list.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/ifwlqtEsBCU23xVI7NgjBqvJlcJ4c20Akv3aRW3ugRJsP/list"
stats: {
    apple-mail: {
        macos: {
            "12.4":"y"
        },
        ios: {
            "13.4":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2020-04":"a #1"
        },
        ios: {
            "2020-04":"a #1"
        },
        android: {
            "2020-04":"a #1"
        },
        mobile-webmail: {
            "2020-04":"a #1"
        }
    },
    orange: {
        desktop-webmail: {
            "2020-04":"y",
            "2021-03":"y"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"y"
        }
    },
    outlook: {
        windows: {
            "2003":"y",
            "2007":"a #2",
            "2010":"a #2",
            "2013":"a #2",
            "2016":"a #2",
            "2019":"a #2"
        },
        windows-mail: {
            "2020-04":"a #2"
        },
        macos: {
            "2011":"y",
            "2016":"y"
        },
        outlook-com: {
            "2020-04":"y"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"y"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2020-04":"y"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"y"
        }
    },
    thunderbird: {
        macos: {
            "68.7":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2020-04":"a #3"
        },
        ios: {
            "2020-04":"a #3"
        },
        android: {
            "2020-04":"a #3"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2020-04":"a #3"
        },
        ios: {
            "2020-04":"a #3"
        },
        android: {
            "2020-04":"a #3"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2020-04":"a #4"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"n"
        }
    },
    hey: {
        desktop-webmail: {
            "2020-06":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2020-10":"y"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-07": "y"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-08": "y"
        }
    }
}
notes: "Tests and support are based on the CSS Level 2 specification. `<custom-ident>`, `symbols()` and `<string>` values are not tested here."
notes_by_num: {
    "1": "`list-style-image` values are not supported. The entire `list-style` property is removed if present.",
    "2": "Only `list-style-type` values are supported.",
    "3": "`list-style-image` values are not supported but the rest of the `list-style` property is kept.",
    "4": "`url()` is transformed into `proton-url()` for `list-style-type` values, invalidating the entire property."
}
links: {
    "Can I use: list-style":"https://caniuse.com/#feat=mdn-css_properties_list-style",
    "MDN: list-style":"https://developer.mozilla.org/en-US/docs/Web/CSS/list-style"
}
---