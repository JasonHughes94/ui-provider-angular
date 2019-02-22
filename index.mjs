import express from 'express'
import path from 'path';

let app = new express();
let port = 5005;

app.set('views', "views")
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('stats'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))