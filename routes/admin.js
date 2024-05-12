const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(`
      <form action="/admin/add-product" method="post">
          <label for="product">Product Name:</label>
          <input type="text" id="product" name="product">
          <br>
          <label for="size">Product Size:</label>
          <input type="text" id="size" name="size">
          <br>
          <button type="submit">Submit</button>
      </form>
  `);
});

router.post('/add-product', (req, res, next) => {
  const productName = req.body.product;
  const productSize = req.body.size;
  res.send(productName + ' ' + productSize);
});

module.exports = router;