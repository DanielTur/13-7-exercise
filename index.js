var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function(err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(stats);
//     console.log(statMode.toString());
// });

// fs.readFile('./text.txt', 'utf-8', function(err, data) {
//     console.log('Data before writing!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nText after saving file!', function(err) {
//         if (err) throw err;
//         console.log('Saved!'.blue);
//         fs.readFile('./text.txt', 'utf-8', function(err, data) {
//             console.log('Text after saving'.blue)
//             console.log(data);
//         });
//     });
// });

fs.readdir('./', 'utf-8', function(err, files) {
	if (err) throw err;
	fs.writeFile('./directory.txt', files, function(err) {
        if (err) throw err;
        fs.readFile('./directory.txt', 'utf-8', function(err, data) {
            console.log('Directory listing'.blue)
            console.log(files);
        });
    });
});
