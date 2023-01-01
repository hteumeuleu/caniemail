---
title: "fit-content, min-content, max-content"
description: "Sets the height or width relative to its content."
category: css
last_test_date: "2022-12-31"
test_url: "/tests/css-intrinsic-size.html"
test_results_url: ""
stats: {
	apple-mail: {
		macos: {
			"12.4": "y #2"
		},
		ios: {
			"12.1": "y #2"
		}
	},
	gmail: {
		desktop-webmail: {
			"2022-12": "y"
		},
		ios: {
			"2022-12": "a #3"
		},
		android: {
			"2022-12": "y"
		},
        mobile-webmail: {
            "2022-12": "y"
        }
	},
    orange: {
        desktop-webmail: {
            "2022-12":"u",
            "2022-12":"u"
        },
        ios: {
            "2022-12":"u"
        },
        android: {
            "2022-12":"u"
        }
    },
	outlook: {
		windows: {
			"2007": "u",
			"2010": "u",
			"2013": "u",
			"2016": "u",
			"2019": "u"
		},
		windows-mail: {
			"2022-12": "u"
		},
		macos: {
			"2022-12": "y"
		},
		outlook-com: {
			"2022-12": "u"
		},
		ios: {
			"2022-12": "a #1"
		},
		android: {
			"2022-12": "a #1"
		}
	},
	yahoo: {
		desktop-webmail: {
			"2022-12": "n"
		},
		ios: {
			"2022-12": "n"
		},
		android: {
			"2022-12": "n"
		}
	},
	aol: {
		desktop-webmail: {
			"2022-12": "n"
		},
		ios: {
			"2022-12": "n"
		},
		android: {
			"2022-12": "n"
		}
	},
	samsung-email: {
		android: {
			"5.0.10.2": "u"
		}
	},
    sfr: {
        desktop-webmail: {
            "2022-12":"u"
        },
        ios: {
            "2022-12":"u"
        },
        android: {
            "2022-12":"u"
        }
    },
	thunderbird: {
		macos: {
			"102.6": "y"
		}
	},
    protonmail: {
        desktop-webmail: {
            "2022-12":"y"
        },
        ios: {
            "2022-12":"y #2"
        },
        android: {
            "2022-12":"y"
        }
    },
    hey: {
        desktop-webmail: {
            "2022-12":"y"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2022-12":"y"
        }
    },
	fastmail: {
		desktop-webmail: {
			"2022-12": "y"
		}
	},
    laposte: {
        desktop-webmail: {
            "2022-12": "u"
        }
    }
}
notes_by_num: {
    "1": "Partial. Supports `min-content` and `fit-content` only.",
    "2": "Buggy. `width: min-content` acts as if `word-break: break-all` had been set on the element.",
    "3": "Partial. Not supported with non Gmail accounts."
}
---