/* empty css                      */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function l(){document.querySelectorAll(".faq-question").forEach(o=>{o.addEventListener("click",()=>{o.parentElement.classList.toggle("active")})})}function c(){new Swiper(".swiper",{slidesPerView:3,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){this.isBeginning?document.querySelector(".swiper-button-prev").style.display="none":document.querySelector(".swiper-button-prev").style.display="block",this.isEnd?document.querySelector(".swiper-button-next").style.display="none":document.querySelector(".swiper-button-next").style.display="block"}},breakpoints:{1024:{slidesPerView:3,spaceBetween:24,slidesOffsetBefore:72,slidesOffsetAfter:72},768:{slidesPerView:2,spaceBetween:24,slidesOffsetBefore:24,slidesOffsetAfter:24},320:{slidesPerView:1.2,spaceBetween:16,slidesOffsetBefore:16,slidesOffsetAfter:16}}}).isBeginning&&(document.querySelector(".swiper-button-prev").style.display="none")}function d(){new Swiper(".reviews-swiper",{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){this.isBeginning?document.querySelector(".swiper-button-prev").style.display="none":document.querySelector(".swiper-button-prev").style.display="block",this.isEnd?document.querySelector(".swiper-button-next").style.display="none":document.querySelector(".swiper-button-next").style.display="block"}},breakpoints:{1024:{slidesPerView:3.7,spaceBetween:24,slidesOffsetBefore:72,slidesOffsetAfter:300},768:{slidesPerView:2},320:{slidesPerView:1.4,spaceBetween:16,slidesOffsetBefore:16,slidesOffsetAfter:250}}}).isBeginning&&(document.querySelector(".swiper-button-prev").style.display="none")}(()=>{const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".header-link-js"),e=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),o.classList.toggle("is-open");const n=t?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[n](document.body)};i.forEach(t=>t.addEventListener("click",e)),s.addEventListener("click",e),r.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),s.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();window.addEventListener("load",function(){window.location.hash&&(window.history.scrollRestoration="manual",window.scrollTo(0,0))});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll(".play-video");function s(e){const t=e.querySelector("source"),n=e.getAttribute("data-src");t.setAttribute("src",n),e.load()}function r(e,t){e.forEach(n=>{n.isIntersecting&&(setTimeout(()=>{s(n.target),n.target.play()},1e3),t.unobserve(n.target))})}const i=new IntersectionObserver(r,{root:null,rootMargin:"0px",threshold:.1});o.forEach(e=>{i.observe(e)})});document.addEventListener("DOMContentLoaded",()=>{l(),c(),d()});
//# sourceMappingURL=commonHelpers.js.map
