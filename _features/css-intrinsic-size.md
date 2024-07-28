---
title: "fit-content, min-content, max-content"
description: "Sets the height or width relative to its content."
category: css
last_test_date: "2022-12-31"
test_url: "/tests/css-intrinsic-size.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/tcE2poX3tOf6HlwmIH6GQqveQN6SwMrsqCp4ylpkFVc3W/list"
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
            "2023-01":"n"
        },
        ios: {
            "2023-01":"n"
        },
        android: {
            "2022-12":"n"
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
			"2022-12": "n"
		},
		macos: {
			"2022-12": "y",
			"16.80": "y",
		},
		outlook-com: {
			"2022-12": "y",
			"2023-12": "y",
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
			"6.1": "n"
		}
	},
    sfr: {
        desktop-webmail: {
            "2022-12":"y"
        },
        ios: {
            "2022-12":"y"
        },
        android: {
            "2022-12":"y"
        }
    },
	thunderbird: {
		macos: {
			"102.6": "y"
		}
	},
	k-9: {
		android: {
			"6.904":"y"
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
            "2022-12": "y"
        }
    }
}
notes_by_num: {
    "1": "Partial. Supports `min-content` and `fit-content` only.",
    "2": "Buggy. `width: min-content` acts as if `word-break: break-all` had been set on the element.",
    "3": "Partial. Not supported with non Google accounts."
}
---
