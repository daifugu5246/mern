const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000

app.use(cors())

const data = {users : ["John", "Ken", "Betty", "Mali"]}

app.get('/api', (req, res) => {
    res.json(data)
})

app.listen(port,()=>{
    console.log("The server listening on port "+port);
})