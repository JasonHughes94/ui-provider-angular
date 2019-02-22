const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ui-provider-stats/runtime.js',
    './dist/ui-provider-stats/polyfills.js',
    './dist/ui-provider-stats/scripts.js',
    './dist/ui-provider-stats/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, './elements/ui-provider-stats.js');
})();
