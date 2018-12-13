/** init-mmm.js - convert template to your own MM2 module */

const EditJsonFile = require('edit-json-file');
const appRootPath = require('app-root-dir').get();

const [,,mmmNameArgument] = process.argv;

if (!mmmNameArgument) {
  console.error('ERROR: missing MM2 module name in argument (e.g MMM-YOUR_MODULE)');
  process.exit(1);
}

console.log(`Will rename template references to match your MMM project: ${mmmNameArgument}...`);

const packageFile = EditJsonFile(`${appRootPath}/package.json`, {
  autosave: true,
});
packageFile.set('name', mmmNameArgument);
packageFile.set('version', '1.0.0');
packageFile.set('description', 'MagicMirror2 module');
packageFile.unset('author');
packageFile.unset('bugs');
packageFile.unset('homepage');
packageFile.unset('license');
packageFile.unset('repository');

console.log('All done!');
