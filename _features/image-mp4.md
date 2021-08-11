---
title: "Video as Image Assets"
description: "WebKit in Safari supports loading H.264 encoded MP4 video with an HTML tag or as a CSS background."
category: image
keywords: mp4
last_test_date: "2021-05-13"
test_url: "/tests/video-as-img.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/zvrwvdXQmUlQraqSQK6MRTbapeBTBX0VBWZ0h2KMVCwk6/list"
stats: {
    apple-mail: {
        macos: {
            "11":"y",
            "14":"y"
        },
        ios: {
            "11":"y",
            "14.5":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2021-05":"n"
        },
        ios: {
            "2021-05":"n"
        },
        android: {
            "2021-05":"n"
        },
        mobile-webmail: {
            "2021-05":"n"
        }
    },
    orange: {
        desktop-webmail: {
            "2021-05":"y #1"
        },
        ios: {
            "2021-05":"y"
        },
        android: {
            "2021-05":"n"
        }
    },
    outlook: {
        windows: {
            "2003":"n #2",
            "2007":"n",
            "2010":"n",
            "2013":"n",
            "2016":"n",
            "2019":"n"
        },
        windows-10-mail: {
            "2021-05":"n"
        },
        macos: {
            "2011":"n",
            "2016":"y"
        },
        outlook-com: {
            "2021-05":"y #1"
        },
        ios: {
            "2021-05":"y"
        },
        android: {
            "2021-05":"n"
        }
    },
    samsung-email: {
        android: {
            "6.0":"n"
        }
    },
    sfr: {
        desktop-webmail: {
            "2021-05":"y #1"
        },
        ios: {
            "2021-05":"y"
        },
        android: {
            "2021-05":"n"
        }
    },
    thunderbird: {
        macos: {
            "78.19":"n"
        }
    },
    aol: {
        desktop-webmail: {
            "2021-05":"y #1"
        },
        ios: {
            "2021-05":"y"
        },
        android: {
            "2021-05":"n"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2021-05":"y #1"
        },
        ios: {
            "2021-05":"y"
        },
        android: {
            "2021-05":"n"
        }
    },
    protonmail: {
        desktop-webmail: {
            "2021-05":"y #1"
        },
        ios: {
            "2021-05":"y"
        },
        android: {
            "2021-05":"n"
        }
    },
    hey: {
        desktop-webmail: {
            "2021-05":"n"
        }
    },
    mail-ru: {
        desktop-webmail: {
            "2021-05":"n"
        }
    },
    fastmail: {
        desktop-webmail: {
            "2021-07": "n"
        }
    },
    laposte: {
        desktop-webmail: {
            "2021-08": "y #1"
        }
    }
}
notes: "As of may 2021, using Video as Image Assets is only supported in WebKit and Safari."
notes_by_num: {
    "1": "Only supported in Safari.",
    "2": "A similar can be achieved using the [`dynsrc` attribute](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/ms533742(v=vs.85))."
}
links: {
    "New WebKit Features in Safari 11.1": "https://webkit.org/blog/8216/new-webkit-features-in-safari-11-1/",
    "Evolution of &lt;img&gt;: Gif without the GIF": "https://calendar.perfplanet.com/2017/animated-gif-without-the-gif/"
}
---