const exp = require("express");
const app = exp();
 
app.get('/home',  (req,res) => {
    res.send('GET rquest');
})




var port = process.env.PORT || 3000;

app.listen(port);