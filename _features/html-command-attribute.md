---
title: "command and commandfor attributes"
description: "Attributes used to manage popover and dialog open states. Replacing popovertarget/popovertargetaction"
category: html
last_test_date: "2026-07-13"
test_url: ""
test_results_url: ""
stats: {
	apple-mail: {
		macos: {
			"16": "y"
		},
		ios: {
			"18.7": "n",
			"26.9": "y"
		}
	},
	gmail: {
		desktop-webmail: {
			"2026-07": "n"
		},
		ios: {
			"2026-07": "n"
		},
		android: {
			"2026-07":"n"
		},
        mobile-webmail: {
            "2026-07": "n"
        }
	},
	orange: {
		desktop-webmail: {
            "2026-07":"u",
		},
		ios: {
            "2026-07":"u",
		},
		android: {
            "2026-07":"u",
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
			"2026-07": "n"
		},
		macos: {
			"2026-07": "n",
		},
		outlook-com: {
			"2026-07": "n",
		},
		ios: {
			"2026-07": "u"
		},
		android: {
			"2026-07": "n"
		}
	},
    thunderbird: {
        macos: {
            "152":"y"
        }
    },
	yahoo: {
		desktop-webmail: {
			"2026-07": "n"
		},
		ios: {
			"2026-07": "n"
		},
		android: {
			"2026-07": "n"
		}
	},
	aol: {
		desktop-webmail: {
			"2026-07": "n"
		},
		ios: {
			"2026-07": "n"
		},
		android: {
			"2026-07": "n"
		}
	},
	samsung-email: {
		android: {
			"6.2.13": "a #1"
		}
	},
    sfr: {
        desktop-webmail: {
            "2026-07":"u"
        },
        ios: {
            "2026-07":"u"
        },
        android: {
            "2026-07":"u"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2026-07":"a #2"
        },
        ios: {
            "2026-07":"n"
        },
        android: {
            "2026-07":"n"
        }
    },
    hey: {
        desktop-webmail: {
            "2026-07":"u"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2026-07":"u"
        }
    },
	fastmail: {
		desktop-webmail: {
			"2026-07": "u"
		}
	},
	laposte: {
		desktop-webmail: {
			"2026-078": "u"
		}
	},
	gmx: {
		desktop-webmail: {
			"2026-07": "n"
		},
		ios: {
			"2026-07": "u"
		},
		android: {
			"2026-07":"n"
		}
	},
	web-de: {
		desktop-webmail: {
			"2026-07": "n"
		},
		ios: {
			"2026-07": "u"
		},
		android: {
			"2026-07": "n"
		}
	},
	ionos-1and1: {
		desktop-webmail: {
			"2026-07": "n"
		}
	}
}
notes_by_num: {
	"1": "Partial. Not supported with Microsoft (Hotmail/Outlook) accounts.",
    "2": "Buggy. Webmail styles set dialog to display:block so we need to revert with display:revert",
}
---
