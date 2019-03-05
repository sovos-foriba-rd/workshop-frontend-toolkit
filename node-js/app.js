const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get("/data", (req, res) => {
    let data = ["e-Mutabakat", "e-Fatura", "e-Arşiv Fatura", "e-İrsaliye", "e-Defter", "e-Bilet", "e-Yedekleme", "e-SMM", "e-MM"];
    res.send(data);
})

const server = app.listen(3000)