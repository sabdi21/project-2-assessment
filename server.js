const express = require('express');
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));
app.use(methodOverride('_method'));

// WRITE YOUR ROUTES HERE /////////////////////
app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', (req, res) => {
    console.log('STUB -- THE POST BUTTON WAS CLICKED')
})

app.get
// YOUR ROUTES ABOVE THIS COMMENT /////////////

app.listen(3000);
