const express = require("express");

const app = express();

app.get('/', (res, req, next)=>{
    res.json("Simple get API");
})

app.listen(5000, () => {
  console.log("RUNNING ON PORT 5000");
});