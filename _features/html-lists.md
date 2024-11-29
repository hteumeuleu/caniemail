---
title: "<ul>, <ol> and <dl>"
description: "Support for lists in HTML: `<ul>`, `<ol>`, `<li>`, `<dl>`, `<dt>` and `<dd>` elements."
category: html
keywords: ul, ol, li, dl, dt, dd
last_test_date: "2024-02-17"
test_url: "/tests/css-list.html"
test_results_url: "https://testi.at/proj/5jbpc3r2cknp15ayua"
stats: {
    apple-mail: {
        macos: {
            "12.4":"y"
        },
        ios: {
            "13.4":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        ios: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        android: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        mobile-webmail: {
            "2020-04":"y",
            "2024-02":"a #1"
        }
    },
    orange: {
        desktop-webmail: {
            "2020-04":"y",
            "2021-03":"y"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"y"
        }
    },
    outlook: {
        windows: {
            "2003":"a #1 #2",
            "2007":"a #1 #2",
            "2010":"a #1 #2",
            "2013":"a #1 #2",
            "2016":"a #1 #2",
            "2019":"a #1 #2"
        },
        windows-mail: {
            "2020-04":"y",
            "2024-02":"a #1 #2"
        },
        macos: {
            "2011":"y",
            "2016":"y",
            "16.80":"y",
            "2024-02":"a #1"
        },
        outlook-com: {
            "2020-04":"y",
            "2024-01":"y",
            "2024-02":"a #1"
        },
        ios: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        android: {
            "2020-04":"y",
            "2024-02":"a #1"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2020-04":"y"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"y"
        }
    },
    thunderbird: {
        linux: {
      		"115": "y"
    	},
        macos: {
            "68.7":"y"
        }
    },
    aol: {
        desktop-webmail: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        ios: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        android: {
            "2020-04":"y",
            "2024-02":"a #1"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        ios: {
            "2020-04":"y",
            "2024-02":"a #1"
        },
        android: {
            "2020-04":"y",
            "2024-02":"a #1"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2020-04":"y"
        },
        ios: {
            "2020-04":"y"
        },
        android: {
            "2020-04":"y"
        }
    },
    hey: {
        desktop-webmail: {
            "2020-06":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2020-10":"y",
            "2024-02":"a #1"
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
          "2022-06": "y"
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
			"2022-06": "y"
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
"notes_by_num": {
	"1": "Partial. The `reversed` attribute on `<ol>` is not supported.",
	"2": "Partial. Setting the `value` attribute to an `<li>` within an `<ol>` results in a different behaviour in comparison to browsers. The `<ol>` tag is closed before the `<li value=\"\">`. A new `<ol>` is added with the `start` attribute on it set to the value of the `value` attribute of the `<li>`."
}
---
