const mongoose = require('mongoose');

require('dotenv').config(); // تحميل متغيرات البيئة من ملف .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT); // الاتصال بقاعدة البيانات بدون الخيارات deprecated
        console.log('Connected to MongoDB'); // طباعة نجاح الاتصال
    } catch (err) {
        console.error('Failed to connect to MongoDB', err.message); // طباعة الخطأ إذا فشل الاتصال
        process.exit(1); // الخروج من العملية مع كود خطأ
    }
};


module.exports = connectDB;



