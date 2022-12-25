const express = require('express')
const app = express()

app.use( express.json() )
app.set('view engine', 'ejs');
app.use( express.urlencoded({ extended: true }) )

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen( process.env.PORT || 8080 , () => {
  console.log(`Example app listening on port ${port}`)
})
