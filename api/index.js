const express = require('express')
const http = require('https');
const app = express()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.all('/api', (req, res) => {
    console.log("Just got somthing")
    for (let i=0;i<=1000;i++){
        http.get("https://webhook.site/c59ac0e3-533c-472e-ba50-9f8373e86e5a",(res)=>{
          cosole.log("loop number"+i)
        })
        res.send('Yoo!')
    }
})
app.listen(process.env.PORT || 3000)

module.exports = app;
