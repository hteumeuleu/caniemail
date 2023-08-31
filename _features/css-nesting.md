---
title: "CSS Nesting"
description: "A syntax for nesting selectors, providing the ability to nest one style rule inside another."
category: css
last_test_date: "2023-08-31"
test_url: "/tests/css-nesting.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/8z9ecWkyaSHebmYl0r6dlWFfcia0VNfeKu6s01l5Fw3M0/list"
stats: {
    apple-mail: {
        macos: {
            "16.0":"a #1"
        },
        ios: {
            "16.6":"a #1"
        }
    },
    gmail: {
        desktop-webmail: {
            "2023-08":"n"
        },
        ios: {
            "2023-08":"n"
        },
        android: {
            "2023-08":"n"
        },
        mobile-webmail: {
            "2023-08":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2023-08":"a #2"
        },
        ios: {
            "2023-08":"a #2"
        },
        android: {
            "2023-08":"u"
        }
    },
    outlook: {
        windows: {
            "2007":"n",
            "2010":"n",
            "2013":"n",
            "2016":"n",
            "2019":"n"
        },
        windows-mail: {
            "2023-08":"n"
        },
        macos: {
            "16.78":"a #1"
        },
        outlook-com: {
            "2023-08":"n"
        },
        ios: {
            "2023-08":"n"
        },
        android: {
            "2023-08":"u"
        }
    },
    samsung-email: {
        android: {
            "6.0":"u"
        }
    },
    sfr: {
        desktop-webmail: {
            "2023-08":"a #1 #2"
        },
        ios: {
            "2023-08":"n"
        },
        android: {
            "2023-08":"u"
        }
    },
    thunderbird: {
        macos: {
            "102.15":"n"
        }
    },
    aol: {
        desktop-webmail: {
            "2023-08":"u"
        },
        ios: {
            "2023-08":"u"
        },
        android: {
            "2023-08":"u"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2023-08":"n #3"
        },
        ios: {
            "2023-08":"n #3"
        },
        android: {
            "2023-08":"u"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2023-08":"u"
        },
        ios: {
            "2023-08":"u"
        },
        android: {
            "2023-08":"u"
        }
    },
    hey: {
        desktop-webmail: {
            "2023-08":"u"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2023-08":"u"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2023-08": "u"
        }
    },
    laposte: {
        desktop-webmail: {
            "2023-08": "u"
        }
    },
    free-fr: {
        desktop-webmail: {
            "2023-08": "u"
        }
    },
    t-online-de: {
        desktop-webmail: {
            "2023-08": "u"
        }
    },
    gmx: {
        desktop-webmail: {
            "2021-12": "u"
        },
        ios: {
            "2021-12": "u"
        },
        android: {
            "2021-12": "u"
        }
    },
    web-de: {
        desktop-webmail: {
            "2021-12": "u"
        },
        ios: {
            "2021-12": "u"
        },
        android: {
            "2021-12": "u"
        }
    },
    ionos-1and1: {
        desktop-webmail: {
            "2021-12": "u"
        },
        android: {
            "2021-12": "u"
        }
    }
}
notes_by_num: {
    "1": "Buggy. `E { F {}}` doesn’t work, but `E { & F {}}` does.",
    "2": "Buggy. The syntax is supported, but nested selectors are prefixed by the webmail, which might invalidate the selector.",
    "3": "Not supported. The nested selectors are removed, making the nest properties apply to the parent selector."
}
links: {
    "Can I use: CSS Nesting":"https://caniuse.com/css-nesting",
    "MDN: CSS Nesting":"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting"
}
---
