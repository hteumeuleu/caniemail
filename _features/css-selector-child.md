---
title: "Child combinator"
description: "The child combinator is represented by a superior sign (`>`) between two selectors and matches the second selector if it is a direct child of the first selector."
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
            "2007":"n",
            "2010":"n",
            "2013":"n",
            "2016":"n",
            "2019":"n"
        },
        windows-mail: {
            "2023-06":"n"
        },
        macos: {
            "2011":"y",
            "2016":"y",
            "16.80":"y",
        },
        outlook-com: {
            "2019-10":"y",
            "2024-01":"y",
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
            "2022-06": "n"
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
            "2022-06": "n"
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
    "1": "Partial. Not supported with non Google accounts.",
    "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element."
}
links: {
    "Can I use: Child combinator":"https://caniuse.com/#feat=mdn-css_selectors_child",
    "MDN: Child combinator":"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"
}
---
