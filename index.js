// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5002

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/cloud'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


// var connect = require('connect');
// var serveStatic = require('serve-static');
// connect().use(serveStatic(__dirname)).listen(8085, function(){
//     console.log('Server running on 8085...');
// });


var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(process.env.PORT || 5000);