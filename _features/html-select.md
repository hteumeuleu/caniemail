---
title: "<select> element"
description: "HTML select menu"
category: html
keywords: form, select
last_test_date: "2019-09-10"
test_url: "/tests/html-forms.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/MOk8g8TWwCTL4vLGrdMIgu3Vncqdxif6KlK4g8HfUV1mB/list"
stats: {
    apple-mail: {
        macos: {
            "10.3":"y",
            "12.4":"y"
        },
        ios: {
            "10.3":"a #1",
            "12.4":"a #1"
        }
    },
    gmail: {
        desktop-webmail: {
            "2019-09":"y"
        },
        ios: {
            "2019-09":"a #1"
        },
        android: {
            "2019-09":"y"
        },
        mobile-webmail: {
            "2020-02":"y"
        }
    },
    orange: {
        desktop-webmail: {
            "2020-01":"n #2"
        },
        ios: {
            "2020-01":"n #2"
        },
        android: {
            "2020-01":"n #2"
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
        windows-10-mail: {
            "2020-01":"n"
        },
        macos: {
            "2011":"y",
            "2016":"y",
            "2019":"y"
        },
        outlook-com: {
            "2019-09":"y"
        },
        ios: {
            "2019-06":"y"
        },
        android: {
            "2019-06":"y"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y",
            "9.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2020-01":"n #2"
        },
        ios: {
            "2020-01":"y"
        },
        android: {
            "2020-01":"y"
        }
    },
    thunderbird: {
        macos: {
            "68.4":"a #3"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2019-09":"y"
        },
        ios: {
            "2019-09":"n"
        },
        android: {
            "2019-09":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2019-09": "y"
        },
        ios: {
            "2019-09": "y"
        },
        android: {
            "2019-09": "y"
        }
    },
    proton-mail: {
        desktop-webmail: {
            "2020-03":"y"
        },
        ios: {
            "2020-03":"y"
        },
        android: {
            "2020-03":"y"
        }
    }
}
notes: ""
notes_by_num: {
  "1": "Buggy. Works if the email is shorter than the viewport. Otherwise the screen goes blank when the `<select>` is in focus.",
  "2": "Not supported. `<select>` is transformed into `<noselect>`.",
  "3": "Buggy. Interacting with the element submits the form it belongs in."
}
---
