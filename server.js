// Import npm packages
const express = require("express")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 8080

// Allowing cross origin

const cors = require("cors")

app.use(cors())

// Accessing our routes

const routes = require("./api")
app.use('/', routes);

// Production Mode
if (process.env.NODE_ENV === "production") {
    console.log(process.env.NODE_ENV)
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build",  "index.html"))
    })
}

// Tell the user which port app is running on when successfully up and running.
app.listen(PORT, console.log(`Server is starting at ${PORT}`))