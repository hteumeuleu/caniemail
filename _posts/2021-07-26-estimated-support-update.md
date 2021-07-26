---
title:  "Updated Estimated Support"
date: 2021-07-26
---

In february 2020, we introduced [Estimated Support](/news/2020-02-13-estimated-support/), a “_functionality to help make technical choices_”. Ahead of the introduction of [Mail Privacy Protection in iOS 15](https://www.apple.com/ios/ios-15-preview/), and with similar features making their way in other email services like [Hey](https://www.hey.com/features/spy-pixel-blocker/) or [DuckDuckGo](https://spreadprivacy.com/introducing-email-protection-beta/), we think it’s a good time to update how estimated support is calculated.

Instead of relying on Litmus’ [EmailClientMarketShare.com](https://www.emailclientmarketshare.com)’s data, we’re now showing a share of all the clients tested.

If a feature is tested across 10 email clients, and that this feature is supported in six clients, partially supported in three clients and not supported in one client, its estimated support will be: 60% supported, 30% partially supported and 10% not supported.

We believe this change will help us answer the question “_Does this work in a lot of email clients?_” even more easily.

As a bonus, we can now show an estimated support [based on the settings](/news/2020-04-07-settings/) and the email clients that _you_ selected.

Let us know what you think about this [on Twitter](https://twitter.com/caniemail/)! And if you see something wrong or have any questions, you can [report an issue on GitHub](https://github.com/hteumeuleu/caniemail/issues).