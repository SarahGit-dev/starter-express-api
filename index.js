const express = require('express')
const http = require('https');
const app = express()
const  = process.env.PORT || 3001
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.get('/api', (req, res) => {
    console.log("Just got somthing")
    
    http.get("https://webhook.site/c59ac0e3-533c-472e-ba50-9f8373e86e5a")   
    
    res.send('Yoo!')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

