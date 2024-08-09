const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER" }
}, {freezeTableName: true}, {schema:'auto_parts'});

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {freezeTableName: true}, {schema:'auto_parts'});

const Part = sequelize.define('part', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    groups: { type: DataTypes.STRING, unique: false, allowNull: false },
    brands: { type: DataTypes.STRING, unique: false, allowNull: false },
    number_brand: { type: DataTypes.STRING, unique: false, allowNull: false },
    analogue: { type: DataTypes.STRING, unique: false, allowNull: false },
    name_parts: { type: DataTypes.STRING, unique: false, allowNull: false },
    price: { type: DataTypes.INTEGER, unique: false },
    diksona: { type: DataTypes.INTEGER, unique: false, },
    semaf: { type: DataTypes.INTEGER, unique: false },
    lado: { type: DataTypes.INTEGER, unique: false, },
    kalinina: { type: DataTypes.INTEGER, unique: false, },
    img: { type: DataTypes.STRING, unique: false, allowNull: false },
}, {freezeTableName: true}, {schema:'auto_parts'});

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
}, {freezeTableName: true}, {schema:'auto_parts'});

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
}, {freezeTableName: true}, {schema:'auto_parts'});

const BasketPart = sequelize.define('basket_part', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
}, {freezeTableName: true}, {schema:'auto_parts'});

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketPart)
BasketPart.belongsTo(Basket)

Category.hasOne(Brand)
Brand.belongsTo(Category)

Part.hasMany(BasketPart)
BasketPart.belongsTo(Part)

Brand.hasOne(Part)
Part.belongsTo(Brand)

Category.hasOne(Part)
Part.belongsTo(Category)


module.exports = {
    User,
    Basket,
    BasketPart,
    Category,
    Brand,
    Part
}