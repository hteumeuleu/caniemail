---
title: "@media"
description: ""
category: css
keywords: "media queries, media query, media feature"
last_test_date: "2023-12-13"
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
            "2019-08":"a #1 #7",
            "2020-01":"a #7"
        },
        ios: {
            "2019-08":"a #1 #6 #7",
            "2020-01":"a #6 #7"
        },
        android: {
            "2019-08":"a #1 #6 #7",
            "2022-07":"a #6 #7"
        },
        mobile-webmail: {
            "2020-02":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-08":"y #5",
            "2021-03":"y"
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
        windows-mail: {
            "2020-01":"n"
        },
        macos: {
            "2011":"y",
            "2016":"y",
            "16.80": "a #1 #10"
        },
        outlook-com: {
            "2019-08":"a #1",
            "2023-12":"a #1 #10"
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
            "6.0":"y",
            "6.1.90.16":"a #9"
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
            "60.3":"y",
            "78.5":"n",
			"102.11":"n"
        }
    },
    k-9: {
		android: {
			"6.904":"a #11"
		}
  	},
    yahoo: {
        desktop-webmail: {
            "2019-08":"a #1 #2",
            "2020-01":"a #2"
        },
        ios: {
            "2019-08":"a #1 #2",
            "2020-01":"a #2"
        },
        android: {
            "2019-08":"a #1 #2 #3",
            "2020-01":"a #2 #3"
        }
    },
    aol: {
        desktop-webmail: {
            "2019-02":"a #1 #2",
            "2020-01":"a #2"
        },
        ios: {
            "2019-02":"a #1 #2",
            "2020-01":"a #2"
        },
        android: {
            "2019-02":"a #1 #2",
            "2020-01":"a #2"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2020-03":"n",
			"2023-05":"a #8"
        },
        ios: {
            "2020-03":"n",
			"2023-05":"a #8"
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
            "2020-10":"a #1 #7"
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
          "2022-06": "y #1"
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
			"2022-06": "y #1"
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
    "1": "Partial. Does not support nested media queries.",
    "2": "Partial. Only supports `screen`, `min-width`, `max-width`, `min-height` and `max-height` based media queries.",
    "3": "Buggy. Requires a double `<head>` hack to work.",
    "4": "Partial. Does not support simple `@media {}` declarations.",
    "5": "Buggy. The first rule inside a media query is not prefixed.",
    "6": "Partial. Not supported with non Google accounts.",
    "7": "Partial. Does not support height based media queries.",
    "8": "Partial. Does not support landscape media query.",
	"9": "Partial. Not supported with Hotmail/Outlook accounts.",
    "10": "Partial. Nested media queries are removed.",
    "11": "Partial. Does not support portrait media query.",
}
links: {
    "Can I use: CSS3 Media Queries":"https://caniuse.com/#feat=css-mediaqueries",
    "MDN: @media":"https://developer.mozilla.org/en-US/docs/Web/CSS/@media"
}
---
