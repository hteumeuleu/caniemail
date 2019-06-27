# Can I email…

## Table of Contents
+ [About](#about)
+ [Links](#links)
+ [Getting Started](#getting-started)
+ [Usage](#usage)
+ [Contributing](contributing.md)

## About

caniemail.com provides email clients support tables for HTML and CSS features.

## Links

- https://caniemail.com/
- https://beta.caniemail.com/

## Getting started

Caniemail.com runs on [Jekyll](https://www.jekyllrb.com/) as a [GitHub Pages](https://pages.github.com/) site with a home made theme.

The site uses [Sass](https://sass-lang.com/) for CSS compilation.

1. Clone the repository. 

```
git clone https://www.github.com/hteumeuleu/caniemail.git
```

See [Cloning a repository](https://help.github.com/en/articles/cloning-a-repository) on GitHub documentation.

If you're not familiar with Git or GitHub, I strongly encourage you to try [GitHub's desktop app](https://desktop.github.com/) on macOS or Windows.

2. Install Jekyll.

```
gem install bundler jekyll
```

See [Jekyll Installation Guide](https://jekyllrb.com/docs/installation/).

3. Run Jekyll.

```
bundle exec jekyll serve
```

4. Go to [http://localhost:4000](http://localhost:4000).

## Usage

### Folders structure

Here is a quick overview of the project's folders structure:

* Data:

    - `_data`: Data files used throughout the site. This is mainly for settings and labels.
    - `_features`: Data for every HTML and CSS features support.
    - `_posts`: Data for the latest news.
    - `tests`: HTML tests files to test HTML and CSS features.

* Layout:

    - `_includes`: Files included in other theme files.
    - `_layouts`: The main layouts of the site.
    - `_sass`: Sass files. All files will be compiled into one in the `assets/css/` folder.
    - `assets`: CSS, images, and JavaScript files.
