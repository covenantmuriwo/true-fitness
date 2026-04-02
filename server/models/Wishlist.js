const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: Number,           // or String depending on your product id
        required: true
      },
      name: String,
      price: Number,
      image: String,
      description: String,
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }
  ]
}, { timestamps: true });

// Method to add or increase quantity
wishlistSchema.methods.addItem = function(product) {
  const existingItem = this.items.find(item => item.productId === product.productId);
  
  if (existingItem) {
    existingItem.quantity += 1;   // Increase quantity
  } else {
    this.items.push({
      ...product,
      quantity: 1
    });
  }
  
  return this;
};

module.exports = mongoose.model('Wishlist', wishlistSchema);