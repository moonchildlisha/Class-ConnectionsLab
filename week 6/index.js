let express = require('express');
let app = express();

/*
let signs = {
    "data": [
        {
            name: "aries",
            info: "March 21 - April 19"
        },
        {
            name: "taurus",
            info: "April 20 - May 20"
        },
        {
            name: "gemini",
            info: "May 21 - June 20"
        }
    ]
}
*/

app.use('/',express.static('public'));

app.use('/about',(req,res)=>{
    res.send("this is the page that will contain info about the project");
})

app.get('/signs', (request,response) => {
    response.json(signs);
})

/*
app.get('/signs/:sign', (req,res)=>{
    console.log(req.params);
    let user_sign = req.params.sign;
    let user_obj;
    for(let i = 0; i<signs.data.length; i++){
        if(user_sign == signs.data[i].name){
            user_obj = signs.data[i];
        }
    }
    console.log(user_obj);
    if(user_obj){
        res.json(user_obj);
    }else{
        res.json({status:"info not present"})
    }
})
*/

app.listen(3000, () => {
    console.log("listening at localhost:3000")
})