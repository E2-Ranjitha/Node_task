const express = require('express');
const app = express();

const router = require('./router/route');
app.use(express.json());
app.use(router);

app.listen(8080,()=>{
    console.log("Server listening at port : 8080");
})