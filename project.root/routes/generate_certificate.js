const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/generate-certificate', (req, res) => {
  const username = req.query.username;

  if (!username) {
    return res.status(400).send("Username not provided");
  }

  const filePath = path.join(__dirname, '../certificates', `${username}.pdf`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).send("Certificate not found for user: " + username);
    }
    res.download(filePath);
  });
});

module.exports = router;
