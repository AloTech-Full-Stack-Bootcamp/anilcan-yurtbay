const express = require('express')
const app = express()
const port = 3000

app.use("/",(req,res,next)=>{
    console.log("Middleware 1 "+req.url);
    next();
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.get('/', (req, res) => {
    throw new Error('Bir hata oluştu');
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})