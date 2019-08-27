---
title: "@media"
description: ""
category: css
keywords: "media queries, query"
last_test_date: "2019-08-20"
test_url: "/tests/css-media.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/hMLCNCSKZYHkLgLOpIWltlnYjtagbNsrwzMxalc2VbghN/list"
stats: {
    apple-mail: {
        macos: {
            "10.3":"y"
        },
        ios: {
            "10.3":"y",
            "12.2":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2019-08":"a #1 #7"
        },
        ios: {
            "2019-08":"a #1 #6 #7"
        },
        android: {
            "2019-08":"a #1 #6 #7"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-08":"y #5"
        },
        ios: {
            "2019-08":"y"
        },
        android: {
            "2019-08":"y"
        }
    },
    outlook: {
        windows: {
            "2003":"a #1",
            "2007":"n",
            "2010":"n",
            "2013":"n",
            "2016":"n",
            "2019":"n"
        },
        macos: {
            "2011":"y",
            "2016":"y"
        },
        outlook-com: {
            "2019-08":"a #1"
        },
        ios: {
            "2019-08":"a #1"
        },
        android: {
            "2019-08":"a #1"
        }
    },
    samsung-email: {
        android: {
            "5.0.10.2": "y",
            "6.0":"y"
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
            "60.3":"y"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2019-08":"a #1 #2"
        },
        ios: {
            "2019-08":"a #1 #2"
        },
        android: {
            "2019-08":"a #1 #2 #3"
        }
    },
    aol: {
        desktop-webmail: {
            "2019-02":"a #1 #2"
        },
        ios: {
            "2019-02":"a #1 #2"
        },
        android: {
            "2019-02":"a #1 #2"
        }
    }
}
notes_by_num: {
    "1": "Partial. Does not support nested media queries.",
    "2": "Partial. Only supports `screen`, `min-width`, `max-width`, `min-height` and `max-height` based media queries.",
    "3": "Buggy. Requires a double `<head>` hack to work.",
    "4": "Partial. Does not support simple `@media {}` declarations.",
    "5": "Buggy. The first rule inside a media query is not prefixed.",
    "6": "Partial. Not supported with non Gmail accounts.",
    "7": "Partial. Does not support height based media queries."
}
links: {
    "Can I use: CSS3 Media Queries":"https://caniuse.com/#feat=css-mediaqueries",
    "MDN: @media":"https://developer.mozilla.org/en-US/docs/Web/CSS/@media"
}
---