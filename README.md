# MMM-React-Canvas
[ ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://choosealicense.com/licenses/mit)
[ ![Codeship Status for djey47/MMM-React-Canvas](https://app.codeship.com/projects/80f07310-e0dc-0136-0336-2acefbaa2182/status?branch=master)](https://app.codeship.com/projects/318624)

MichMich's MagicMirror2 module template for convenient development with ES6 language and React library.

# Presentation and features

## Highlights
### ES6 support for modern language facilities
### Full React support (16.6 as now)
### Type checking with flow
### SASS support (.scss files)

## Useful toolings
### Interactive dependency upgrades (thanks to *npm-check* module): `npm run upgrade-interactive`
### Code linting: ESLint, Stylelint: `npm run lint`
### Secure Git Hooks at pre-commit and pre-push stages (can be ignored with `--no-verify` switch, but will threaten dozens of kittens...)

# Install

1. Clone repository into `/modules/` inside your MagicMirror folder, with proper module name as directory (git clone to directory MMM-YOUR-MODULE)
2. Run `npm install` inside `/modules/MMM-YOUR-MODULE/` folder
3. Run `npm run init:mmm MMM-YOUR-MODULE`, it will automatically set up package.json for you
4. Run `npm run build`
5. Check that `MMM-YOUR-MODULE.js` and `node_helper.js` scripts have been created into current folder
6. Add the module to the MagicMirror config.
