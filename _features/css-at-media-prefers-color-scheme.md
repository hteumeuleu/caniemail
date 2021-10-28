---
title: "@media (prefers-color-scheme)"
description: "This media query allows to theme for system light and dark mode."
category: css
keywords: dark mode, light mode
last_test_date: "2019-09-26"
test_url: "/tests/css-media-prefers-color-scheme.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/CqQL3EUXh33sQ8Q6rOkJapoIjxfDz99BUpXGjtT2ErWdN/list"
stats: {
    apple-mail: {
        macos: {
            "10.3":"n",
            "12.4":"y"
        },
        ios: {
            "12.2":"n",
			"13.0":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2020-01":"n"
        },
        ios: {
            "2020-01":"n"
        },
        android: {
            "2020-01":"n"
        },
        mobile-webmail: {
            "2020-02":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-08":"y",
            "2021-03":"y"
        },
        ios: {
            "2020-01":"n"
        },
        android: {
            "2020-01":"n"
        }
    },
    outlook: {
        windows: {
            "2003":"n",
            "2007":"n",
            "2010":"n",
            "2013":"n",
            "2016":"n",
            "2019":"n"
        },
        windows-mail: {
            "2020-01":"n"
        },
        macos: {
            "2019":"y"
        },
        outlook-com: {
            "2019-07":"y"
        },
        ios: {
            "2020-01":"y"
        },
        android: {
            "2020-01":"n"
        }
    },
    samsung-email: {
        android: {
            "6.0":"n"
        }
    },
    sfr: {
        desktop-webmail: {
            "2019-08":"y"
        },
        ios: {
            "2019-08":"n"
        },
        android: {
            "2019-08":"n"
        }
    },
    thunderbird: {
        macos: {
            "60.8":"n",
            "68.4":"y",
            "78.5":"n"
        }
    },
    aol: {
        desktop-webmail: {
            "2020-01":"n #1"
        },
        ios: {
            "2020-01":"n #1"
        },
        android: {
            "2020-01":"n #1"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2020-01":"n #1"
        },
        ios: {
            "2020-01":"n #1"
        },
        android: {
            "2020-01":"n #1"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2020-03":"n"
        },
        ios: {
            "2020-03":"n"
        },
        android: {
            "2020-03":"n"
        }
    },
    hey: {
        desktop-webmail: {
            "2020-06":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2020-10":"n"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-07": "n #2"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-08": "y"
        }
    }
}
notes_by_num: {
    "1": "Not supported. `@media (prefers-color-scheme)` is transformed into `@media ( _filtered_a )`.",
    "2": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media none`."
}
---
