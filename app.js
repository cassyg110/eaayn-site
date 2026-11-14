
var D=null;
function $(i){return document.getElementById(i)}
function E(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function card(x){return '<div class="card">'+(x.icon?'<div class="ic">'+E(x.icon)+'</div>':'')+'<h3>'+E(x.title)+'</h3><p>'+E(x.text)+'</p></div>'}
function ph(o){return '<div class="ph"><div class="w"><h1>'+E(o.title)+'</h1><p>'+E(o.intro)+'</p></div></div>'}
function FULL(){return D.brand.full+" ("+D.brand.short+")"}
function empty(o,l){return ph(o)+'<div class="sec"><div class="w"><div class="card"><p>'+E(o.empty)+' <a href="#'+l+'">'+E(o.link)+'</a></p></div></div></div>'}
function fm(o,id,f,last){return '<form id="'+id+'">'+f+'<button class="btn" style="margin:0" type="submit">'+E(o.submit)+'</button></form><div class="ok" id="'+id+'o">'+E(o.thanks)+'</div>'}
var P={
home:function(){var h=D.home;return '<div class="hero"><div class="w"><h1>'+E(FULL())+'</h1><p>'+E(h.heroText)+'</p><a class="btn" href="#join">'+E(h.btn1)+'</a><a class="btn o" href="#programs">'+E(h.btn2)+'</a></div></div>'
+'<div class="sec"><div class="w stats"><div><b>'+D.chapters.list.length+'</b><span>'+E(h.stat1)+'</span></div><div><b>'+D.focus.length+'</b><span>'+E(h.stat2)+'</span></div></div></div>'
+'<div class="sec alt"><div class="w"><h2>'+E(h.whyTitle)+'</h2><p style="max-width:720px">'+E(h.whyText)+'</p></div></div>'
+'<div class="sec"><div class="w"><h2>'+E(h.focusTitle)+'</h2><div class="grid">'+D.focus.map(card).join("")+'</div></div></div>'
+'<div class="cta"><h2>'+E(h.ctaTitle)+'</h2><p>'+E(h.ctaText)+'</p><a class="btn" href="#join">'+E(h.btn3)+'</a><a class="btn o" href="#chapters">'+E(h.btn4)+'</a></div>'},
about:function(){var a=D.about;return ph({title:a.title,intro:a.intro})+'<div class="sec"><div class="w grid">'+D.aboutCards.map(card).join("")+'</div></div><div class="sec alt"><div class="w"><h2>'+E(a.valuesTitle)+'</h2><ul class="l">'+D.values.map(function(v){return '<li>'+E(v.name)+'</li>'}).join("")+'</ul></div></div>'},
chapters:function(){var c=D.chapters;return ph(c)+'<div class="sec"><div class="w"><div class="grid">'+c.list.map(function(x){return '<div class="card"><h3>'+E(x.country)+'</h3><p>'+E(c.cardText.replace("{country}",x.country))+'</p><a class="btn" style="margin:12px 0 0"'+(x.whatsapp?' target="_blank" rel="noopener" href="'+E(x.whatsapp)+'"':' href="#contact"')+'>'+E(c.btn)+'</a></div>'}).join("")+'</div><p style="margin-top:24px">'+E(c.note)+' <a href="#contact">'+E(c.noteLink)+'</a></p></div></div>'},
programs:function(){return ph(D.programs)+'<div class="sec"><div class="w grid">'+D.programs.list.map(card).join("")+'</div></div>'},
innovations:function(){return empty(D.innovations,"join")},
opportunities:function(){return empty(D.opportunities,"join")},
join:function(){var j=D.join;return ph(j)+'<div class="sec"><div class="w">'+fm(j,"jf",'<label>'+E(j.nameL)+'<input required></label><label>'+E(j.emailL)+'<input type="email" required></label><label>'+E(j.countryL)+'<select>'+D.chapters.list.map(function(x){return '<option>'+E(x.country)+'</option>'}).join("")+'<option>'+E(j.otherCountry)+'</option></select></label><label>'+E(j.roleL)+'<select>'+j.roles.map(function(r){return '<option>'+E(r.name)+'</option>'}).join("")+'</select></label><label>'+E(j.interestsL)+'<textarea rows="3"></textarea></label>')+'</div></div>'},
contact:function(){var c=D.contact;return ph(c)+'<div class="sec"><div class="w">'+fm(c,"cf",'<label>'+E(c.nameL)+'<input required></label><label>'+E(c.emailL)+'<input type="email" required></label><label>'+E(c.msgL)+'<textarea rows="5" required></textarea></label>')+'</div></div>'}};
function shell(){var s=D.brand.short;$("lg").innerHTML=E(s.slice(0,-2))+'<span>'+E(s.slice(-2))+'</span><small>'+E(D.brand.full)+'</small>';
$("nv").innerHTML=D.nav.map(function(n){return '<a href="#'+n.page+'"'+(n.page=="join"?' class="join"':'')+'>'+E(n.label)+'</a>'}).join("");
var f=D.footer;$("ft").innerHTML='<div class="w fg"><div><b style="font:700 1.1rem Poppins">'+E(s)+'</b><p>'+E(FULL())+', '+E(f.text)+'</p></div><div><b>'+E(f.exploreTitle)+'</b><br>'+D.nav.slice(1,5).map(function(n){return '<a href="#'+n.page+'">'+E(n.label)+'</a><br>'}).join("")+'</div><div><b>'+E(f.newsTitle)+'</b><form id="nf" style="margin-top:8px"><input type="email" required placeholder="'+E(f.placeholder)+'" aria-label="'+E(f.placeholder)+'"><button class="btn" style="margin:0" type="submit">'+E(f.btn)+'</button></form></div></div><div class="w" style="margin-top:20px;opacity:.7">© '+new Date().getFullYear()+' '+E(FULL())+'. '+E(f.rights)+'</div>';
$("nf").onsubmit=function(e){e.preventDefault();submit(this,"newsletter");this.innerHTML=E(f.thanks)};document.title=FULL()}
function route(){var h=(location.hash||"#home").slice(1);if(!P[h])h="home";$("m").innerHTML=P[h]();
[["jf","jfo"],["cf","cfo"]].forEach(function(p){if($(p[0]))$(p[0]).onsubmit=function(e){e.preventDefault();submit(this,p[0]);$(p[1]).style.display="block";this.reset()}});
document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("href")=="#"+h&&a.className.indexOf("join")<0)});
$("nv").classList.remove("open");window.scrollTo(0,0)}
$("mb").onclick=function(){$("nv").classList.toggle("open")};


