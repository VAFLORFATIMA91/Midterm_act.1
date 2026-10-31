/* ===== Content data for repeated blocks ===== */
const blog=[
 ["The Gelato Experience: Why Our Gelato Stands Out","When it comes to indulging in a sweet, refreshing treat, few desserts can rival the sheer delight of authentic Sugaree Gelato. Crafted fresh every day using high-quality ingredients…","blog-1","#7a4b5c"],
 ["From Our Kitchen to Your Table: The Art of Crafting Rustic Pizza","At Sugaree, we believe that every great pizza tells a story. Our signature Rustic Pizza is a culinary masterpiece crafted from passion, skill, and the freshest ingredients…","blog-2","#8a3b1c"],
 ["Start Your Day with the Perfect Cup at Sugaree Gelato & Café","Did someone say coffee? At Sugaree Gelato & Café, we believe there's nothing better than starting your day with a beautifully crafted cup of coffee…","blog-3","#6b3a22"],
 ["Our Creamy Bacon & Potato Pizza","At Sugaree Gelato & Café, we believe pizza should be an experience, and our Creamy Bacon & Potato Pizza is no exception! This mouthwatering creation brings together the comfort of cheesy goodness…","blog-4","#5b2412"],
 ["A Sweet Visit at Sugaree Gelato & Café","There's nothing we love more than seeing our customers enjoy their time at Sugaree Gelato & Café, and this group is no exception! Recently, Ina Welkins and friends visited us…","blog-5","#e5a43a"],
 ["Our Irresistible Lemon Meringue Donut","If you're on the hunt for a sweet treat with a zesty twist, look no further than our Lemon Meringue Donut. Combining the fluffiness of a classic donut with the vibrant tang of lemon curd…","blog-6","#a8743a"]];
const gal=Array.from({length:12},(_,i)=>"gal-"+(i+1));

/* Blog cards (home preview + blog page) */
document.querySelectorAll("[data-blog]").forEach(el=>{
  el.innerHTML=blog.slice(0,+el.dataset.blog).map(b=>`<article class="card"><div class="ph" style="--img:url(images/${b[2]}.jpg);--c2:${b[3]};aspect-ratio:16/9"></div><div class="body"><h3>${b[0]}</h3><p>${b[1]}</p><a class="more" href="#blog">read more</a></div></article>`).join("");
});
/* Home ambiance: 4 columns, two photos each + caption */
const amb=[[["amb-1"],"Fun Gelato Moments"],[["amb-2","amb-6"],"Freshly Baked Pastries"],[["amb-3","amb-7"],"Signature Coffees"],[["amb-4","amb-8"],"Sugaree Cafe and Gelato"]];
amb[0][0].push("amb-5");
document.querySelectorAll("[data-amb]").forEach(el=>{
  el.innerHTML=amb.map(([imgs,cap])=>`<figure>${imgs.map(i=>`<img src="images/${i}.jpg" alt="${cap}" loading="lazy">`).join("")}<figcaption>${cap}</figcaption></figure>`).join("");
});
/* Gallery tiles */
document.querySelectorAll("[data-gal]").forEach(el=>{
  el.innerHTML=Array.from({length:+el.dataset.gal},(_,i)=>{return `<div class="ph" style="--img:url(images/${gal[i%gal.length]}.jpg)" role="img" aria-label="Sugaree photo ${i+1}"></div>`}).join("");
});
/* CTA banners */
document.querySelectorAll("[data-banner]").forEach(el=>{
  const [e,t,b,l]=(el.dataset.banner||"Sugaree's Delightful Space|Experience Fresh Flavors in a Vibrant Atmosphere Daily|Explore Our Menu|#menu").split("|");
  el.innerHTML=`<span class="eyebrow">${e}</span><h2>${t}</h2><a class="btn ghost" href="${l}">${b}</a>`;
});

/* ===== Hash router: show one page at a time ===== */
const pages=[...document.querySelectorAll("main")], links=document.querySelectorAll("nav a");
function route(){
  const id=(location.hash||"#home").slice(1), page=document.getElementById(id)?id:"home";
  pages.forEach(p=>p.classList.toggle("show",p.id===page));
  links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+page));
  document.querySelector("nav").classList.remove("open");
  window.scrollTo(0,0);
}
addEventListener("hashchange",route);route();

/* ===== Mobile nav toggle ===== */
const burger=document.querySelector(".burger");
burger.addEventListener("click",()=>{
  const open=document.querySelector("nav").classList.toggle("open");
  burger.setAttribute("aria-expanded",open);
});
/* Demo form handler: replace with your backend endpoint */
document.querySelectorAll("[data-form]").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();f.reset();alert("Thank you! We'll be in touch soon.")}));
