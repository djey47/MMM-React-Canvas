# MMM-React-Canvas
[ ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://choosealicense.com/licenses/mit)
[ ![Codeship Status for djey47/MMM-React-Canvas](https://app.codeship.com/projects/80f07310-e0dc-0136-0336-2acefbaa2182/status?branch=master)](https://app.codeship.com/projects/318624)

MichMich's MagicMirror2 module template for convenient development with ES6 language and React library.

# Presentation and features

![ReactDevTools-Sample Component](https://github.com/djey47/MMM-React-Canvas/raw/master/docs/ReactDevTools-Sample%20Component.png)

## Highlights

### ES6 support
for modern language facilities

### Full React support
(16.6 as now)

### Type checking
with flow runtime

### SASS support
(.scss files)

## Useful toolings

### Module / helper builds, in development and production
handled by Webpack: `npm run build` or `npm run build-prod`

### Interactive dependency upgrades
thanks to *npm-check* module: `npm run upgrade-interactive`

### Code linting
provides ESLint, Stylelint checks: `npm run lint`

#### Stylelint checks for BEM syntax

### Unit tests
with jest runtime: `npm test`, track source changes `npm run jest:watch`

### Secure Git Hooks
at pre-commit and pre-push stages (can be ignored with `--no-verify` switch, but will threaten dozens of kittens...)

# Install

1. Clone repository into `/modules/` inside your MagicMirror folder, with proper module name as directory (git clone to directory MMM-YOUR-MODULE)
2. Run `npm install` inside `/modules/MMM-YOUR-MODULE/` folder
3. Run `npm run init:mmm MMM-YOUR-MODULE`, it will automatically set up package.json for you
4. Update `MODULE_NAME` value in `src/client/module.js` file to use MMM-YOUR-MODULE
5. Run `npm run build`
6. Check that `MMM-YOUR-MODULE.js`, `styles.css` and `node_helper.js` files have been created into current folder
7. Add the module to the MagicMirror config.
