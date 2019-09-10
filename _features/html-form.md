---
title: "Form"
description: "The ability to submit an HTML form via email, this requires support of at least one form element, at least one form method and either input submit or button submit to pass data to an end point."
category: html
keywords: form
last_test_date: "2019-09-10"
test_url: "tests/html-forms.html"
test_results_url: ""
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
        macos: {
            "2011":"n",
            "2016":"n",
            "2019":"n"
        },
        outlook-com: {
            "2019-09":"y #2"
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
    }
}
notes: ""
notes_by_num: {
  "1": "Does not submit in iOS GANGA",
  "2": "On submit name values are prefixed with x_"
}
---
