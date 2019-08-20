---
title: "@font-face"
description: "`@font-face` in CSS allows to include your own fonts inside an email."
category: css
keywords: font, web fonts, google fonts
last_test_date: "2019-07-18"
test_url: "/tests/css-font-face.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/CJWdqiWQQ3ENhRI169UVE3ThdDmzIXfOrWmk6Hxw6eV9Q/list"
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
            "2019-07":"n"
        },
        ios: {
            "2019-07":"n"
        },
        android: {
            "2019-07":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-05":"a #2"
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
            "6.0":"y"
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
            "60.7":"y"
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
    }
}
notes: "This is a global note."
notes_by_num: {
    "1": "Partial. Only supported through a `<link>` tag.",
    "2": "Partial. Only supported directly through a `<style>` tag.",
    "3": "Buggy. Support depends on the version of IE installed.",
    "4": "Partial. The declaration is supported but distant fonts are ignored.",
    "5": "Buggy. Elements using a font declared with `@font-face` ignore the font stack and fall back to Times New Roman. Use `mso-generic-font-family` and `mso-font-alt` to control the fallback."
}
---