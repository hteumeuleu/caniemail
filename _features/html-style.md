---
title: "<style> element"
description: "This is the description of the `<style>` element."
category: html
last_test_date: "2019-06-24"
test_url: "/tests/html-style.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/od5IYQtx8yIbIUbeRyQXnP0yzFKEm2E9CKa3FU4BcEXFv/list"
stats: {
    apple-mail: {
        macos: {
            "10.3":"y"
        },
        ios: {
            "10.3":"y",
            "12.3":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2019-06":"a #1"
        },
        ios: {
            "2019-06":"a #1 #2"
        },
        android: {
            "2019-06":"a #1 #2"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-06":"y"
        },
        ios: {
            "2019-06":"y"
        },
        android: {
            "2019-06":"n",
            "2019-08":"y"
        }
    },
    outlook: {
        windows: {
            "2003":"y",
            "2007":"a #4",
            "2010":"a #4",
            "2013":"a #4",
            "2016":"a #4",
            "2019":"a #4"
        },
        macos: {
            "2011":"y",
            "2016":"y"
        },
        outlook-com: {
            "2019-06":"y"
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
            "5.0.10.2":"y",
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2019-06":"y"
        },
        ios: {
            "2019-06":"n"
        },
        android: {
            "2019-06":"n"
        }
    },
    thunderbird: {
        macos: {
            "60.3":"y"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2019-06":"y"
        },
        ios: {
            "2019-06":"y"
        },
        android: {
            "2019-06":"a #3"
        }
    }
}
notes: ""
notes_by_num: {
    "1": "Partial. Not supported inside the `<body>`.",
    "2": "Partial. Not supported with Non Gmail Accounts.",
    "3": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element.",
    "4": "Buggy. `<style>` elements need to be declared before their rules are used."
}
---
