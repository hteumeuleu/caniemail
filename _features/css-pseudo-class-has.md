---
title: ":has()"
description: "Represents an element if any of the selectors passed as parameters match at least one element."
category: css
last_test_date: "2022-03-15"
test_url: "/tests/css-has.html"
test_results_url: ""
stats: {
    apple-mail: {
        macos: {
            "15.0":"n",
            "16.0":"y"
        },
        ios: {
            "15.1":"n",
            "15.4":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-12":"n"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        },
        mobile-webmail: {
            "2021-12":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
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
            "2021-12":"n"
        },
        macos: {
            "16.56":"n"
        },
        outlook-com: {
            "2021-12":"n"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    samsung-email: {
        android: {
            "6.0":"n"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    thunderbird: {
        macos: {
            "78.14":"n"
        }
    },
    aol: {
        desktop-webmail: {
            "2021-12":"n #1"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-12":"n #1"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-12":"n #2"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    hey: {
        desktop-webmail: {
            "2021-12":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2021-12":"n"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-12": "n"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-12": "y"
        }
    }
}
notes: "As of december 2021, `:has()` is only supported in [Safari Technology Preview 137](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/). As of march 2022, it is supported in Safari 15.4."
notes_by_num: {
    "1": "Not supported. `:has(…)` is replaced by `:has`.",
    "2": "Not supported. But the pseudo-class seems interpreted and computed server side."
}
links: {
    "Can I use: :has()":"https://caniuse.com/css-has",
    "MDN: :has()":"https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
}
---
