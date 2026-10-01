# تصميمي | Tasmeemy

مشروع جاهز للتشغيل على GitHub + Railway.

## التشغيل محلياً
```bash
npm install
npm start
```
ثم افتح:
- الموقع: `/`
- لوحة التحكم: `/admin`
- فحص الخادم: `/api/health`

## Railway
1. ارفع المشروع إلى GitHub.
2. أنشئ مشروع جديد في Railway واختر مستودع GitHub.
3. Railway سيقرأ `package.json` ويشغّل `npm start`.
4. لا تحتاج لتحديد PORT؛ السيرفر يستخدم `process.env.PORT` تلقائياً.

الإعدادات التي تحفظها من لوحة التحكم تُخزن في `data/settings.json` على الخادم.
