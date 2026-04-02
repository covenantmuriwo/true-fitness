const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Wishlist = require('../models/Wishlist');

// Get user's wishlist
router.get('/', authMiddleware, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ user: req.user.id });
    
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, items: [] });
      await wishlist.save();
    }

    res.json(wishlist.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add item to wishlist (with quantity merge)
router.post('/add', authMiddleware, async (req, res) => {
  try {
    const { productId, name, price, image, description } = req.body;

    let wishlist = await Wishlist.findOne({ user: req.user.id });

    if (!wishlist) {
      wishlist = new Wishlist({ user: req.user.id, items: [] });
    }

    const existingItem = wishlist.items.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      wishlist.items.push({
        productId,
        name,
        price,
        image,
        description,
        quantity: 1
      });
    }

    await wishlist.save();
    res.json(wishlist.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update quantity
router.put('/update/:productId', authMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });

    const item = wishlist.items.find(i => i.productId === Number(productId));
    if (!item) return res.status(404).json({ message: 'Item not found' });

    item.quantity = quantity;
    await wishlist.save();

    res.json(wishlist.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove single item
router.delete('/remove/:productId', authMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;

    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });

    wishlist.items = wishlist.items.filter(item => item.productId !== Number(productId));

    await wishlist.save();
    res.json(wishlist.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Clear entire wishlist
router.delete('/clear', authMiddleware, async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user.id });
    if (wishlist) {
      wishlist.items = [];
      await wishlist.save();
    }
    res.json([]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;