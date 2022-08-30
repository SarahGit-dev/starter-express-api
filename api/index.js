const express = require('express')
const app = express()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.all('/api', (req, res) => {
    console.log("Just got a request!")
    async function init() {
 
     await sleep(60000);
  
    }
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

module.exports = app;
