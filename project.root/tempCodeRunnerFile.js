const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('C:/Users/asus vivobook i5/Desktop/C Language/poftfolio html/college/project.root/.env').config();

const authRoutes = require('C:/Users/asus vivobook i5/Desktop/C Language/poftfolio html/college/project.root/routes/auth.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log('DB error:', err));

app.use();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
