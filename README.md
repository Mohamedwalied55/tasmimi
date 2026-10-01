# تصميمي Pro
موقع Portfolio/CMS عربي قابل للتعديل بالكامل.

## التشغيل
1. ثبّت Node.js 18+.
2. افتح المجلد.
3. `npm install`
4. `npm start`
5. افتح `http://localhost:3000`
6. لوحة الإدارة: `http://localhost:3000/admin`

الدخول الافتراضي:
- username: admin
- password: change-me-now

غيّر كلمة المرور من لوحة الإدارة قبل النشر.

## النشر
يمكن تشغيله على Railway/Render أو أي Node hosting.
يفضل ضبط:
- SESSION_SECRET = قيمة عشوائية طويلة
- PORT يحددها الاستضافة تلقائيا.

## التخزين
هذه النسخة تستخدم data.json وpublic/uploads. على استضافة لا توفر Persistent Disk، الصور والبيانات قد تضيع بعد إعادة النشر/إعادة التشغيل؛ للإنتاج الأفضل نقل البيانات والصور إلى قاعدة بيانات + Object Storage.
