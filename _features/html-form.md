---
title: "<form> element"
description: "The ability to submit an HTML form via email, this requires support of at least one form element, at least one form method and either input submit or button submit to pass data to an end point."
category: html
keywords: form
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
            "10.3":"y",
            "12.4":"y"
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
            "2020-01":"n #4",
            "2021-03":"n"
        },
        ios: {
            "2020-01":"n #4"
        },
        android: {
            "2020-01":"n #4"
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
            "2011":"n",
            "2016":"n",
            "2019":"n"
        },
        outlook-com: {
            "2019-02":"y #2",
            "2019-10":"a #2 #3"
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
            "2020-01":"n #4"
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
            "68.4":"y"
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
    protonmail: {
        desktop-webmail: {
            "2020-03":"n"
        },
        ios: {
            "2020-03":"n"
        },
        android: {
            "2020-03":"n #5"
        }
    },
    hey: {
        desktop-webmail: {
            "2020-06":"n"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2020-10":"n #6"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-07": "n"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-08": "n #4"
        }
    }
}
notes: ""
notes_by_num: {
  "1": "Does not submit in iOS with non Gmail accounts.",
  "2": "On submit name values are prefixed with `x_`.",
  "3": "Does not submit in preview pane, but does when the email is opened in a new window.",
  "4": "Not supported. `<form>` is transformed into `<noform>`.",
  "5": "Not supported. The `<form>` and its entire content is removed.",
  "6": "Not supported. The `<form>` is there but values are not submitted."
}
---
