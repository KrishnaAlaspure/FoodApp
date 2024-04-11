const express =require('express')
const cors=require('cors')

const app=express()
const Port=4000
const mongoDB=require('./db.js')
mongoDB()

app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(Port,()=>{
    console.log(`App is listening at Port ${Port},http://localhost:4000/`);
}
)