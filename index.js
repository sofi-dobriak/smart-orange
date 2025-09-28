import{S as d,N as u,A as p,a as f}from"./assets/vendor-wPOrAEI2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{new d(".hero-swiper",{modules:[u],slidesPerView:1,spaceBetween:10,navigation:{nextEl:".swiper-button.next",prevEl:".swiper-button.prev"}}),new d(".footer-swiper",{modules:[p],slidesPerView:1,spaceBetween:10,autoplay:{delay:3e3}})});function m({img:t,year:s,type:i,name:o,adress:e,tags:r}){return`
      <li class="builds-cards-item">
        <div class="year-label-container">
          <p class="year">${s}.</p>
          <p class="label">${i}</p>
        </div>

        <img src="${t}" alt="${o} image" width="416" height="234" class="build-card-image">

        <h3 class="build-card-title">${o}</h3>

        <p class="build-address">${e}</p>

        <h4 class="work-type-title">Види робіт</h4>

        <ul class="work-type-list">
          ${w(r)}
        </ul>
      </li>
  `}function y(t){return t.map(m).join("")}function g(t){return` <li class="work-type-item">
            <p class="work-type">${t}</p>
          </li>`}function w(t){return t.map(g).join("")}const h=async()=>{try{return(await f.get("https://test.smarto.agency/smarto_complexes_list.json")).data}catch(t){console.log(t)}},l={buildListEl:document.querySelector(".js-builds-cards-list"),loadMoreBtnEl:document.querySelector(".js-load-more-button")},n={page:1,perPage:3,allData:[],displayedCount:0};window.addEventListener("DOMContentLoaded",async()=>{try{n.allData=await h(),c(),l.loadMoreBtnEl.addEventListener("click",c)}catch(t){console.log(t)}});function c(){const t=n.displayedCount,s=t+n.perPage,i=n.allData.slice(t,s);if(i){const o=y(i);l.buildListEl.insertAdjacentHTML("beforeend",o),n.displayedCount=s,n.displayedCount>=n.allData.length&&(l.loadMoreBtnEl.style.display="none")}}
//# sourceMappingURL=index.js.map
