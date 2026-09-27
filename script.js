(()=>{
'use strict';
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const root=document.documentElement;
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ICONS={
  cap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 8l10 5 10-5-10-5z"/><path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5"/><path d="M22 8v6"/></svg>',
  brief:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12z"/><circle cx="12" cy="10" r="2.6"/></svg>',
  rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3.5c2.4 1 4 3 5 5.5-2.5 1-4.5 2.6-5.5 5L9 18l-3-3 4-5c2.4-1 4-3 4.5-6.5z"/><path d="M9 15l-4.5 1.5L6 12"/><circle cx="15" cy="9" r="1.2"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .6 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.1 10.1 0 0 0 22 12.2C22 6.6 17.5 2 12 2z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.4H3.6V20H6.9V8.4zM5.3 3.5A1.9 1.9 0 1 0 5.3 7.3 1.9 1.9 0 0 0 5.3 3.5zM20.4 20h-3.3v-6.1c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H10s0-10.9 0-11.6h3.3v1.6c.4-.7 1.2-1.7 3-1.7 2.2 0 3.9 1.4 3.9 4.5V20z"/></svg>',
  award:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5.5"/><path d="M8.5 13 7 21l5-2.5L17 21l-1.5-8"/></svg>',
  bulb:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.9 1 1 1.6l.1.5h4.8l.1-.5c.1-.6.5-1.2 1-1.6A6 6 0 0 0 12 3z"/></svg>',
  satellite:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m13 7 4 4-6 6-4-4 6-6z"/><path d="m17 3 4 4-2 2-4-4 2-2zM5 15l4 4-2 2-4-4 2-2z"/><path d="M3 21c2-1 3-2 4-4"/></svg>',
  dna:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3c0 6 12 12 12 18M18 3c0 6-12 12-12 18"/><path d="M7.5 7.5h9M6.5 12h11M7.5 16.5h9"/></svg>',
  trending:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>',
  pill:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9.5" width="17" height="7" rx="3.5" transform="rotate(-40 12 12)"/><path d="m9 9 6 6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>',
  book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20"/></svg>',
  terminal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M13 15h4"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z"/></svg>',
  database:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>'
};

/* pointer spotlight */
const spot=document.getElementById('spotlight');
if(spot && !RM && matchMedia('(pointer:fine)').matches){
  let sx=50, sy=18, tx=50, ty=18, raf;
  function tick(){
    sx+=(tx-sx)*.12; sy+=(ty-sy)*.12;
    spot.style.setProperty('--mx', sx.toFixed(2)+'%');
    spot.style.setProperty('--my', sy.toFixed(2)+'%');
    raf=requestAnimationFrame(tick);
  }
  addEventListener('pointermove', e=>{
    tx=(e.clientX/innerWidth)*100; ty=(e.clientY/innerHeight)*100;
  }, {passive:true});
  raf=requestAnimationFrame(tick);
}


/* nav scroll state + mobile menu */
const nav=$('#nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10),{passive:true});
const menuBtn=$('#menuBtn'), navlinks=$('#navlinks'), scrim=$('#scrim');
function closeMenu(){menuBtn.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');navlinks.classList.remove('open');scrim.classList.remove('show')}
function openMenu(){menuBtn.classList.add('open');menuBtn.setAttribute('aria-expanded','true');navlinks.classList.add('open');scrim.classList.add('show')}
menuBtn.addEventListener('click',()=>menuBtn.classList.contains('open')?closeMenu():openMenu());
scrim.addEventListener('click',closeMenu);
$$('a[data-l]').forEach(a=>a.addEventListener('click',closeMenu));

/* active section highlight */
const secs=$$('main > section');
const navA=$$('.navlinks a');
function setActive(){
  let idx=-1;
  secs.forEach((s,i)=>{ if(s.getBoundingClientRect().top<=innerHeight*0.4) idx=i; });
  const id=idx>=0?secs[idx].id:'';
  navA.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+id));
}
addEventListener('scroll',setActive,{passive:true}); setActive();

/* rotating role word */
const words=['forecasting models','recommendation systems','deep-learning classifiers','time-series pipelines'];
let wi=0; const rw=$('#roleWord');
if(!RM) setInterval(()=>{
  rw.style.opacity=0;
  setTimeout(()=>{wi=(wi+1)%words.length;rw.textContent=words[wi];rw.style.opacity=1},260);
},2600);
rw.style.transition='opacity .26s';

/* reveal on scroll */
if('IntersectionObserver' in window && !RM){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.14});
  $$('.reveal').forEach(el=>io.observe(el));
}else{ $$('.reveal').forEach(el=>el.classList.add('in')); }

