---
title: "@font-face"
description: "`@font-face` in CSS allows to include your own fonts inside an email."
category: css
keywords: font face, web fonts, google fonts
last_test_date: "2019-07-18"
test_url: "/tests/css-font-face.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/veY9MhuhgFeF1ly5crrhTXawfLJSwxgpYi27OElI7iSoc/list"
stats: {
    apple-mail: {
        macos: {
            "12.2":"y"
        },
        ios: {
            "10.3":"y",
            "12.3.1":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2019-07":"n #6"
        },
        ios: {
            "2019-07":"n"
        },
        android: {
            "2019-07":"n"
        },
        mobile-webmail: {
            "2020-02":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-05":"a #2",
            "2021-03":"n #7"
        },
        ios: {
            "2019-07":"y"
        },
        android: {
            "2019-07":"a #1"
        }
    },
    outlook: {
        windows: {
            "2003":"a #3",
            "2007":"a #4 #5",
            "2010":"a #4 #5",
            "2013":"a #4 #5",
            "2016":"a #4 #5",
            "2019":"a #4"
        },
        windows-mail: {
            "2020-01":"n"
        },
        macos: {
            "2011":"y",
            "2016":"y"
        },
        outlook-com: {
            "2019-07":"n"
        },
        ios: {
            "2.51.1":"y",
            "3.29.0":"n"
        },
        android: {
            "2019-07":"n"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y #8",
            "2021-11":"y #8"
        }
    },
    sfr: {
        desktop-webmail: {
            "2019-07":"a #2"
        },
        ios: {
            "2019-07":"n"
        },
        android: {
            "2019-07":"n"
        }
    },
    thunderbird: {
        macos: {
            "60.7":"y",
            "78.5":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2020-01":"n"
        },
        ios: {
            "2020-01":"n"
        },
        android: {
            "2020-01":"n"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2019-07":"n"
        },
        ios: {
            "2019-07":"n"
        },
        android: {
            "2019-07":"n"
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
            "2020-03":"y"
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
            "2021-07": "n"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-08": "a #2"
        }
    }
}
notes_by_num: {
    "1": "Partial. Only supported through a `<link>` tag.",
    "2": "Partial. Only supported directly through a `<style>` tag.",
    "3": "Buggy. Support depends on the version of IE installed.",
    "4": "Partial. The declaration is supported but distant fonts are ignored.",
    "5": "Buggy. Elements using a font declared with `@font-face` ignore the font stack and fall back to Times New Roman. Use `mso-generic-font-family` and `mso-font-alt` to control the fallback.",
    "6": "Not supported. Roboto and Google Sans can be used, but only because they're embedded with the webmail's own styles.",
    "7": "Not supported. The `@font-face` declaration is kept but the `src` property is removed.",
    "8": "Not supported when using a Microsoft email address; outlook, live, hotmail, etc.."
}
links: {
    "Can I use: @font-face Web fonts":"https://www.caniuse.com/#feat=fontface",
    "MDN: @font-face":"https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
}
---