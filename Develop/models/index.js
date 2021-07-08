// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
Product.belongsTo(User, {
  foreignKey: 'category_id',
});
Product.hasMany(Tag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});
Tag.belongsTo(Product, {
  foreignKey: 'product_id',
});

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
