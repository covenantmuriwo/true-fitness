const express = require('express');
const router = express.Router();
const Wishlist = require('../models/Wishlist');
const authMiddleware = require('../middleware/auth'); // we'll create this

// Get user's wishlist
router.get('/', authMiddleware, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) wishlist = { products: [] };
    res.json(wishlist.products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add to wishlist
router.post('/add', authMiddleware, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) wishlist = new Wishlist({ user: req.user.id, products: [] });

    // Avoid duplicates
    if (!wishlist.products.some(p => p.productId === req.body.productId)) {
      wishlist.products.push(req.body);
    }

    await wishlist.save();
    res.json(wishlist.products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove from wishlist
router.delete('/remove/:productId', authMiddleware, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (wishlist) {
      wishlist.products = wishlist.products.filter(p => p.productId !== req.params.productId);
      await wishlist.save();
    }
    res.json(wishlist ? wishlist.products : []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;