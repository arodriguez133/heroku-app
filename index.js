const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 9000

app.use(cors());
app.use(express.json());

//underscore is like a dead link> since i'm not using the request object, i'm going to throw in an underscore
app.use("/api/", (_, res) => {
    res.json({ data: "API is accounted for" })
})

app.listen(port, () => {
    console.log(`Hello from the server: ${port}`);
});

console.log(process.env.USERNAME);
console.log(process.env.PORT);