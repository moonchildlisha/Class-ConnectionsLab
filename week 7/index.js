let express = require('express');
let app = express();
//let bodyParser = require('body-parser');
//app.use(bodyParser.json());


//DB - 1. connect to the mongoDB
const { Database } = require("quickmongo");
const db = new Database("mongodb+srv://ly2485:<Cruealonely8654=>@cluster0.lsapeoa.mongodb.net/?retryWrites=true&w=majority");
db.on("ready",()=>{
    console.log("connected to the database");
});
db.connect();



let coffeeTracker = [];

app.use(express.json())
// app.get('/',(req,res)=>{
//     res.send('this is the main page');
// })

//2. add a route on the server, that is listening for a post request

app.post('/noCups', (req,res)=>{
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        coffee: req.body.number
    }

    //DB - 2. add values to the DB
    db.push("coffeeTrackerData", obj);

    //coffeeTracker.push(obj);
    //console.log(coffeeTracker);
    res.json({task:"success"});
})

app.use('/',express.static('public'));

app.listen(3000, ()=>{
    console.log('listening at localhost:3000');
})

//add route to get all coffee info
app.get('/getCups',(req,res)=>{

    //DB - 3. fetch from the DB
    db.get("coffeeTrackerData").then(coffeeData=>{
        let obj ={data:coffeeData};
        res.json(obj);
    })


})