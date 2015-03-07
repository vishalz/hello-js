
// Include commander module
var program = require('commander');
var pepper;
var bbq;
program.version('1.0.0');
program.option('-p, --pepper' , 'Add peppers');
program.option('-b, --bbq-sauce', 'Add BBQ Sauce');
// node global objects http://nodejs.org/api/globals.html
program.parse(process.argv);
console.log(' args: %j', program.args);
