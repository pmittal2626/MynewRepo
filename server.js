const exp = require("express");
const app = exp();
const path = require("path");
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended : true}));




app.get('/home',  (req,res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));
})

// app.get('/login',(req, res) => {

// });

// app.post('/login',(req, res) => {

// });
app.get('/login',  (req,res) => {
    res.sendFile(path.join(__dirname, "login.html"));
})

app.get('/about_us',  (req,res) => {
    res.sendFile(path.join(__dirname, "about_us.html"));
})



app.post('/user_login',  (req,res) => {
    var username = req.body.username;
    var password = req.body.password;
    res.send('username ' + username + '  password' + password);
})


// app.get('/user_login',  (req,res) => {
    
//     //req.redirect("/admin_dasboard");

//     //res.send('username ' + username + '  password' + password);
// })
// // app.route('/login')
//     .get((req, res) => {
//         res.send('login request')
//     })
//     .post((req,res) =>{
//         res.send('GET rquest');
//     })
// app.get('/admin_dasboard',  (req,res) => {
//     var username = req.query.username;
//     var password = req.query.password;
    
//     res.send('{ username ' + username + '  password' + password + '}');
//     req.json(Object);
// })
 
app.get('/product/:id', (req,res) =>{
    var product_id = req.params.id;
    res.send("Product ID: " + product_id);
});



var port = process.env.PORT || 3000;

app.listen(port);