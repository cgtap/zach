## A lightweight SASS library to assist in rapid development

The library contains reusable mixins, functions and placeholders. It also contains a lightweight semantic grid framework.

# Installation

1. Installation Pre-Requisites
   - MAC & Linux
      - Install NodeJS
         - (Download)[http://nodejs.org/download/]
      - Install NPM
         - Terminal: ```curl https://npmjs.org/install.sh | sh```
      - Instal NVM
         - Terminal: ```curl https://raw.github.com/creationix/nvm/master/install.sh | sh```
      - Install Bower
         - Terminal: ```npm install -g bower```
   - Windows
      - Install NodeJS
         - (Download)[http://nodejs.org/download/]
      - Install Bower
         - Bash: ```npm install -g bower```

2. Change to the project directory
   ```bash
   cd path/to/your/project
   ```

3. Bower Setup
   - If you already have a bower.json file, then you can add the following:
      - ```"anthm-sass": "git@bitbucket.org:andCulture/anthm-sass.git#1.0.0"```
   - If you have not created a bower.json file, then do the following:
      - Terminal/Bash: ```bower init```
      - Run through all of the questions
      - Add the following to the **dependencies** section of the json file
         - ```"anthm-sass": "git@bitbucket.org:andCulture/anthm-sass.git#1.0.0"```

4. Completion
   - Now that you have bower setup, you can do the following:
      - Terminal/Bash: ```bower install```


# Using Anthm-Sass

Import the anthm partial into your SASS file. This should have been placed into your bower vendor directory
or into the default bower_components directory. Make sure that you have this at the top of your SASS file.


```scss
@import "anthm-sass/anthm";
```

You can override the default settings for Anthm by creating a ```settings``` or ```config``` partial and overriding
the variable names. You can find all of the items to override in the ```anth-sass/base/_settings.scss``` file.

```scss
@import "base/config";
```

Example Settings:

```scss
$modular-scale-ratios: (
  golden:             1.618,
  minor-second:       1.067,
  major-second:       1.125,
  minor-third:        1.2,
  major-third:        1.25,
  perfect-fourth:     1.333,
  augmented-fourth:   1.414,
  perfect-fifth:      1.5,
  minor-sixth:        1.6,
  major-sixth:        1.667,
  minor-seventh:      1.778,
  major-seventh:      1.875,
  octave:             2,
  major-tenth:        2.5,
  major-eleventh:     2.667,
  major-twelfth:      3,
  double-octave:      4
) !default;

$modular-scale: (
  ratio: map-get($modular-scale-ratios, perfect-fourth),
  base:  em(16)
) !default;

$grid-settings: (
  columns:      12,
  column-width: modular-scale(3, 1em, map-get($modular-scale-ratios, golden)),
  gutter:       modular-scale(1, 1em, map-get($modular-scale-ratios, golden)),
  width:        em(1200)
) !default;

$breakpoints: (
  mobile-only:  em(480),
  phablet:      em(480),
  tablet:       em(768),
  laptop:       em(940),
  desktop:      map-get($grid-settings, width)
) !default;
```

One of the strongest attributes of the Anthm-Sass is the ability to create a semantic grid structure utilizing the ```$grid-settings```
variable that is declared in the settings.

We start by establishing a grid container, which could be your outmost element which defines the width of the container.

```scss
article {
  @include grid-container();
}
```

Once we have the container established, we can define the columns.

```scss
article {
  @include grid-container();

  aside {
    @include grid-column(4);
  }
  section {
    @include grid-column(8);
  }
}
```

Markup

```html
<article>
  <aside></aside>
  <section></section>
</article>
```

You should now see that you have an article that is centered on the screen with a width of 1200px (by default) and two columns.
The first column is 1/3 of the container and the second column is 2/3 with a small gutter between the two.

If you **do not** want to include the gutter, you can do the following:

```scss
@include grid-column(4, 12, collapse);
```

The second parameter is the total number of columns. The third column with collapse, will eliminate the gutter and apply it to the width
of the column.

If you are making a grid where there are equal columns within the container, you can use the following:

```scss
article {
  @include grid-equal-column-container();
}
```

Markup

```html
<article>
  <section></section>
  <section></section>
  <section></section>
</article>
```

This mixin will establish equal columns for the immediate element within the container. In the example above each section element
will be 1/3 of the container width with no margin or gutter in between each element.