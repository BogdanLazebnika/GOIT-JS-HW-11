/* empty css                      */import{a as m,S as d,i as c}from"./assets/vendor-yjzyrjgX.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",g="41008459-ae85a0f4e5ddecc4605e9c5b1";function h(n){return m.get(p,{params:{key:g,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw r})}const s=document.querySelector(".gallery"),y=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${i}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${u}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");s.insertAdjacentHTML("beforeend",r),y.refresh()}function L(){s.innerHTML=""}function w(){s.classList.add("loading")}function S(){s.classList.remove("loading")}const l=document.getElementById("search-form"),v=l.querySelector("input[name='search-text']");l.addEventListener("submit",q);function q(n){n.preventDefault();const r=v.value.trim();if(!r){c.warning({title:"Warning",message:"Please enter a search query!",timeout:2500});return}L(),w(),h(r).then(i=>{const o=i.hits;if(!o||o.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3});return}b(o)}).catch(i=>{console.error("Fetch error:",i),c.error({title:"Error",message:"Something went wrong while fetching images.",timeout:3e3})}).finally(()=>S())}
//# sourceMappingURL=index.js.map
