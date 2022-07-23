const db = require('./bd')

const produtos = db.sequelize.define('produtos',{
    nome: {
        type: db.Sequelize.STRING
    },
    preco: {
        type: db.Sequelize.STRING
    }
})

// Criar tabela
//produtos.sync({force:true})

module.exports = produtos