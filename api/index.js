const express = require('express')
const app = express()

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.all('/api', (req, res) => {
    console.log("Just got a request!")
    await sleep(60)
    res.send('Yo!')
})
app.listen(process.env.PORT || 3000)

module.exports = app;
