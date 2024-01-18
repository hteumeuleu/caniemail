---
title: "Chaining selectors"
description: "Chaining selectors (`.foo.bar`) allows to apply styles to elements matching all the corresponding selectors."
category: css
last_test_date: "2019-10-13"
test_url: "/tests/css-selectors.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list"
stats: {
    apple-mail: {
        macos: {
            "12.4":"y"
        },
        ios: {
            "13.1":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2019-10":"y"
        },
        ios: {
            "2019-10":"a #1"
        },
        android: {
            "2019-10":"a #1"
        },
        mobile-webmail: {
            "2020-02": "n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-10":"y",
            "2021-03":"n"
        },
        ios: {
            "2019-10":"y"
        },
        android: {
            "2019-10":"y"
        }
    },
    outlook: {
        windows: {
            "2003":"y",
            "2007":"n #3",
            "2010":"n #3",
            "2013":"n #3",
            "2016":"n #3",
            "2019":"n #3"
        },
        windows-mail: {
            "2019-10":"n #3"
        },
        macos: {
            "2011":"y",
            "2016":"y",
            "16.80": "y",
        },
        outlook-com: {
            "2019-10":"n #4",
            "2024-01":"n #4",
        },
        ios: {
            "2019-10":"y"
        },
        android: {
            "2019-10":"y"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2019-10":"y"
        },
        ios: {
            "2019-10":"n"
        },
        android: {
            "2019-10":"n"
        }
    },
    thunderbird: {
        macos: {
            "60.3":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2019-10":"y"
        },
        ios: {
            "2019-10":"y"
        },
        android: {
            "2019-10":"y"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2019-10":"y"
        },
        ios: {
            "2019-10":"y"
        },
        android: {
            "2019-10":"a #2"
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
    },
    gmx: {
        desktop-webmail: {
            "2022-06": "a #5"
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
            "2022-06": "a #5"
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
    "1": "Partial. Not supported with non Gmail accounts.",
    "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element.",
    "3": "Buggy. Styles will be applied to the first selector of the chain.",
    "4": "Buggy. Only the first selector of the chain is prefixed in the styles, but all classes are prefixed in the HTML.",
    "5": "Partial. Only when used as class or ID selectors"
}
links: {
    "MDN: Grouping selectors":"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors#Grouping",
    "Email Bugs: Outlook.com only prefixes first selector in a chain of selectors":"https://github.com/hteumeuleu/email-bugs/issues/61"
}
---
