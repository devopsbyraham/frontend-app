const express = require('express')
const app = express()

app.get('/', (req,res)=>{
 res.send("Hello from Jenkins-ArgoCD Demo-2")
})

app.listen(3000)
