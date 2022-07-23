const Sequelize = require("sequelize")

const sequelize = new Sequelize('formulario', 'root', 'onCq111h$2SZ', {
    host: 'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}