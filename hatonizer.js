var forever = require('forever'),
  child_process = require('child_process'),
  growl = require('growl'),
  fs = require('fs');

var clipboard = '',
  hato = '';

hato = fs.readFileSync('./cliphato');

setInterval(function(){
  child_process.exec('pbpaste',
    function(err, stdout, stderr) {
      stdout = stdout.replace(/\s/g, '');
      if(stdout != clipboard && stdout != hato) {
        setTimeout(function(){
          child_process.exec('cat cliphato | pbcopy')
          growl("クルッポー")
        }, 20 * 1000);
        clipboard = stdout;
      }
    });
}, 10);
