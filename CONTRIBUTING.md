# Contributing Guide

## Add a new feature

1. **Create a new Markdown file** inside the `_features` folder. You can duplicate the existing `_template.md` file for an existing model. 

If your test concerns an HTML element or attribute, use a `html-` prefix. If it concerns a CSS feature, use a `css-` prefix.

```
// Do's
_features/html-background.md
_features/css-background.md

// Don'ts
_features/background.md
```

2. **Create a test file** inside the `tests` folder. Name your file with the same name you used for the Markdown data file.

```
// Example
tests/html-background.html
```

A test should include variations of the feature tested to get the best possible understanding of the actual support. For example, if you test a CSS property, try to include a test in both an `inline` style and an embedded `<style>` element, and try different values for the property as well.

A test should be easy to read. Use `red` and `green` background colors to easily get a glimpse of support or non support.
Code of how to creat Test file:-
Live Demo
<!DOCTYPE html>
<html>

   <head>
      <title>Using Image in Webpage</title>
   </head>
	
   <body>
      <p>Simple Image Insert</p>
      <img src = "/html/images/test.png" alt = "Test Image" />
   </body>
	
</html>

3. **Test**. Please consider the two followings methods of testing:

* Use actual email clients and devices. This is the best way to test, especially for webmails where it's easy to inspect the code and see what's going on.
* Use an online screenshots service (like [Litmus](https://www.litmus.com), [Email on Acid](https://www.emailonacid.com) or [Testi.at](https://www.testi.at)).

4. **Fill in the results** inside the Markdown file created at step 1. Here's an overview of the different fields inside that file:

* `title`: The name of the feature tested. Make it short and concise. Use `element`, `attribute` or `property` at the end of the title. 

```
// Do's
<section> element
background attribute
CSS background property

// Don'ts
HTML section tag
HTML background
```

* `description`: A sensible description of the feature. This can contain the actual name of code feature tested. (For example, `font-size`.)
* `category`: `html` or `css`, in lowercase.
* `last_test_date`: The date of the last update in that file. This is useful to sort features by last update on the homepage of the site.
* `test_url`: The relative URL to the test file created in the `tests` folder. (For example, `/tests/html-role.html`.)
* `test_url_results`: A full URL to tests results on an online screenshots service. Make sure this link is accessible for anyone without an account. (For example, `https://app.emailonacid.com/app/acidtest/ABCDEF/list`.)
* `stats`: The actual support data. Stats are organized on three levels deep:

    * Family: the general brand or naming of the email client. (For example: `outlook`, `gmail`, `apple-mail`.) This is used as a key for sorting and display purposes, so make sure to use the matching key you can find in the `_data/nicenames.yml` file.
    
        * Platform: the platform of the email client. (For example: `desktop-webmail`, `windows`, `macos`). Once again, make sure to use the matching key name you can find in the `_data/nicenames.yml` file. For better readability, exceptions can be added in naming here. For example, the mobile webmail of the Outlook family is specifically named Outlook.com, so we use a `outlook-com` platform key.

            * Version: the version number or name of the email client. If the version is unknown (for example for webmails or mobile applications), a date in the format of `YYYY-MM` is prefered.

            Each version has then a value indicating the support level (following [Can I use's own values](https://github.com/Fyrd/caniuse/blob/master/CONTRIBUTING.md)):

                * `y` ("*yes*"): Supported. This should result in a green cell.
                * `n` ("*no*"): Not supported. This should result in a red cell.
                * `a` ("*almost*"): Mitigated support. This value should be used if the support depends on specific conditions or hacks.  This should result in an orange cell.
                * `u` ("*untested*"): Not tested. This should result in a grey cell.

            Notes references can be added on each cell by using a `#` symbol preceeded by a space and the corresponding key value of the note (see `notes_by_num` below).

    ```
    // Example
    "2019-06":"a #1 #2"
    ```

    Versions will be displayed by the order they're in. Make sure to go from the oldest version to the most recent version. 

* `notes`: Global note regarding all email clients for this feature.
* `notes_by_num`: Specific notes for individual email clients. Each note consists of a key string and a value string. Multiple notes can be added by using a comma separator after each value. The key should match the notes added in the `stats` values. It's prefered to add numbers for the keys.

```
// Example
"notes_by_num": {
    "1": "X value is not supported.",
    "2": "Y value is not supported."
}
```
