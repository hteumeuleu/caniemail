---
title: "word-wrap"
description: "The word-wrap CSS property (now standardized as overflow-wrap) controls whether the browser should break words to prevent them from overflowing their container. When set to break-word, it forces otherwise unbreakable strings to wrap onto the next line to avoid layout issues."
category: css
keywords: word-wrap, word-break, overflow-wrap
last_test_date: "2025-05-08"
test_url: "/tests/css-word-wrap.html"
test_results_url: "https://app.emailonacid.com/app/acidtest/vCaPUwbCjmYsdRJi38QdpqJSetV5X7wBQh5iymp8t1Sty/list"
stats: {
    apple-mail: {
        macos: {
            "16":"y"
        },
        ios: {
            "16":"y"
        }
    },
    gmail: {
        desktop-webmail: {
            "2025-05":"a #1"
        },
        android: {
            "2025-05":"a #1"
        }
    },
    outlook: {
        windows: {
            "2016":"n #2",
            "2019":"n #2",
            "2021":"n #2"
        },
        windows-mail: {
            "2025-05":"n"
        },
        outlook-com: {
            "2022-05":"y #3"
        },
        ios: {
            "2025-05":"y #3"
        },
        android: {
            "2025-05":"n"
        }
    },
    yahoo: {
        desktop-webmail: {
            "2025-05":"y"
        }
    }
}
notes_by_num: {
    "1": "Applies `word-wrap: break-word` to all items.",
    "2": "Does not honor any wrapping, including `word-wrap`, `overflow-wrap`, and `word-break`. Using an equivalent MSO breakdown (`-ms-word-break: break-all` and `mso-hyphenate: none` together) does not work.",
    "3": "Supports both `word-wrap` and equivalent MSO breakdown (`-ms-word-break: break-all` and `mso-hyphenate: none` together)"
}
links: {
    "Can I use: word-wrap":"https://caniuse.com/wordwrap",
    "MDN: overflow-wrap":"https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap"
}
---
