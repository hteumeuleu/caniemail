---
title: "dir attribute"
description: "Indicates the directionality of the element's text."
category: html
keywords: direction, ltr, rtl
tags: i18n
last_test_date: "2021-11-01"
test_url: "/tests/css-direction.html"
test_results_url: "https://testi.at/proj/onwCpJ1Hp7mc8XYhbvUVbvHoM"
stats: {
    apple-mail: {
        macos: {
            "14":"y"
        },
        ios: {
            "15":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-10":"y"
        },
        ios: {
            "2021-10":"y"
        },
        android: {
            "2021-10":"y"
        },
        mobile-webmail: {
            "2021-10":"a #1"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-10":"a #2",
            "2024-04":"a #2",
        },
        ios: {
            "2021-10":"y",
            "2024-04":"a #2",
        },
        android: {
            "2021-10":"y",
            "2024-04":"a #2",
        }
    },
    outlook: {
        windows: {
            "2007":"a #3 #4",
            "2010":"a #3",
            "2013":"a #3",
            "2016":"a #3",
            "2019":"a #3"
        },
        windows-mail: {
            "2021-10":"a #3"
        },
        macos: {
            "16.55":"y",
            "16.80":"y",
        },
        outlook-com: {
            "2021-10":"y",
            "2024-01":"y",
        },
        ios: {
            "2021-10":"y"
        },
        android: {
            "2021-10":"y"
        }
    },
    samsung-email: {
        android: {
            "6.0":"y"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-10":"y"
        },
        ios: {
            "2021-10":"y"
        },
        android: {
            "2021-10":"y"
        }
    },
    thunderbird: {
        macos: {
            "78.14":"y"
        }
    },
    k-9: {
		android: {
			"6.904":"y"
		}
  	},
    aol: {
        desktop-webmail: {
            "2021-10":"y"
        },
        ios: {
            "2021-10":"y"
        },
        android: {
            "2021-10":"y"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-10":"y"
        },
        ios: {
            "2021-10":"y"
        },
        android: {
            "2021-10":"y"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-10":"y"
        },
        ios: {
            "2021-10":"y"
        },
        android: {
            "2021-10":"y"
        }
    },
    hey: {
        desktop-webmail: {
            "2021-10":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2021-10":"y"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-10": "y"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-10": "y"
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
    "1": "Buggy. The client applies an `rtl` direction to the entire email if it contains text in a `rtl` language.",
    "2": "Partial. Removed from `<table>` and `<td>` elements.",
    "3": "Buggy on anchor `<a>` tags.",
    "4": "Buggy. LTR text in `[dir=rtl]` (and vice versa) is rendered with reversed word order."
}
links: {
    "Can I use: dir":"https://caniuse.com/mdn-html_global_attributes_dir",
    "MDN: dir":"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir"
}
---
