//requirements
const express  = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser= require('body-parser');
const ejs = require('ejs');

//start express
const app = express();

//config
app.use(methodOverride());
app.use(logger('dev'))
app.use(bodyParser.json())
app.use	(bodyParser.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//routes
app.get('/', (req,res) => {
	res.render('index')
})
const recipeR = require('./routes/recipes')
app.use('/recipes', recipeR);

//port config
const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Server active on ${port}`)
})