/* counters */
function count(el){
  const to=+el.dataset.to, dec=+el.dataset.dec||0, suf=el.dataset.suf||'';
  if(RM){el.textContent=to.toFixed(dec)+suf;return}
  const t0=performance.now(),d=1200;
  (function f(t){const k=Math.min(1,(t-t0)/d),e=1-Math.pow(1-k,3);el.textContent=(to*e).toFixed(dec)+suf;if(k<1)requestAnimationFrame(f)})(t0);
}
if('IntersectionObserver' in window){
  const io2=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){count(e.target);io2.unobserve(e.target)}}),{threshold:.6});
  $$('[data-count]').forEach(el=>io2.observe(el));
}

/* ---- data ---- */
const PROJECTS=[
 {t:'Breast Cancer Detection',cat:'ml dl',metric:'97% acc.',ic:'dna',
  b:['Built ML and deep learning models for breast cancer classification using medical datasets.','Implemented Logistic Regression, SVM, Random Forest, CNN, ResNet and EfficientNet models.'],
  tags:['Python','TensorFlow','CNN','ResNet','Scikit-learn']},
 {t:'Time Series Analysis with Cryptocurrency',cat:'ts',metric:'Forecasting',ic:'trending',
  b:['Developed forecasting models to analyze cryptocurrency trends and volatility.','Implemented LSTM, ARIMA and Prophet for predictive time-series analysis.'],
  tags:['Python','Pandas','Tableau','Matplotlib','LSTM','ARIMA','Prophet']},
 {t:'Medicine Recommendation System',cat:'ml',metric:'Recommender',ic:'pill',
  b:['Designed an ML-based recommendation system using patient symptoms and medical history.','Applied classification techniques for personalized medicine suggestions.'],
  tags:['Python','Machine Learning','Scikit-learn']},
 {t:'Analysis of Obesity Dataset',cat:'ml',metric:'98.7% acc.',ic:'chart',
  b:['Developed an ML pipeline for obesity prediction and health-risk analysis.','Achieved 98.7% accuracy using Random Forest with preprocessing and EDA.'],
  tags:['Python','Pandas','Random Forest','Scikit-learn']},
 {t:'BookStore Management System',cat:'web',metric:'Full-stack',ic:'book',
  b:['Developed a full-stack web application for managing books, users and transactions.','Implemented CRUD operations, authentication and database integration.'],
  tags:['MongoDB','Express.js','React.js','Node.js']}
];
const FILTERS=[['all','All'],['ml','Machine learning'],['dl','Deep learning'],['ts','Time series'],['web','Full-stack']];
$('#filters').innerHTML=FILTERS.map(([k,l],i)=>`<button class="fbtn" type="button" data-f="${k}" aria-pressed="${i===0}">${l}</button>`).join('');
$('#pgrid').innerHTML=PROJECTS.map(p=>`<article class="pcard reveal in" data-cat="${p.cat}">
  <div class="pcard-top"><div class="pico">${ICONS[p.ic]}</div><span class="pmetric">${p.metric}</span></div>
  <h3>${p.t}</h3>
  <ul>${p.b.map(x=>`<li>${x}</li>`).join('')}</ul>
  <div class="ptags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
</article>`).join('');
$('#filters').addEventListener('click',e=>{
  const b=e.target.closest('.fbtn'); if(!b) return;
  $$('.fbtn').forEach(x=>x.setAttribute('aria-pressed',x===b));
  const f=b.dataset.f;
  $$('.pcard').forEach(c=>{
    const show=f==='all'||c.dataset.cat.split(' ').includes(f);
    c.hidden=!show;
    if(show && !RM){c.classList.remove('flash');void c.offsetWidth;c.classList.add('flash');}
  });
});