var CF=window.EAAYAN_CONFIG||{};
function SB(t){return{apikey:CF.supabaseKey,Authorization:"Bearer "+(t||CF.supabaseKey),"Content-Type":"application/json"}}
function csv(t){var r=[],row=[],c="",q=false;for(var i=0;i<t.length;i++){var h=t[i];if(q){if(h=='"'&&t[i+1]=='"'){c+='"';i++}else if(h=='"')q=false;else c+=h}else if(h=='"')q=true;else if(h==","){row.push(c);c=""}else if(h=="\n"){row.push(c);r.push(row);row=[];c=""}else if(h!="\r")c+=h}if(c||row.length){row.push(c);r.push(row)}return r}
async function tab(n){var t=await(await fetch("https://docs.google.com/spreadsheets/d/"+CF.sheetId+"/gviz/tq?tqx=out:csv&sheet="+encodeURIComponent(n))).text();var r=csv(t);if(r.length<2)return null;return r.slice(1).filter(function(x){return x.join("")}).map(function(x){var o={};r[0].forEach(function(k,i){o[k]=x[i]||""});return o})}
async function load(){var d=await(await fetch("content.json")).json();
try{if(CF.source=="sheet"&&CF.sheetId){var T=CF.sheetTabs||{},a=await tab(T.chapters||"chapters");if(a)d.chapters.list=a;a=await tab(T.programs||"programs");if(a)d.programs.list=a;a=await tab(T.focus||"focus");if(a)d.focus=a}
if(CF.source=="supabase"&&CF.supabaseUrl){var j=await(await fetch(CF.supabaseUrl+"/rest/v1/content?id=eq.1&select=data",{headers:SB()})).json();if(j[0])d=j[0].data}}catch(e){console.warn("Falling back to content.json",e)}
return d}
function submit(f,kind){if(CF.source!="supabase"||!CF.supabaseUrl)return;var d={};f.querySelectorAll("label").forEach(function(l){d[l.firstChild.textContent.trim()]=l.querySelector("input,select,textarea").value});if(!Object.keys(d).length)d.email=f.querySelector("input").value;
fetch(CF.supabaseUrl+"/rest/v1/submissions",{method:"POST",headers:SB(),body:JSON.stringify({kind:kind,data:d})}).catch(function(){})}
async function boot(){D=await load();shell();route();window.onhashchange=route}
boot();
