---
title: "Local anchors"
description: ""
keywords: "hash, fragment identifiers, URLs, URIs, document fragments, local, named, anchor, anchors, links"
category: html
last_test_date: "2019-08-08"
test_url: "/tests/html-anchor-links.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/lvP3Vdg0qtue1RAuGTjzEXl19nfCJu3TVV4lLdzwdqQk5/list"
stats: {
	apple-mail: {
		macos: {
			"12.4":"y #6"
		},
		ios: {
			"12.4":"n #3",
			"15.0":"y"
		}
	},
	gmail: {
		desktop-webmail: {
			"2019-08":"y #7"
		},
		ios: {
			"2019-08":"n #3"
		},
		android: {
			"2019-08":"y #6"
		},
        mobile-webmail: {
            "2020-02":"y #7"
        }
	},
	orange: {
		desktop-webmail: {
			"2019-08":"a #1",
            "2021-03":"n"
		},
		ios: {
			"2019-08":"n #3"
		},
		android: {
			"2019-08":"y"
		}
	},
	outlook: {
		windows: {
			"2003":"u",
			"2007":"y #7",
			"2010":"y #7",
			"2013":"y #7",
			"2016":"y #7",
			"2019":"y #7"
		},
        windows-mail: {
            "2020-01":"y #7"
        },
		macos: {
			"2019":"n",
			"2023":"y",
			"16.80":"y",
		},
		outlook-com: {
			"2019-08":"y",
			"2024-01":"y",
		},
		ios: {
			"2019-08":"n #3"
		},
		android: {
			"2019-08":"n #3"
		}
	},
	samsung-email: {
		android: {
			"6.0":"n #3"
		}
	},
	sfr: {
		desktop-webmail: {
			"2019-08":"n #2"
		},
		ios: {
			"2019-08":"n #4"
		},
		android: {
			"2019-08":"n #3"
		}
	},
	thunderbird: {
		macos: {
			"60.3":"y"
		}
	},
	aol: {
		desktop-webmail: {
			"2020-01":"a #7"
		},
		ios: {
			"2020-01":"y"
		},
		android: {
			"2020-01":"n"
		}
	},
	yahoo: {
		desktop-webmail: {
			"2019-08":"a #7"
		},
		ios: {
			"2019-08":"n #5"
		},
		android: {
			"2019-08":"n #3"
		}
	},
    protonmail: {
        desktop-webmail: {
            "2020-03":"y"
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
            "2020-06":"n"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2020-10":"y #7 #9"
        }
    },
	fastmail: {
		desktop-webmail: {
			"2021-07": "y"
		}
	},
	laposte: {
		desktop-webmail: {
			"2021-08": "n"
		}
	},
	gmx: {
		desktop-webmail: {
			"2022-11": "y"
		},
		ios: {
			"2022-11":"y"
		},
		android: {
			"2022-11": "n"
		}
	},
	web-de: {
		desktop-webmail: {
			"2022-11": "y"
		},
		ios: {
			"2022-11":"y"
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
			"2022-11": "y"
		}
	}
}
notes_by_num: {
	"1": "Buggy. `target=_blank` is added on links so anchors open in a new window.",
	"2": "Buggy. Anchor links go back to the homepage of the webmail because it also uses anchor links for navigation.",
	"3": "Buggy. Clicking an anchor link does nothing.",
	"4": "Buggy. Opens a new browser window with the anchor as a URL.",
	"5": "Buggy. Opens a new in-app browser window on yahoo.com with the anchor appended to the URL.",
	"6": "Buggy. Targeted content is partially hidden by the application UI on top.",
	"7": "Partial. Works when targeting an empty anchor with the corresponding `name` attribute, but not with `id` attributes.",
	"8": "Not supported. Opens a new window with the same email.",
	"9": "The `name` and `href` attributes are prefixed by a specific `mailruanchor_` prefix."
}
---
