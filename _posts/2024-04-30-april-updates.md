---
title:  "April 2024 updates"
date: 2024-04-30
---

New this April: a big data update for [Orange apps on iOS](https://www.caniemail.com/clients/orange/#ios) and [Android](https://www.caniemail.com/clients/orange/#android).

This follows [Orange’s desktop webmail update](2021-03-17-orange-new-desktop-webmail) from 2021. The good news is it makes support more cohesive across all of Orange’s email clients. The bad news is it takes away a lot of features that were previously supported.

{% assign features-by-custom-order = site.features | sort:'id' %}
<table class="clients-comparison-table">
	<thead>
		<tr>
			<td></td>
			<th scope="col">
				<span class="data-family-name">Orange</span>
				<span class="data-platform-name">Old iOS app</span>
			</th>
			<th scope="col">
				<span class="data-family-name">Orange</span>
				<span class="data-platform-name">New 2024 iOS app</span>
			</th>
		</tr>
	</thead>
	<tbody>
	{% for feature in features-by-custom-order %}
		{% assign orange-platform-values = feature.stats.orange.ios %}
		{% assign old-support-value = 'u' %}
		{% assign new-support-value = 'u' %}
		{% for version in orange-platform-values %}
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
