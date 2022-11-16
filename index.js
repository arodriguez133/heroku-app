const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 9000
const path = require("path");



app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

//underscore is like a dead link> since i'm not using the request object, i'm going to throw in an underscore
app.use("/api/", (_, res) => {
    res.json({ data: "I love Kourtney!" })
})

app.listen(port, () => {
    console.log(`Hello from the server: ${port}`);
});

console.log(process.env.USERNAME);
console.log(process.env.PORT);