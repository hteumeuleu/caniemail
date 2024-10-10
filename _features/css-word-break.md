---
title: "word-break"
description: "Prevents or allows words to be broken over multiple lines."
category: css
keywords: a, b, c
last_test_date: "2022-02-15"
test_url: "/tests/css-word-break.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/9NBw8gAf2zJZOD57zwPqHjhsp7cfEOJLANCTkq3OFbZNR/list"
stats: {
    apple-mail: {
        macos: {
            "15":"a #2"
        },
        ios: {
            "15":"a #2"
        }
    },
    gmail: {
        desktop-webmail: {
            "2022-02":"y #1"
        },
        ios: {
            "2022-02":"a #2"
        },
        android: {
            "2022-02":"a #2"
        },
        mobile-webmail: {
            "2022-02":"a #2"
        }
    },
    orange: {
        desktop-webmail: {
            "2022-02":"a #3"
        },
        ios: {
            "2022-02":"n"
        },
        android: {
            "2022-02":"n"
        }
    },
    outlook: {
        windows: {
            "2007":"u",
            "2010":"u",
            "2013":"u",
            "2016":"u",
            "2019":"y"
        },
        windows-mail: {
            "2022-02":"n"
        },
        macos: {
            "16.59":"y",
            "16.80":"a #2",
        },
        outlook-com: {
            "2022-02":"a #2",
            "2024-01":"a #2",
        },
        ios: {
            "2022-02":"a #2"
        },
        android: {
            "2022-02":"a #2"
        }
    },
    samsung-email: {
        android: {
            "6.0":"a #2"
        }
    },
    sfr: {
        desktop-webmail: {
            "2022-02":"y"
        },
        ios: {
            "2022-02":"y"
        },
        android: {
            "2022-02":"y"
        }
    },
    thunderbird: {
        linux: {
      		"115": "y"
    	},
        macos: {
            "78.14":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2022-02":"n"
        },
        ios: {
            "2022-02":"n"
        },
        android: {
            "2022-02":"n"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2022-02":"n"
        },
        ios: {
            "2022-02":"n"
        },
        android: {
            "2022-02":"n"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2022-02":"y"
        },
        ios: {
            "2022-02":"a #2"
        },
        android: {
            "2022-02":"a #2"
        }
    },
    hey: {
        desktop-webmail: {
            "2022-02":"a #4"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2022-02":"y"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2022-02": "y"
        }
    },
    laposte: {
        desktop-webmail: {
            "2022-02": "y"
        }
    },
    gmx: {  
        desktop-webmail: {
            "2022-09": "n"
        },
        ios: {
            "2022-09":"y"
        },
        android: {
            "2022-09":"n"
        }
    },
    web-de: {
        desktop-webmail: {
            "2022-09": "n"
        },
        ios: {
            "2022-09":"y"
        },
        android: {
            "2022-09":"n"
        }
    },
    ionos-1and1: {
        desktop-webmail: {
            "2022-09": "y"
        },
        android: {
            "2022-09":"n"
        }
    }
}
notes_by_num: {
    "1": "Supported. But Gmail adds `<wbr>` every 30 characters.",
    "2": "Buggy. Supported but a `word-wrap:break-word` is applied, making it look like `break-all`.",
    "3": "Partially supported. Only `word-break:break-all` works.",
    "4": "Buggy. Every value is replaced by `break-word`."
}
links: {
    "Can I use: word-break":"https://caniuse.com/word-break",
    "MDN: word-break":"https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"
}
---
