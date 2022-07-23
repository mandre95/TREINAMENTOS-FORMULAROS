
 const express = require ("express")
 const app = express();
 const bodyParser = require('body-parser')
 const produto = require("./models/produtos")


 app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

 app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html")
    })
    
    app.get("/cadastroDeProduto", function(req, res){
    res.sendFile(__dirname + "/src/cadastroDeProduto.html")
    })

    app.post('/cadastroDeProduto', function(req, res){
        produto.create({
            nome: req.body.nome,
            valor: req.body.preco
        }).then(function(){
            res.send("Produto cadastrado com sucesso")
        }).catch(function(erro){
            res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
        })


        //res.send("produto:" + req.body.nome + "<br> preco: " + req.body.preco + "<br>")
    })
    
    app.listen(8080) 





 
 
 
 /* const { Sequelize, DataTypes } = require('sequelize');
 const sequelize = new Sequelize('sqlite::memory:');
 
 const User = sequelize.define('User', {
   // Model attributes are defined here
   firstName: {
     type: DataTypes.STRING,
     allowNull: false
   },
   lastName: {
     type: DataTypes.STRING
     // allowNull defaults to true
   }
 }, {
   // Other model options go here
 });
 
 // `sequelize.define` also returns the model
 console.log(User === sequelize.models.User); // true */
 
// ========================================================================
//                  CRIAR TABELA COM SEQUELIZE
//=========================================================================


/*

const e = require('express');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('formulario', 'root', 'onCq111h$2SZ', {
    host: 'localhost',
    dialect: 'mysql' 
  });

  sequelize.authenticate().then(function(){
    console.log('Conexão realizada com sucesso')
  }).catch(function(err){
    console.log('Erro ao realizar a conexão com BD: ' + err)
  })

const Produto = sequelize.define('produto', {
  // Model attributes are defined here
  nome: {
    type: Sequelize.STRING,
  },
  preco: {
    type: Sequelize.STRING 
  }
});

 Produto.sync({force: true})

Produto.create({
    nome: "energia",
    preco: 220
})

*/

//==========================================================


// conexao com BD Mysql

/*
const mysql = require('mysql')

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'onCq111h$2SZ',
    database : 'wm'
  });
/*

// ===============================================================

// FUNÇÃO PARA DETECTAR SE BANCO DE DADOS ESTÁ COM ERRO
/*

    connection.connect(function(err){
        if (err) console.error('Erro ao realizar a canexão com BD:'+ err.stack); return;
    });
/*

// ==============================================================

// DELETANDO DADOS DO BANCO COM NODE

/*

connection.query("DELETE FROM estados WHERE id = 242", function(err, result){
    if(!err){
        console.log("Usuario apagado com sucesso!");
    }else{
        console.log("Erro: o usuario não apagado com sucesso!")
    }
})

*/



// ==========================================================

// INSERINDO DADOS NO BANCO COM NODE

/*

connection.query("INSERT INTO estados(nome, sigla, regiao, populacao) VALUES ('florida', 'US', 'norte', 3.5 )",function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!');
    }else{
        console.log('erro ao cadastrar usuario');
    }
})
 
/*
 
// =========================================================
 

// CONECÇÃO COM NODE E BANCO 

/*   console.log('connected as id ' + connection.threadId);
});

connection.query('SELECT * FROM estados', function(err, rows, fields){
if(!err){
    console.log('Resultado:', rows)
}else{
    console.log('Erro ao realizar a consulta')
}
})

// ============================================================

// INTEGRANDO HTML COM NODE 

app.get("/", function(req, res){
res.sendFile(__dirname + "/src/index.html")
})

app.get("/cadastroDeProduto", function(req, res){
res.sendFile(__dirname + "/src/cadastroDeProduto.html")
})

app.listen(8080)*/