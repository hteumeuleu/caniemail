Can I Email: A Proposal
---

# Abstract

# Pre-existing ressources
[Caniuse.com](https://www.caniuse.com) is a widely popular site for web developers providing "_Browser support tables for modern web technologies_". The site is great for web developers to quickly know whether a web feature has good support or not. But it also helps providing a good picture of disparities between browsers, and how this evolves through time with new browsers versions. The website turned [10 years old](https://twitter.com/Fyrd/status/1080495727233646592) this year.

Similar ressources also exists in emails. The most popular is [Campaign Monitor's CSS Guide](https://www.campaignmonitor.com/css/). The guide has been very popular among email developers. But while it's a precious and valuable ressource, I see a few problems.

1. It's *not often updated*. Last update dates from november 2017. Previously, the guide didn't receive any update for as long as three years (between may 2014 and september 2017). With time, this diminishes the faith you can have in the values presented.
2. There is *no way to contribute*, whether it's to update an information, add new properties, new email clients or contest presented informations.
3. *Testing methods are opaque*. There's no way to reproduce a test in the same same conditions of the page to check if something has evolved.
4. The guide provides informations *only for CSS properties*. But questions regarding HTML or images format support are frequent for email developers.
5. This might fall into a personal preference, but I think the updated layout in 2017 *lacks clarity*. Email clients are listed through three columns by alphabetical orders. This results in older or less popular email clients always listed first (_AOL Desktop_, _Android 4.4.2 Mail_, _AOL Alto App_, …). The three categories used (_Desktop_, _Mobile_, _Webmail_) are also disputable in my opinion as webmails can fall in both other categories.

Other guides exist. FreshInbox provides a [Kinetic Email CSS Support](http://freshinbox.com/resources/css.php) page with a nicely presented table. But the four first points listed above also apply.

Some email clients provide official information regarding HTML and CSS support. For example, Gmail provides a [Supported CSS Properties & Media Queries](https://developers.google.com/gmail/design/reference/supported_css) page. Microsoft also has a [HTML and CSS Rendering Capabilities in Outlook 2007](https://docs.microsoft.com/en-us/previous-versions/office/developer/office-2007/aa338201(v=office.12)) page. But both are really incomplete and some of the informations are wrong. For example, Google states that Gmail supports the `columns` properties in CSS, which appears to be false through manual testing.

# History of the project

I first became aware of the project after [watching a conference](https://www.youtube.com/watch?v=xhUfiOSOk3g) by @M-J-Robbins where he announced his team at Rebel (then RebelMail) was working on a site similar to `caniuse.com` called `caniemail.com`. [A few repos and notes were created on Github](https://github.com/caniemail). And Rebel made a totally killer logo for the project.

![caniemail logo by Rebel](https://avatars0.githubusercontent.com/u/11875778?s=200&v=4)

In 2017, Rebel didn't renew the domain `caniemail.com`. So I bought it. I first offered to transfer it back to Rebel by contacting Mark on Slack, but it didn't happen. So I started working on the project, mostly thinking and planning how things could or should be. I made [an HTML mockup](https://www.caniemail.com/prototype-2017/) that I only shared about a year later on Slack during a casual conversation.

I always thought that I could free some time to work more on this. Or that I could use time at my company to work on this. But this never happened. So this is why I'm opening this up today in hope we can get something done.

# The proposal
Caniemail.com should address the problems mentionned above. Thus the project should be:

1. *Often updated*. That is, as often as email clients evolve. And for this, I mainly count on the second point.
2. *Opened to contributions*. This includes any aspects of the website. But especially any data published on it. Contributors must be able to update existing data and add new data. Github seems like a good platform to on for this, with Pull Requests, issues, and other easy ways to contribute.
3. *Transparent on testing*. Any data published should be so with its confirming test. This makes it easy for anyone to rerun the test at a later time, or to use the same test in new email clients.
4. *Clear*. Sure, every site aims this. But this means the user interface of the website should provide useful informations at a glance, as well as providing full details if needed.

Here's a quick UI prototype I had in mind. This can be found on the branch `prototype` or online at [https://www.caniemail.com/prototype/](https://www.caniemail.com/prototype/).

[![](https://i.imgur.com/F5S7t0D.png)](https://www.caniemail.com/prototype/)

The main idea is to regroup email clients through their "family" names, and show only the few most popular first. (I think Outlook, Gmail and Apple Mail are obvious candidates. But maybe Yahoo should be featured there.)

In the following days, I will start issues to start the conversation on the following subjects:

* Data structure
* User interface
* Encouraging participation
* Testing