function e(e){n.classList.add("none"),r.classList.add("block");return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}&api_key=live_OIJcAlfhioE2okkhdvZI0NBmnhOc4DuCU1xTCsqGhvs88ckKiLfq8DAgXSmrAfOG`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t=document.querySelector(".cat-info"),n=document.querySelector(".breed-select"),r=document.querySelector(".loader"),c=document.querySelector(".error");function s(){return r.classList.remove("block"),c.classList.add("block")}(n.classList.add("none"),r.classList.add("block"),fetch("https://api.thecatapi.com/v1/breeds?api_key=live_OIJcAlfhioE2okkhdvZI0NBmnhOc4DuCU1xTCsqGhvs88ckKiLfq8DAgXSmrAfOG").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>function(e){const t=e.map((({id:e,name:t})=>` <option value="${e}">${t}</option> `));return n.innerHTML=t,n.classList.remove("none"),r.classList.remove("block")}(e))).catch((e=>s())),n.addEventListener("change",(c=>{e(c.currentTarget.value).then((e=>function(e){let c,s,o,a,i;return e.forEach((e=>{c=e.breeds,s=e.url})),c.forEach((e=>{o=e.description,a=e.temperament,i=e.name})),t.innerHTML=` <img src="${s}" alt="Cat" width="460" />\n        <div class ="box">\n        <h1>${i}</h1>\n        <p>${o}</p>\n        <p><b>Temperament:</b>${a}</p></div>`,n.classList.remove("none"),r.classList.remove("block")}(e))).catch((e=>s()))}));
//# sourceMappingURL=index.b109a2f2.js.map
