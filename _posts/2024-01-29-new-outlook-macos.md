---
title:  "The new Outlook on macOS"
date: 2024-01-29
---

The new Outlook on macOS is here. Microsoft has been teasing new versions of Outlook under the codename “One” for a few years now. And while both Windows and macOS versions have been available in beta for quite some time now, the new version on macOS has been enabled by default.

Out of the 272 HTML and CSS features tested, the new Outlook on macOS <b>supports 162 features</b> (from previously 236). In our [Email Client Support Scoreboard](https://www.caniemail.com/scoreboard/), the new Outlook on macOS is falling from the 3rd position to the <b>23rd position</b>.

The new Outlook loses support for a lot of advanced CSS properties, like `animation`, `@font-face`, and `linear-gradient()`. It also loses support for CSS pseudo-classes either completely (`:not()`, `:nth-child`, …) or partially (`:hover`, `:checked`, …), now working only on type selectors. (So `a:hover` works but not `.link:hover`.) It also loses a lot of modern HTML support, like HTML5 semantics (`<header>`, `<footer>`, `<main>`, …), responsive images with `<picture>` and `srcset`.

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
			{% if forloop.first == true %}
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
