---
title:  "The new Outlook on macOS"
date: 2024-01-29
---

The new Outlook on macOS is here. Microsoft has been teasing new versions of Outlook under the codename “One” [for a few years](https://www.theverge.com/2021/1/4/22213300/microsoft-one-outlook-app-windows-10-mail-app-calendar-replacement). And while both Windows and macOS versions have been available in beta for quite some time[<a href="#post-cite-note-1">1</a>], the new version on macOS is now enabled by default. One of the biggest goal of Outlook “One” is to unify its support with Outlook.com (desktop webmail) and the Outlook mobile apps (on iOS and Android). While this is an excellent news for Outlook on Windows, finally moving away from Word as a rendering engine, this comes at a big cost for Outlook on macOS.

Out of the 272 HTML and CSS features tested on Can I email, the new Outlook on macOS <b>supports 162 features</b> (from previously 236). In our [Email Client Support Scoreboard](https://www.caniemail.com/scoreboard/), the new Outlook on macOS falls from the 3rd position to the <b>23rd position</b>.

The new Outlook loses support for a lot of advanced CSS properties, like `animation`, `@font-face`, and `linear-gradient()`. It also loses support for CSS pseudo-classes either completely (`:not()`, `:nth-child`, …) or partially (`:hover`, `:checked`, …), now working only on type selectors. (So `a:hover` works, but not `.link:hover`.) It also loses a lot of modern HTML support, like HTML5 semantics (`<header>`, `<footer>`, `<main>`, …) or responsive images with `<picture>` and `srcset`.

Here’s a full comparison of all the differences in support between the old Outlook on macOS versus the new Outlook on macOS.

{% assign features-by-custom-order = site.features | sort:'id' %}
<table class="clients-comparison-table">
	<thead>
		<tr>
			<td></td>
			<th scope="col">
				<span class="data-family-name">Outlook</span>
				<span class="data-platform-name">Old macOS client</span>
			</th>
			<th scope="col">
				<span class="data-family-name">Outlook</span>
				<span class="data-platform-name">New macOS client</span>
			</th>
		</tr>
	</thead>
	<tbody>
	{% for feature in features-by-custom-order %}
		{% assign outlook-platform-values = feature.stats.outlook.macos %}
		{% assign old-support-value = 'u' %}
		{% assign new-support-value = 'u' %}
		{% for version in outlook-platform-values %}
			{% assign version-key = version | first %}
			{% assign version-values = version | last | split: ' ' | first %}
			{% if forloop.last == false or forloop.first == true and forloop.last == true %}
			{% assign old-support-value = version-values %}
			{% endif %}
			{% if forloop.last == true %}
			{% assign new-support-value = version-values %}
			{% endif %}
		{% endfor %}
		{% if old-support-value != new-support-value %}
			{% case old-support-value %}
				{% when 'y' %}
					{% assign old-stat-class-name = 'supported' %}
				{% when 'n' %}
					{% assign old-stat-class-name = 'unsupported' %}
				{% when 'a' %}
					{% assign old-stat-class-name = 'mitigated' %}
				{% when 'u' %}
					{% assign old-stat-class-name = 'unknown' %}
				{% else %}
					{% assign old-stat-class-name = '' %}
			{% endcase %}
			{% case new-support-value %}
				{% when 'y' %}
					{% assign new-stat-class-name = 'supported' %}
				{% when 'n' %}
					{% assign new-stat-class-name = 'unsupported' %}
				{% when 'a' %}
					{% assign new-stat-class-name = 'mitigated' %}
				{% when 'u' %}
					{% assign new-stat-class-name = 'unknown' %}
				{% else %}
					{% assign new-stat-class-name = '' %}
			{% endcase %}
			<tr>
				<th scope="row"><a href="{{ feature.url }}">{{ feature.title | escape_once }}</a></th>
				<td class="{{ old-stat-class-name }}">{{ site.data.nicenames.support[old-stat-class-name] }}</td>
				<td class="{{ new-stat-class-name }}">{{ site.data.nicenames.support[new-stat-class-name] }}</td>
			</tr>
		{% endif %}
	{% endfor %}
	</tbody>
</table>

From now on, we will only test new features and updates in this new version of Outlook. Any test done in version 16.80 or above is one the new version.

Rémi  
@HTeuMeuLeu

<hr style="max-width:8rem; background:rgba(255, 255, 255, 0.2); border:none; height:2px;" />

<ul class="data-notes-list" style="margin-left:0;">
	<li id="post-cite-note-1" class="data-note">
		<span class="data-note-key">1</span>
		<p>
			The official <a href="https://techcommunity.microsoft.com/t5/outlook-blog/updates-on-the-new-outlook-for-windows/ba-p/3924365">Outlook Blog</a> has <a href="https://www.youtube.com/watch?v=Qt3TugLOD8g">a great video</a> on how they’re rolling out these updates.
		</p>
	</li>
</ul>
