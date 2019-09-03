const express = require('express');
const methodOverride = require('method-override');
const db = require('./models');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('static'));
app.use(methodOverride('_method'));

// WRITE YOUR ROUTES HERE /////////////////////

app.get('/', (req, res) => {
    db.widget.findAll()
    
    .then((allWidgets) => {
        res.render('index', {
            allWidgets
        });
    });
})
app.post('/', (req, res) => {
    console.log('results: ', req.body)
    let newWidget = {
        description: req.body.description,
        quantity: req.body.quantity
    }
    db.widget.create(newWidget)
    .then((widget) => {
        res.redirect('/');
    });
   
    // res.redirect('index');
})

app.delete('/:idx', (req, res) => {
    console.log('IS THIS ROUTE EVEN WORKING!!!! ')
    console.log('this was deleted: ', req.params)
    db.widget.destroy({
        where: {
            id: req.params.idx
        }
    }).then((widget) => {
        res.redirect('/');
    });

})
// YOUR ROUTES ABOVE THIS COMMENT /////////////

app.listen(process.env.PORT || 3000)
