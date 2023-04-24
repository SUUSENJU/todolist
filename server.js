// const express = require('express')
// const { resolve } = require('path')
// const app = express()
// const path = require('path');

// app.use('/',
//   express.static(
//     resolve(
//       __dirname,
//       './build'
//     )
//   )
// )

// app
//   .listen(process.env.PORT || 3000, (err) => {
//     if (err) { return console.log(err) }

//     console.log('Tudo funcionando certinho')
//   })


//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
const express = require('express')
const path = require('path')

const PORT = process.env.PORT || 5001

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))