const SKILLS=[
 {h:'Languages',ic:'terminal',items:['Python','Java','C','SQL']},
 {h:'Libraries & frameworks',ic:'layers',items:['Pandas','NumPy','Scikit-learn','TensorFlow','Keras']},
 {h:'Data science',ic:'cpu',items:['Machine Learning','Deep Learning','NLP','Time-Series Forecasting','LLM']},
 {h:'Web',ic:'globe',items:['MERN Stack','HTML','CSS','JavaScript']},
 {h:'Databases & tools',ic:'database',items:['MySQL','MongoDB','Excel','Git','GitHub','Jupyter Notebook']},
 {h:'Core CS & people skills',ic:'spark',items:['Data Structures and Algorithms','Public speaking','Anchoring']}
];
$('#skillgrid').innerHTML=SKILLS.map(s=>`<div class="skillcat reveal in"><h3><span class="ic">${ICONS[s.ic]}</span>${s.h}</h3><div class="pills">${s.items.map(i=>`<span class="tag">${i}</span>`).join('')}</div></div>`).join('');

const ACH=[
 {t:'State-level 2nd position',ic:'award',p:'English Olympiad — placed second at the state level.'},
 {t:'Spark-Up Summit Ideathon',ic:'bulb',p:"Participant, organised by Silicon University. Pitched \"SafeKey\", a safety keychain for women's safety."},
 {t:'Smart India Hackathon (SIH)',ic:'satellite',p:'Participant in building a groundwater-check chatbot using RAG and the INGRES database.'}
];
$('#achGrid').innerHTML=ACH.map(a=>`<div class="ach reveal in"><div class="ic">${ICONS[a.ic]}</div><div><h3>${a.t}</h3><p>${a.p}</p></div></div>`).join('');

const CERTS=[
 {n:'Oracle Analytics Cloud 2025 Certified Professional',i:'Oracle',e:'OAC'},
 {n:'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',i:'Oracle',e:'OCI'},
 {n:'Data Science with ML',i:'Syllogistek, 2025',e:'DS'},
 {n:'Cybersecurity',i:'CodeBeat, 2024',e:'CS'},
 {n:'Cisco Networking Courses',i:'Cisco',e:'CN'},
 {n:'LLM',i:'Vigor',e:'LLM'}
];
$('#certList').innerHTML=CERTS.map(c=>`<div class="certrow reveal in"><div class="ic">${c.e}</div><div><b>${c.n}</b><small>${c.i}</small></div></div>`).join('');

/* contact */
const status=$('#status'), EMAIL='archita.panda004@gmail.com';
$('#sendBtn').addEventListener('click',()=>{
  const n=$('#fName').value.trim(), m=$('#fMsg').value.trim();
  if(!m){const f=$('#fMsg');f.classList.remove('shake');void f.offsetWidth;f.classList.add('shake');f.focus();status.textContent='Write a short message first.';return}
  const a=document.createElement('a');
  a.href=`mailto:${EMAIL}?subject=${encodeURIComponent('Hello from your portfolio'+(n?' - '+n:''))}&body=${encodeURIComponent(m+(n?'\n\n'+n:''))}`;
  document.body.appendChild(a); setTimeout(()=>{try{a.click()}catch(e){}a.remove()},80);
  status.textContent="Opening your mail app... If it doesn't cooperate, just copy my email and come say hi!";
});
$('#copyEmail').addEventListener('click',async e=>{
  const b=e.currentTarget; let ok=false;
  try{await navigator.clipboard.writeText(EMAIL);ok=true}catch(err){
    try{const r=document.createRange();r.selectNodeContents($('#emailTxt'));const s=getSelection();s.removeAllRanges();s.addRange(r);ok=document.execCommand('copy')}catch(e2){}
  }
  b.textContent=ok?'Copied!':'Select and copy it above';
  setTimeout(()=>b.textContent='Copy email',2000);
});

/* visit counter: pings a free counter API once per page load.
   Paired with a small daily Apps Script (see the chat reply) that
   emails a once-a-day summary instead of alerting on every visit. */
(function(){
  try{
    fetch('https://api.countapi.xyz/hit/archita-panda-portfolio/views', {mode:'cors'}).catch(()=>{});
  }catch(e){}
})();
})();
