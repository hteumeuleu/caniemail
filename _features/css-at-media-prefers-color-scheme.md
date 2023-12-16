---
title: "@media (prefers-color-scheme)"
description: "This media query allows to theme for system light and dark mode."
category: css
keywords: "media queries, media query, media feature, dark mode, light mode"
tags: accessibility
last_test_date: "2023-03-08"
test_url: "/tests/css-media-prefers-color-scheme.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/CBhafIa5yXDRKQKbV442rVFISXim84wMgXaoCqVFD8VTe/list"
stats: {
    apple-mail: {
        macos: {
            "10.3":"n",
            "12.4":"y",
            "16.0":"y"
        },
        ios: {
            "12.2":"n",
			"13.0":"y",
            "16.1":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2020-01":"n",
            "2022-12":"n"
        },
        ios: {
            "2020-01":"n",
            "2022-12":"n"
        },
        android: {
            "2020-01":"n",
            "2022-12":"n"
        },
        mobile-webmail: {
            "2020-02":"n",
            "2022-12":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2019-08":"y",
            "2021-03":"y",
            "2022-12":"y"
        },
        ios: {
            "2020-01":"n",
            "2022-12":"y"
        },
        android: {
            "2020-01":"n",
            "2022-12":"n"
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
            "2019":"y",
            "16.70":"y #3"
        },
        outlook-com: {
            "2019-07":"y",
            "2022-12":"y #3"
        },
        ios: {
            "2020-01":"y",
            "2022-12":"y #3"
        },
        android: {
            "2020-01":"n",
            "2022-12":"n #3",
            "2023-03":"y #3"
        }
    },
    samsung-email: {
        android: {
            "6.0":"n",
			"6.1":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2019-08":"y",
            "2022-12":"y"
        },
        ios: {
            "2019-08":"n",
            "2022-12":"n"
        },
        android: {
            "2019-08":"n",
            "2022-12":"n"
        }
    },
    thunderbird: {
        macos: {
            "60.8":"n",
            "68.4":"y",
            "78.5":"n",
            "91.13":"n"
        }
    },
    aol: {
        desktop-webmail: {
            "2020-01":"n #1"
        },
        ios: {
            "2020-01":"n #1"
        },
        android: {
            "2020-01":"n #1"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2020-01":"n #1",
            "2022-12":"n #6"
        },
        ios: {
            "2020-01":"n #1",
            "2022-12":"n"
        },
        android: {
            "2020-01":"n #1",
            "2022-12":"n"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2020-03":"n",
            "2022-12":"n"
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
            "2020-06":"y",
            "2022-12":"n #5"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2020-10":"n",
            "2022-12":"n"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-07": "n #2",
            "2022-12": "y #4"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-08": "y",
            "2022-12": "y"
        }
    },
    free-fr: {
        desktop-webmail: {
            "2022-12": "y"
        }
    },
    t-online-de: {
        desktop-webmail: {
            "2022-12": "n"
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
    "1": "Not supported. `@media (prefers-color-scheme)` is transformed into `@media ( _filtered_a )`.",
    "2": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media none`.",
    "3": "Additional custom `data` attributes (`data-ogsc`, `data-ogac`, `data-ogsb`, `data-ogab`) are added when viewing an email in dark mode. See [this article](https://www.hteumeuleu.com/2021/emails-react-outlook-com-dark-mode/) for examples.",
    "4": "`@media (prefers-color-scheme:dark)` is transformed into `@media all` at run time if it applies.",
    "5": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media (false)`",
    "6": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media ()`"
}
links: {
    "Can I use: prefers-color-scheme media query":"https://caniuse.com/prefers-color-scheme",
    "MDN: prefers-color-scheme":"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",
    "Making Emails React to Outlook.com’s Dark Mode":"https://www.hteumeuleu.com/2021/emails-react-outlook-com-dark-mode/",
    "Fixing Gmail’s dark mode issues with CSS Blend Modes":"https://www.hteumeuleu.com/2021/fixing-gmail-dark-mode-css-blend-modes/",
    "How To Fix Outlook Dark Mode Problems (in Outlook on Windows)":"https://webdesign.tutsplus.com/tutorials/how-to-fix-outlook-dark-mode-problems--cms-37718",
    "ProofJump’s Dark Mode Simulator":"https://proofjump.com/dark-mode-simulator/"
}
---
