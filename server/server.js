const express = require("express")
const app = express()
const data = require('./home.json')

app.get("/home/api", (req, res) => {
   res.json(data)
})

app.listen(5001, () => {
   console.log("Server started on port 5001")
})