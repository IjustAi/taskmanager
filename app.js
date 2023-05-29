const express= require('express');
const app =express();
const tasks =require('./routes/task');

app.use(express.json())
app.use('api/v1/taskes',tasks);

const port =3000;
app.listen(port,console.log('listening '));