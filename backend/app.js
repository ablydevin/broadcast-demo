
const path = require('path');
const Ably = require("ably/promises");
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/', (res,req) => {
    //return the index.html page
})

app.get('/auth/token', async (req, res) => {

    //replace with environment variable
    const client = new Ably.Rest(process.env.ABLY_API_KEY);
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'client@example.com' });
    
    res.status(200).json(tokenRequestData);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// render client page