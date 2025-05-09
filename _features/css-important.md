---
title: "!important keyword"
description: "An `!important` declaration takes precedence over a normal declaration."
category: css
last_test_date: "2021-11-30"
test_url: "/tests/css-important.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/JEyxyPfKHFZCPKxlgiOugpH4lyNrXX39cd9M8xaW1DojH/list"
stats: {
    apple-mail: {
        macos: {
            "13":"y",
            "15":"y"
        },
        ios: {
            "15":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-11":"a #1"
        },
        ios: {
            "2021-11":"a #1 #2"
        },
        android: {
            "2021-11":"a #1 #2"
        },
        mobile-webmail: {
            "2021-11":"a #1 #2"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-11":"n #3"
        },
        ios: {
            "2021-11":"n #3"
        },
        android: {
            "2021-11":"n #3"
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
            "2021-11":"a #4"
        },
        macos: {
            "16.56":"y",
            "16.80":"y",
        },
        outlook-com: {
            "2021-11":"y"
        },
        ios: {
            "2021-11":"y"
        },
        android: {
            "2021-11":"y"
        }
    },
    samsung-email: {
        android: {
            "7.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-11":"y"
        },
        ios: {
            "2021-11":"a #6"
        },
        android: {
            "2021-11":"a #6"
        }
    },
    thunderbird: {
        macos: {
            "91.2.1":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2021-11":"a #7"
        },
        ios: {
            "2021-11":"a #7"
        },
        android: {
            "2021-11":"a #7"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-11":"a #7"
        },
        ios: {
            "2021-11":"a #7"
        },
        android: {
            "2021-11":"a #7"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-11":"a #8"
        },
        ios: {
            "2021-11":"a #6"
        },
        android: {
            "2021-11":"a #6"
        }
    },
    hey: {
        desktop-webmail: {
            "2021-11":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2021-11":"y"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-11": "y"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-11": "y"
        }
    },
    gmx: {
        desktop-webmail: {
            "2022-06": "n"
        },
        ios: {
            "2022-06": "y"
        },
        android: {
            "2022-06": "y"
        }
    },
    web-de: {
        desktop-webmail: {
            "2022-06": "n"
        },
        ios: {
            "2022-06": "y"
        },
        android: {
            "2022-06": "y"
        }
    },
    ionos-1and1: {
        desktop-webmail: {
            "2022-06": "y"
        },
        android: {
            "2022-06": "y"
        }
    },
    wp-pl: {
        desktop-webmail: {
            "2023-12": "n"
        }
    }
}
notes_by_num: {
    "1": "Partial. Only supported in lowercase. (See [email-bugs#13](https://github.com/hteumeuleu/email-bugs/issues/13))",
    "2": "Partial. Only supported inline when using a Non Gmail Account due to the lack of `<style>` support.",
    "3": "Not supported. The entire declaration is removed if there is no space before `!important`.",
    "4": "Partial. Only supported with a space before.",
    "5": "Partial. Not supported inline. (See [email-bugs#31](https://github.com/hteumeuleu/email-bugs/issues/31))",
    "6": "Partial. Only supported inline due to the lack of `<style>` support.",
    "7": "Partial. Removed if there is no space before when used with a `background-image` property. (See [email-bugs#16](https://github.com/hteumeuleu/email-bugs/issues/16))",
    "8": "Partial. Only supported in lowercase."
}
links: {
    "MDN: CSS Specificity":"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"
}
---
