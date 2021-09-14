
const express = require('express');
const appExpress = express();
var PizzaService = require('./PizzaService.js');
// const pg = require('pg');
const exphbs  = require('express-handlebars');
const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath:  './views',
    layoutsDir : './views/layouts'
});

var bodyParser = require('body-parser');

appExpress.engine('handlebars', exphbs({defaultLayout: 'main'}));
appExpress.set('view engine', 'handlebars');

appExpress.engine('handlebars', handlebarSetup);
appExpress.set('view engine', 'handlebars');

appExpress.engine('handlebars', exphbs({defaultLayout: 'main', layoutsDir:__dirname + '/views/layouts'}));
appExpress.set('view engine', 'handlebars');

// medleware

appExpress.use(express.static('public'));
// appExpress.use(cros());
// parse appExpresslication/x-www-form-urlencoded
appExpress.use(bodyParser.urlencoded({ extended: false }))
// parse appExpresslication/json
appExpress.use(bodyParser.json())


appExpress.use(express.urlencoded({extended: false}));
PizzaService = PizzaService()
// add your routes here...

appExpress.get('/',  (reqHtml , resHtml) => {
    resHtml.render('index', {
        Pizza: PizzaService.getPizaListAvailable(),
        ShoppingList: PizzaService.GetOrderPizzaSizeType(),
        TotalAmount: PizzaService.TotalAmount()
    })
});

appExpress.post('/pizzas/:sizeType', (reqHtml, resHtml) => {
    // console.log(reqHtml.params.sizeType)
    PizzaService.OrderPizzaSizeType(reqHtml.params.sizeType)
	resHtml.render('index', {
        Pizza: PizzaService.getPizaListAvailable(),
        ShoppingList: PizzaService.GetOrderPizzaSizeType(),
        TotalAmount: PizzaService.TotalAmount()
    })
})

appExpress.post('/addToCart', (reqHtml, resHtml) => {
	// console.log(PizzaService.OderList())
    resHtml.render('odered', {
        OderList: PizzaService.OderList()
    })
})



const PORT = process.env.PORT || 3017
appExpress.listen(PORT);