---
title: "<base>"
description: "Specifies the base URL to use for all relative URLs in a document."
category: html
last_test_date: "2021-12-01"
test_url: "/tests/html-base.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/4H7Qbzi9dS5UOKS1db7w5SIbkPVfIlbAM3UCFi8FOnhA8/list"
stats: {
    apple-mail: {
        macos: {
            "15":"y"
        },
        ios: {
            "15":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-12":"a #1"
        },
        ios: {
            "2021-12":"a #1"
        },
        android: {
            "2021-12":"a #1"
        },
        mobile-webmail: {
            "2021-12":"a #1"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-12":"a #1",
            "2024-04":"n #1",
        },
        ios: {
            "2021-12":"n",
            "2024-04":"n",
        },
        android: {
            "2021-12":"n",
            "2024-04":"n",
        }
    },
    outlook: {
        windows: {
            "2003":"u",
            "2007":"u",
            "2010":"u",
            "2013":"u",
            "2016":"u",
            "2019":"y"
        },
        windows-mail: {
            "2021-12":"n"
        },
        macos: {
            "16.56":"y",
            "16.80":"a #1",
        },
        outlook-com: {
            "2021-12":"a #1",
            "2024-01":"a #1",
        },
        ios: {
            "2021-12":"a #1 #2"
        },
        android: {
            "2021-12":"n"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-12":"n"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    thunderbird: {
        linux: {
      		"115": "y"
    	},
        macos: {
            "91.2":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2021-12":"a #1 #3 #4"
        },
        ios: {
            "2021-12":"a #1 #3 #4"
        },
        android: {
            "2021-12":"a #1 #3 #4"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-12":"a #1 #3 #4"
        },
        ios: {
            "2021-12":"a #1 #3 #4"
        },
        android: {
            "2021-12":"a #1 #3 #4"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-12":"a"
        },
        ios: {
            "2021-12":"n"
        },
        android: {
            "2021-12":"n"
        }
    },
    hey: {
        desktop-webmail: {
            "2021-12":"a #1"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2021-12":"n"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-12": "a #1 #4"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-12": "n"
        }
    },
	gmx: {
		desktop-webmail: {
			"2022-11": "n"
		},
		ios: {
			"2022-11": "y"
		},
		android: {
			"2022-11": "n"
		}
	},
	web-de: {
		desktop-webmail: {
			"2022-11": "n"
		},
		ios: {
			"2022-11": "y"
		},
		android: {
			"2022-11": "n"
		}
	},
	ionos-1and1: {
		desktop-webmail: {
			"2022-11": "y"
		},
		android: {
			"2022-11": "n"
		}
	}
}
notes_by_num: {
    "1": "Buggy. The element is removed but URLs are turned into links with `href` attribute.",
    "2": "Buggy. URLs are computed based on the first `<base>` element found in the `<body>`.",
    "3": "Buggy. URLs are computed based on the last `<base>` element found in the `<body>`.",
    "4": "Buggy. Not supported for local anchor links."
}
links: {
    "Can I use: HTML element: base":"https://caniuse.com/mdn-html_elements_base",
    "MDN: <base> element":"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"
}
---
