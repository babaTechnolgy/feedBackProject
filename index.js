const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send({hi:"shadab"});  
});

const PORT = process.env.PORT || 9001 ;
app.listen(PORT , ()=> console.log(`Listning  to port ${PORT}`));
