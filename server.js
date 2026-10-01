const express=require("express");
const multer=require("multer");
const session=require("express-session");
const fs=require("fs"),path=require("path");

const app=express(),PORT=process.env.PORT||3000;
const DATA=path.join(__dirname,"data.json"),UPLOADS=path.join(__dirname,"public","uploads");
fs.mkdirSync(UPLOADS,{recursive:true});

const DEFAULT={
  site:{brand:"تصميمي",tagline:"تصميم يحوّل أفكارك إلى شيء يستحق أن يُرى.",logoText:"تصميمي",favicon:"",
    hero:{eyebrow:"مصممها ليك، مش ليهم ↙",title:"نصممها\nبطريقتك.",text:"تصميم مذكرات وملفات تعليمية وواجهات بصرية مرتبة، واضحة، ومختلفة.",ctaText:"شوف شغلي",ctaUrl:"#portfolio",image:""},
    about:{label:"03 / عن تصميمي",title:"مش بس بننسق.",text:"أنا مصمم مهتم بالتفاصيل الصغيرة التي تجعل الملف التعليمي أسهل وأجمل في نفس الوقت.",image:""},
    contact:{whatsapp:"",instagram:"",facebook:"",email:""},
    seo:{title:"تصميمي — تصميم وتنسيق الملفات التعليمية",description:"تصميم وتنسيق المذكرات وملفات PDF والأغلفة التعليمية.",keywords:"تصميم, مذكرات, PDF, تصميم تعليمي"}
  },
  style:{colors:{background:"#fdfbf9",surface:"#f7efe9",text:"#171717",heading:"#2b1a07",accent:"#ff6f1e",border:"#171717",blue:"#3b82f6",pink:"#ff66cf",green:"#22c55e",footer:"#ff6f1e"},
    fonts:{heading:"Cairo",body:"Cairo",headingWeight:800,bodyWeight:500,headingSize:72,bodySize:19},
    layout:{radius:14,sectionGap:72,maxWidth:1200}},
  nav:{links:[{label:"الخدمات",url:"#services",visible:true},{label:"أعمالي",url:"#portfolio",visible:true},{label:"عني",url:"#about",visible:true}],ctaText:"شوف شغلي",ctaUrl:"#portfolio"},
  services:[
    {id:"s1",title:"تنسيق المذكرات",text:"ترتيب المحتوى والعناوين والجداول والعناصر التعليمية في ملف واضح.",icon:"✦",visible:true},
    {id:"s2",title:"تصميم PDF",text:"تحويل المحتوى الخام إلى ملف PDF له هوية بصرية متماسكة.",icon:"✎",visible:true},
    {id:"s3",title:"أغلفة وملفات تعليمية",text:"تصميم أغلفة وملازم وملفات قابلة للطباعة والنشر الرقمي.",icon:"♥",visible:true}
  ],
  portfolio:[],
  sections:{hero:true,marquee:true,services:true,portfolio:true,about:true,contact:true,footer:true},
  admin:{username:"admin",password:"change-me-now"}
};

function load(){
  if(!fs.existsSync(DATA)) fs.writeFileSync(DATA,JSON.stringify(DEFAULT,null,2));
  try{return JSON.parse(fs.readFileSync(DATA,"utf8"))}catch{return DEFAULT}
}
function save(d){fs.writeFileSync(DATA,JSON.stringify(d,null,2))}
function deep(a,b){return {...a,...b}}
let db=load();

app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}));
app.use(session({secret:process.env.SESSION_SECRET||"tasmimi-change-this-secret",resave:false,saveUninitialized:false,cookie:{httpOnly:true,sameSite:"lax"}}));
app.use(express.static(path.join(__dirname,"public")));

function auth(req,res,next){if(req.session.admin)return next();return res.status(401).json({error:"Unauthorized"})}

const upload=multer({storage:multer.diskStorage({
 destination:(_,__,cb)=>cb(null,UPLOADS),
 filename:(_,file,cb)=>cb(null,Date.now()+"-"+file.originalname.replace(/[^a-zA-Z0-9._-]/g,"-"))
})});

app.get("/api/site",(req,res)=>res.json(db));
app.post("/api/login",(req,res)=>{
 const {username,password}=req.body;
 if(username===db.admin.username && password===db.admin.password){req.session.admin=true;return res.json({ok:true})}
 res.status(401).json({error:"بيانات الدخول غير صحيحة"});
});
app.post("/api/logout",(req,res)=>req.session.destroy(()=>res.json({ok:true})));
app.get("/api/me",(req,res)=>res.json({admin:!!req.session.admin}));

app.put("/api/site",auth,(req,res)=>{
 db={...db,...req.body,
  site:deep(db.site,req.body.site||{}),
  style:deep(db.style,req.body.style||{}),
  nav:deep(db.nav,req.body.nav||{}),
  sections:deep(db.sections,req.body.sections||{})
 };
 if(req.body.site?.hero)db.site.hero=deep(load().site.hero,req.body.site.hero);
 if(req.body.site?.about)db.site.about=deep(load().site.about,req.body.site.about);
 if(req.body.site?.contact)db.site.contact=deep(load().site.contact,req.body.site.contact);
 if(req.body.site?.seo)db.site.seo=deep(load().site.seo,req.body.site.seo);
 if(req.body.style?.colors)db.style.colors=deep(load().style.colors,req.body.style.colors);
 if(req.body.style?.fonts)db.style.fonts=deep(load().style.fonts,req.body.style.fonts);
 if(req.body.style?.layout)db.style.layout=deep(load().style.layout,req.body.style.layout);
 save(db);res.json(db);
});

app.post("/api/upload",auth,upload.single("image"),(req,res)=>{
 if(!req.file)return res.status(400).json({error:"لم يتم اختيار صورة"});
 res.json({url:"/uploads/"+req.file.filename});
});
app.delete("/api/upload",(req,res)=>{
 if(!req.session.admin)return res.status(401).json({error:"Unauthorized"});
 const u=String(req.body.url||"");const file=path.basename(u);
 const p=path.join(UPLOADS,file);
 if(fs.existsSync(p))fs.unlinkSync(p);
 res.json({ok:true});
});
app.post("/api/reset",auth,(req,res)=>{db=DEFAULT;save(db);res.json(db)});

app.get("/admin",(req,res)=>res.sendFile(path.join(public,"admin.html")));
app.get("*",(req,res)=>res.sendFile(path.join(public,"index.html")));
app.listen(PORT,()=>console.log("Tasmimi Pro running on "+PORT));