async function load(){
 const d=await fetch('/api/site').then(r=>r.json());
 const root=document.documentElement,c=d.style.colors,f=d.style.fonts,l=d.style.layout;
 const vars={bg:c.background,surface:c.surface,text:c.text,heading:c.heading,accent:c.accent,border:c.border,blue:c.blue,pink:c.pink,green:c.green,radius:l.radius+'px',gap:l.sectionGap+'px',max:l.maxWidth+'px',headSize:Math.max(76,Math.min(118,f.headingSize||104))+'px',bodySize:f.bodySize+'px',headWeight:f.headingWeight,bodyWeight:f.bodyWeight};
 Object.entries(vars).forEach(([k,v])=>root.style.setProperty('--'+k,v));
 document.title=d.site.seo.title||d.site.brand;document.getElementById('desc').content=d.site.seo.description||'';
 $('#logo').innerHTML=esc(d.site.logoText||d.site.brand)+'<span>✦</span>';
 $('#navLinks').innerHTML=(d.nav.links||[]).filter(x=>x.visible).map(x=>`<a href="${esc(x.url)}">${esc(x.label)}</a>`).join('');
 setLink('navCta',d.nav.ctaText,d.nav.ctaUrl);
 $('#eyebrow').textContent=d.site.hero.eyebrow||'أهلاً بيك في تصميمي';
 $('#heroTitle').innerHTML=esc(d.site.hero.title||'المحتوى يستاهل تصميم حلو.').replace(/\n/g,'<br>');
 $('#heroText').textContent=d.site.hero.text||'';setLink('heroCta',d.site.hero.ctaText,d.site.hero.ctaUrl);
 if(d.site.hero.image){$('#heroVisual').style.backgroundImage=`url("${esc(d.site.hero.image)}")`;$('#heroVisual').innerHTML='';}
 $('#aboutTitle').textContent=d.site.about.title||'';$('#aboutText').textContent=d.site.about.text||'';
 $('#servicesGrid').innerHTML=(d.services||[]).filter(x=>x.visible).map((s,i)=>`<article class="service"><span class="service-num">0${i+1}</span><div class="svc-icon">${esc(s.icon||'✦')}</div><div><b>${esc(s.title)}</b><p>${esc(s.text||'')}</p></div></article>`).join('');
 $('#portfolioGrid').innerHTML=(d.portfolio||[]).filter(x=>x.visible!==false).map((p,i)=>`<article class="project"><div class="project-note">${i%2?'شايف التفاصيل؟ ↙':'ده الشغل اللي بنتكلم عنه ↘'}</div><div class="project-img">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.title)}">`:`<div class="project-placeholder">✦</div>`}</div><div class="project-info"><small>${esc(p.category||'PROJECT')}</small><h3>${esc(p.title)}</h3><p>${esc(p.description||'')}</p></div></article>`).join('')||'<div class="empty">الأعمال الجديدة جاية قريبًا ✦</div>';
 $('#footerBrand').textContent=(d.site.brand||'تصميمي')+'.';
 const w=(d.site.contact.whatsapp||'').replace(/\D/g,'');let links=`<a href="#portfolio">الأعمال</a><a href="#services">الخدمات</a>`;if(w)links+=`<a href="https://wa.me/${w}">واتساب</a>`;if(d.site.contact.instagram)links+=`<a href="${esc(d.site.contact.instagram)}">Instagram</a>`;if(d.site.contact.email)links+=`<a href="mailto:${esc(d.site.contact.email)}">Email</a>`;$('#footerLinks').innerHTML=links;
 Object.entries(d.sections||{}).forEach(([id,show])=>{const e=document.getElementById(id);if(e)e.style.display=show?'':'none'});
}
function $(x){return document.querySelector(x)}function setLink(id,text,url){const e=$('#'+id);e.textContent=text||'';e.href=url||'#'}function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}load();
