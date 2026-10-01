const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname, PUBLIC = path.join(ROOT,'public'), DATA = path.join(ROOT,'data');
const SETTINGS_FILE=path.join(DATA,'settings.json'), ORDERS_FILE=path.join(DATA,'orders.json');
fs.mkdirSync(DATA,{recursive:true});
const defaults={site:{name:'تصميمي',phone:'',whatsapp:'',email:'',address:'',instagram:'',facebook:'',contactText:'لو عندك أي استفسار أو عاوز تبدأ طلبك، تواصل معنا مباشرة.',announcement:'🎓 عرض خاص للطلاب: احصل على تنسيق أول 5 صفحات مجاناً مع أي باقة!',heroTitle:'مذكراتك الدراسية.. بكل إتقان ولطافة تفتح النفس',heroDesc:'نحوّل نصوصك ومذكراتك الجافة إلى تحف فنية مريحة للعين! تنسيق احترافي، جداول مقارنة، هوامش واسعة للملاحظات، أغلفة جذابة، وأيقونات توضيحية تجعل الاستذكار رحلة ممتعة وسهلة.',heroScript:'⚡ خصم 20% للدفعة الجديدة',heroCta:'نسّق ملخصك الآن'},theme:{bg:'#fdfbf9',surface:'#f7efe9',text:'#2b1a07',border:'#171717',primary:'#ff6f1e',secondary:'#d9531e',green:'#22c55e',blue:'#3b82f6',pink:'#ff66cf',white:'#ffffff',muted:'#bebcbb',headingFont:'Alexandria',bodyFont:'Tajawal',scriptFont:'Aref Ruqaa',displaySize:'3.5rem',headingSize:'2.2rem',bodySize:'1rem',buttonSize:'1rem'},pricing:{p1:{title:'الباقة الأساسية',price:'12 ج.م / صفحة',time:'خلال 24 ساعة'},p2:{title:'الباقة الاحترافية',price:'18 ج.م / صفحة',time:'خلال 12 ساعة'},p3:{title:'باقة الكتب والكورسات',price:'25 ج.م / صفحة',time:'حسب حجم المشروع'}},images:{logo:'',hero:'',showcase1:'',showcase2:'',showcase3:''},faq:[{q:'كم يستغرق وقت تنسيق المذكرة عادةً؟',a:'تستغرق المذكرات المتوسطة (من 20 إلى 50 صفحة) حوالي 24 إلى 48 ساعة.'},{q:'بأي صيغة يتم تسليم المذكرة؟',a:'نسلّمك ملف PDF جاهز للطباعة بجانب ملف Word عند الحاجة.'},{q:'هل أستطيع طلب تعديلات بعد الاستلام؟',a:'بالتأكيد! نوفر جولات تعديلات حسب الباقة.'}]};
function read(file,fallback){try{return fs.existsSync(file)?JSON.parse(fs.readFileSync(file,'utf8')):fallback}catch{return fallback}}
function write(file,v){fs.writeFileSync(file,JSON.stringify(v,null,2),'utf8')}
if(!fs.existsSync(SETTINGS_FILE))write(SETTINGS_FILE,defaults);if(!fs.existsSync(ORDERS_FILE))write(ORDERS_FILE,[]);
function json(res,code,data){const body=JSON.stringify(data);res.writeHead(code,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(body)}
function body(req){return new Promise((resolve,reject)=>{let d='';req.on('data',c=>{d+=c;if(d.length>10*1024*1024)reject(new Error('payload too large'))});req.on('end',()=>{try{resolve(d?JSON.parse(d):{})}catch{reject(new Error('invalid json'))}});req.on('error',reject)})}
function mime(file){const ext=path.extname(file).toLowerCase();return {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.svg':'image/svg+xml','.ico':'image/x-icon'}[ext]||'application/octet-stream'}
function staticFile(res,file){if(!fs.existsSync(file)||!fs.statSync(file).isFile())return false;res.writeHead(200,{'Content-Type':mime(file)});fs.createReadStream(file).pipe(res);return true}
const server=http.createServer(async(req,res)=>{try{
 const u=new URL(req.url,`http://${req.headers.host||'localhost'}`), p=decodeURIComponent(u.pathname);
 if(req.method==='GET'&&p==='/api/health')return json(res,200,{ok:true});
 if(req.method==='GET'&&p==='/api/settings')return json(res,200,read(SETTINGS_FILE,defaults));
 if(req.method==='PUT'&&p==='/api/settings'){
  const incoming=await body(req), cur=read(SETTINGS_FILE,defaults);const merged={...cur,...incoming,site:{...cur.site,...(incoming.site||{})},theme:{...cur.theme,...(incoming.theme||{})},pricing:{...cur.pricing,...(incoming.pricing||{})},images:{...cur.images,...(incoming.images||{})},faq:Array.isArray(incoming.faq)?incoming.faq:cur.faq};write(SETTINGS_FILE,merged);return json(res,200,{ok:true,settings:merged});
 }
 if(req.method==='GET'&&p==='/api/orders')return json(res,200,read(ORDERS_FILE,[]));
 if(req.method==='POST'&&p==='/api/orders'){
  const b=await body(req);if(!b.name||!b.phone||!b.subject)return json(res,400,{ok:false,error:'الاسم والهاتف والمادة مطلوبة'});const orders=read(ORDERS_FILE,[]);const o={id:crypto.randomUUID(),number:String(Date.now()).slice(-6),createdAt:new Date().toISOString(),status:'جديد',name:String(b.name),phone:String(b.phone),subject:String(b.subject),pages:String(b.pages||''),package:String(b.package||''),notes:String(b.notes||'')};orders.unshift(o);write(ORDERS_FILE,orders);return json(res,200,{ok:true,order:o});
 }
 const match=p.match(/^\/api\/orders\/([^/]+)$/);if(match&&req.method==='PUT'){const b=await body(req),orders=read(ORDERS_FILE,[]),i=orders.findIndex(x=>x.id===match[1]);if(i<0)return json(res,404,{ok:false,error:'الطلب غير موجود'});orders[i]={...orders[i],...b,updatedAt:new Date().toISOString()};write(ORDERS_FILE,orders);return json(res,200,{ok:true,order:orders[i]})}
 if(match&&req.method==='DELETE'){const orders=read(ORDERS_FILE,[]).filter(x=>x.id!==match[1]);write(ORDERS_FILE,orders);return json(res,200,{ok:true})}
 if(req.method==='GET'&&p==='/admin')return staticFile(res,path.join(PUBLIC,'admin.html'));
 if(req.method==='GET'){
   let file=p==='/'?path.join(PUBLIC,'index.html'):path.join(PUBLIC,p.replace(/^\//,''));
   if(file.startsWith(PUBLIC)&&staticFile(res,file))return;
   return staticFile(res,path.join(PUBLIC,'index.html'))?undefined:res.writeHead(404)&&res.end('Not found');
 }
 res.writeHead(405);res.end('Method Not Allowed');
}catch(e){json(res,500,{ok:false,error:e.message})}});
server.listen(PORT,()=>console.log(`Tasmeemy running on ${PORT}`));
