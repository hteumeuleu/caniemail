---
title:  "April 2025 updates"
date: 2025-04-24
---

I’ve started pushing some more updates to the site, starting with merging <abbr title="Pull Requests">PRs</abbr> and [sorting issues](https://github.com/hteumeuleu/caniemail/issues?q=is%3Aissue%20state%3Aclosed%20sort%3Aupdated-desc).

A few random nonetheless interesting updates:

* Web.de desktop webmail no longer supports `<style>` tags. (See #446.)
* Samsung Email supports `absolute` positioning… but not with values in percent. (See #444.)
* Apple Mail and Gmail on iOS no longer support `orientation: landscape` media query. (See #415.)
* Gmail on Android no longer supports CSS gradients inline, but only when using `background-image` or both `background` and `background-image` at the same time. (So use `background:linear-gradient(…)` and not `background-image:linear-gradient(…)` nor `background:linear-gradient(…); background-image:linear-gradient(…);`. Or use non inline styles for this.) (See #395.)

Rémi  
@HTeuMeuLeu
