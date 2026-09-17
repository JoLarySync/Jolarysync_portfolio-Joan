const zones=[
  {city:'Manila',zone:'Asia/Manila',label:'Philippine Standard Time',local:true},
  {city:'New York',zone:'America/New_York',label:'Eastern Time'},
  {city:'London',zone:'Europe/London',label:'United Kingdom'},
  {city:'Dubai',zone:'Asia/Dubai',label:'Gulf Standard Time'},
  {city:'Singapore',zone:'Asia/Singapore',label:'Singapore Standard Time'},
  {city:'Sydney',zone:'Australia/Sydney',label:'Australian Eastern Time'}
];
const grid=document.querySelector('#clock-grid');
const formatToggle=document.querySelector('#format-toggle');
const timeFormat=()=>formatToggle.checked?'2-digit':'numeric';
const dateFormat={weekday:'short',month:'short',day:'numeric',year:'numeric'};
function card(zone){const article=document.createElement('article');article.className=`clock-card${zone.local?' local':''}`;article.innerHTML=`<header><div><div class="city">${zone.city}</div><div class="zone">${zone.label}</div></div>${zone.local?'<span class="badge">YOUR TIME</span>':''}</header><div class="time" data-time="${zone.zone}">--:--:--</div><div class="date" data-date="${zone.zone}">Loading date…</div>`;return article}
zones.forEach(zone=>grid.appendChild(card(zone)));
function updateClocks(){const now=new Date();document.querySelectorAll('[data-time]').forEach(el=>{el.textContent=new Intl.DateTimeFormat('en-US',{timeZone:el.dataset.time,hour:timeFormat(),minute:'2-digit',second:'2-digit',hour12:!formatToggle.checked}).format(now)});document.querySelectorAll('[data-date]').forEach(el=>{el.textContent=new Intl.DateTimeFormat('en-US',{...dateFormat,timeZone:el.dataset.date}).format(now)});}
formatToggle.addEventListener('change',updateClocks);updateClocks();setInterval(updateClocks,1000);
