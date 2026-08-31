const express=require('express')
const cors=require('cors');
require('dotenv').config();
const contactRoutes = require("./routes/contactRoutes");



const app=express();

app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
    res.json({msg:"porfolio backend is running!"})

})

app.use("/api", contactRoutes);

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})