const express = require("express") 
const app = express(); 

app.listen(3000) 

const db = require("./database/models")

//con esta constante db puedo operar con los modelos 
app.get("/", (req,res) => { 

    db.Movie.findAll()
    //si la busqueda es exitosa, el then atrapa la informacion y la envia a la vista
    .then(result => res.send(result))

    //si existiera algun error lo captura el catch 
    .catch(err => res.send(err))
    
    //return res.send("Hola")  seguir en la clase de sequelize desde  1:30:40
})


