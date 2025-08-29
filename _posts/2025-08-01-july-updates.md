---
title:  "July 2025 updates"
date: 2025-08-01
---

I’ve been working at a slow pace on updates for the past several months. But a few noteworthy updates made it. So here’s a recap of what’s been updated:

* Updates to [`:active`](/features/css-pseudo-class-active/) and [`:focus`](/features/css-pseudo-class-focus/) on Apple Mail 16 (thanks to @M-J-Robbins).
* Updates for support in Proton Mail for the [`<hr>`](/features/html-hr/) element and the [`text-decoration-line`](/features/css-text-decoration-line/) property (thanks to @nico3333fr). 
* Some behind the scenes spring cleaning, like adding the `accessiblity` tag to the `[dir]` feature (thanks to @husseinalhammad) and removing duplicate entries in certain properties (thanks to @germain-gg).

I’ve also recently been tipped that the french email clients of **SFR** and **La Poste** dropped support for `<style>` tags. I was told this was done in response to the [Kobold letters](https://lutrasecurity.com/en/articles/kobold-letters/) security report. The lack of `<style>` support also means as a result the loss of support for `@media` queries (and any other `at` rules like `@keyframes` or `@font-face`), pseudo classes (like `:hover`) and pseudo elements. With this update, [SFR (desktop webmail)](/clients/sfr/#desktop-webmail) went from 226 to 196 features supported, falling from the 5th place to the 8th place in our [scoreboard](/scoreboard/). [LaPoste.net (desktop webmail)](/clients/laposte/#desktop-webmail) went from 205 to 176 features supported, falling from the 8th place to the 16th place.

We’ve got a lot of content updates coming up thanks to [many contributions](https://github.com/hteumeuleu/caniemail/pulls) awaiting on GitHub.

Rémi  
@HTeuMeuLeu
