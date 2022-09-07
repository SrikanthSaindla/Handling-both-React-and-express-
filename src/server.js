const express=require('express')
var cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())
const Products=[
    {
        id:1,
        name:"Oneplus"
    },
    {
        id:2,
        name:"MI"
    },
    {
        id:3,
        name:"Realme"
    }
]

app.get("/",(req,res)=>{
res.send("hello srikanth")
})

app.get("/products",(req,res)=>{
    res.json(Products)
})
 

app.get('/products/:id',(req,res)=>{
  const Data=Products.filter((each)=>each.id==req.params.id)
   return res.json(Data)
})

app.post("/addproducts",(req,res)=>{
const {id,name}=req.body
console.log(id,name)
return res.send("data stored")
})
 

app.listen(8080,()=>console.log("server is runnig"))