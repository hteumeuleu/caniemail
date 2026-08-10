---
title: "popover attribute"
description: "Show and hide things"
category: html
last_test_date: "2026-07-13"
test_url: "/tests/html-popover.html"
test_results_url: ""
stats: {
	apple-mail: {
		macos: {
			"16": "y"
		},
		ios: {
			"16": "y"
		}
	},
	gmail: {
		desktop-webmail: {
			"2023-09": "n"
		},
		ios: {
			"2023-09": "n"
		},
		android: {
			"2024-03": "n"
		},
        mobile-webmail: {
            "2024-03": "n"
        }
	},
    orange: {
        desktop-webmail: {
            "2019-08":"u",
            "2021-03":"u"
        },
        ios: {
            "2019-08":"u"
        },
        android: {
            "2019-08":"u"
        }
    },
	outlook: {
		windows: {
			"2007": "n",
			"2010": "n",
			"2013": "n",
			"2016": "n",
			"2019": "n"
		},
		windows-mail: {
			"2023-09": "n"
		},
		macos: {
			"2023-09": "n",
			"16.80": "n",
		},
		outlook-com: {
			"2023-09": "n",
			"2024-01": "n",
		},
		ios: {
			"2023-09": "n"
		},
		android: {
			"2024-03": "n"
		}
	},
	yahoo: {
		desktop-webmail: {
			"2023-09": "n"
		},
		ios: {
			"2023-09": "n"
		},
		android: {
			"2024-03": "n"
		}
	},
	aol: {
		desktop-webmail: {
			"2023-09": "n"
		},
		ios: {
			"2023-09": "n"
		},
		android: {
			"2023-09": "u",
            "2026-07": "n"
		}
	},
	samsung-email: {
		android: {
			"5.0.10.2": "u",
            "6.1.90.16": "a #1",
		}
	},
    sfr: {
        desktop-webmail: {
            "2024-03":"y"
        },
        ios: {
            "2024-03":"n"
        },
        android: {
            "2024-03":"y"
        }
    },
	thunderbird: {
		macos: {
			"115.2": "n",
            "152": "a #3"
		}
	},
    protonmail: {
        desktop-webmail: {
            "2023-09":"n",
            "2026-07": "y"
        },
        ios: {
            "2023-09":"n",
            "2026-07": "y #4"
        },
        android: {
            "2023-09":"u",
            "2026-07": "y #4"
        }
    },
    hey: {
        desktop-webmail: {
            "2023-09":"n"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2024-01":"a"
        }
    },
	fastmail: {
		desktop-webmail: {
			"2023-09": "n"
		}
	},
    laposte: {
        desktop-webmail: {
            "2021-08": "u"
        }
    },
    gmx: {
        desktop-webmail: {
            "2022-06": "u",
            "2026-07": "n"
        },
        ios: {
            "2022-06":"u",
            "2026-07": "y"
        },
        android: {
            "2022-06":"u"
        }
    },
    web-de: {
        desktop-webmail: {
            "2022-06": "u",
            "2026-07": "n"
        },
        ios: {
            "2022-06":"u",
            "2026-07": "y"
        },
        android: {
            "2022-06":"u"
        }
    },
    ionos-1and1: {
        desktop-webmail: {
            "2022-06": "u",
            "2026-07": "n"
        },
        android: {
            "2022-06":"u"
        }
    }
}
notes_by_num: {
    "1": "Partial. Not supported with Hotmail/Outlook accounts.",
    "2": "Partial. The `popovertarget` attribute is supported, but the `popover` attribute and the `dialog` element are not.",
    "3": "Buggy. A button with just an image inside will trigger an image zoom rather than the popover.",
    "4": "Partial. Does not work with command/commandfor attributes only with popovertarget/popovertargetaction",
}
---
