---
title: "visibility"
description: "Tested for values `hidden` and `collapse`."
category: css
last_test_date: "2019-02-28"
test_url: "/tests/css-visual-effects.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/DhTRmGsVH6uobU4pHD3CasJywfBL4HnEjA1LOF8f9ctso/list"
stats: {
    apple-mail: {
        macos: {
            "12.4": "y #1"
        },
        ios: {
            "12.1": "y #1"
        }
    },
    gmail: {
        desktop-webmail: {
            "2019-02": "n"
        },
        ios: {
            "2019-02": "n"
        },
        android: {
            "2019-02": "n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-08":"y"
        },
        ios: {
            "2019-08":"a #1"
        },
        android: {
            "2019-08":"y"
        }
    },
    outlook: {
        windows: {
            "2007": "n",
            "2010": "n",
            "2013": "n",
            "2016": "n",
            "2019": "n"
        },
        windows-10-mail: {
            "2019-02": "n"
        },
        macos: {
            "2019-02": "y #1"
        },
        outlook-com: {
            "2019-02": "y"
        },
        ios: {
            "2019-02": "y #1"
        },
        android: {
            "2019-02": "y"
        }
    },
    thunderbird: {
        macos: {
            "60.8":"y"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2019-02": "y"
        },
        ios: {
            "2019-02": "y #1"
        },
        android: {
            "2019-02": "n"
        }
    },
    aol: {
        desktop-webmail: {
            "2019-02": "n"
        },
        ios: {
            "2019-02": "y #1"
        },
        android: {
            "2019-02": "y"
        }
    },
    samsung-email: {
        android: {
            "5.0.10.2": "y"
        }
    }
}
notes_by_num: {
    "1": "Buggy. `visibility:collapse` applied to a `<tr>` only hides content and does not \"remove\" it from layout."
}
---