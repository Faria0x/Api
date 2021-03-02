const express = require("express")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())



var db = {

    games: [

        {
            id: 23,
            title: "COD MW",
            year:2019,
            price:60
        },
        {
            id:65,
            title: "BF4",
            year:2014,
            price:35
        },
        {
            id: 2,
            title: "NFS",
            year:2015,
            price:20
        },
    ]



}

app.get("/games",(req,res)=> {
    res.statusCode = 200
    res.json(db.games)
})

app.get("/game/:id",(req,res)=> {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else {
        let id = parseInt(req.params.id)
        let game=  db.games.find(g=> g.id == id)
        if(game != undefined){
            res.sendStatus = 200
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
})

app.post("/game",(req,res)=> {
    let {title, price, year} = req.body
    db.games.push({
        id: 2324,
        title,
        price,
        year
    })
    res.sendStatus(200)
})

app.delete("/game/:id",(req,res)=> {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else {
        let id = parseInt(req.params.id)
        let game=  db.games.findIndex(g=> g.id == id)

        if(index == -1){
            res.statusCode(404)
        }else{
            db.games.splice(index,1)
            res.sendStatus(200)
        }
       
    }
})



app.listen(3000,()=> {
    console.log("API running")
})