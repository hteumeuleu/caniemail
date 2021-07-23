---
title: "Attribute selector"
description: "The attribute selector (`[attr]`) targets elements with this specific attribute."
category: css
last_test_date: "2020-12-15"
test_url: "/tests/css-selectors-attribute.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/xHppIhPmgvxZQPvA3geS9WGCicLxVuR87NTZu70eWaAF8/list"
stats: {
    apple-mail: {
        macos: {
            "14.0":"y"
        },
        ios: {
            "14.3":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2020-12":"a #5"
        },
        ios: {
            "2020-12":"a #5 #6"
        },
        android: {
            "2020-12":"a #5 #6"
        },
        mobile-webmail: {
            "2020-02": "n"
        }
    },
    orange: {
        desktop-webmail: {
            "2020-12":"y",
            "2021-03":"y"
        },
        ios: {
            "2020-12":"y"
        },
        android: {
            "2020-12":"y"
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
        windows-10-mail: {
            "2020-12":"n"
        },
        macos: {
            "2011":"y",
            "2016":"y"
        },
        outlook-com: {
            "2020-12":"a #1 #2 #3"
        },
        ios: {
            "2020-12":"a #1 #2"
        },
        android: {
            "2020-12":"a #1 #2"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2020-12":"y"
        },
        ios: {
            "2020-12":"n"
        },
        android: {
            "2020-12":"n"
        }
    },
    thunderbird: {
        macos: {
            "78.5":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2020-12":"a #4"
        },
        ios: {
            "2020-12":"a #4"
        },
        android: {
            "2020-12":"a #4"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2020-12":"a #4"
        },
        ios: {
            "2020-12":"a #4"
        },
        android: {
            "2020-12":"a #4"
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
            "2020-10":"a #4"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-07": "y"
        }
    }
}
notes: "This page reflects support for different syntaxes: `[attr]`, `[attr=\"value\"]`, `[attr~=\"value\"]`, `[attr|=\"value\"]`, `[attr^=\"value\"]`, `[attr$=\"value\"]`, `[attr*=\"value\"]`."
notes_by_num: {
    "1": "Partial. Can not be used with a class selector (`.test[class]`). Must be used solo (`[class]`) or with an element selector (`td[class]`).",
    "2": "Partial. Only supports `[attr]`, `[attr=value]`, `[attr~=value]`, `[attr|=value]` syntaxes.",
    "3": "Buggy. A `class=\"test\"` in the HTML is prefixed `class=\"x_test\"`, but an attribute selector stays unprefixed `[class=\"test\"]`.",
    "4": "Partial. Only supports `[attr=value]` syntax.",
    "5": "Partial. Only supports `[attr~=value]` syntax.",
    "6": "Partial. Doesn't work with Non Gmail Accounts."
}
links: {
    "Can I use: CSS 2.1 selectors":"https://caniuse.com/css-sel2",
    "MDN: attribute selectors":"https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
}
---