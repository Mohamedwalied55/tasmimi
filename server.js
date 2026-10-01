const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// تقديم الملفات الثابتة
app.use(express.static(path.join(__dirname)));

// مسار الصفحة الرئيسية
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// مسار لوحة التحكم
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
