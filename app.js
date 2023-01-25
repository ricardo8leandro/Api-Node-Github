const express = require('express');
const cors = require('cors');

const app = express();
const PORT=8080;

const middlewares = require('./middlewares');
const routes = require('./routes');


app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);
app.use('/api_github', routes);

app.get('/', (req,res)=>{
    res.send('This is a API for consuming data of the Github!')
})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))