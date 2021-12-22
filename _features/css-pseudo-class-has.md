---
title: ":has()"
description: "Represents an element if any of the selectors passed as parameters match at least one element."
category: css
last_test_date: "2021-12-22"
test_url: "/tests/css-has.html"
test_results_url: ""
stats: {
    apple-mail: {
        macos: {
            "15.0":"n"
        },
        ios: {
            "15.1":"n"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-12":"n"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
        },
        mobile-webmail: {
            "2021-12":"u"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
        }
    },
    outlook: {
        windows: {
            "2007":"u",
            "2010":"u",
            "2013":"u",
            "2016":"u",
            "2019":"u"
        },
        windows-mail: {
            "2021-12":"u"
        },
        macos: {
            "16.56":"u"
        },
        outlook-com: {
            "2021-12":"n"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
        }
    },
    samsung-email: {
        android: {
            "6.0":"u"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-12":"y"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
        }
    },
    thunderbird: {
        macos: {
            "78.14":"u"
        }
    },
    aol: {
        desktop-webmail: {
            "2021-12":"n #1"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-12":"n #1"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-12":"n #2"
        },
        ios: {
            "2021-12":"u"
        },
        android: {
            "2021-12":"u"
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
notes: "As of december 2021, `:has()` is only supported in [Safari Technology Preview 137](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/)."
notes_by_num: {
    "1": "Not supported. `:has(…)` is replaced by `:has`.",
    "2": "Not supported. But the pseudo-class seems interpreted and computed server side."
}
links: {
    "Can I use: :has()":"https://caniuse.com/css-has",
    "MDN: :has()":"https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
}
---