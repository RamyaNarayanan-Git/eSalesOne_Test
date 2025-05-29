const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("test");
})

const port = 3000;

app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
} )