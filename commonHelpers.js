/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function g(){document.querySelectorAll(".faq-question").forEach(i=>{i.addEventListener("click",()=>{i.parentElement.classList.toggle("active")})})}function y(){document.querySelectorAll(".swiper").forEach(n=>{const r=n.classList.contains("how-to-play-slider"),o=new Swiper(n,{slidesPerView:3,spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){this.isBeginning?this.navigation.prevEl.style.display="none":this.navigation.prevEl.style.display="block",this.isEnd?this.navigation.nextEl.style.display="none":this.navigation.nextEl.style.display="block"}},breakpoints:r?{320:{slidesPerView:1.1,spaceBetween:16,centeredSlides:!0}}:{1440:{slidesPerView:3,spaceBetween:24,slidesOffsetBefore:72,slidesOffsetAfter:72},320:{slidesPerView:1.23,spaceBetween:16,centeredSlides:!0,slidesOffsetBefore:0,slidesOffsetAfter:0}}});o.isBeginning&&(o.navigation.prevEl.style.display="none")})}function h(){const i=document.querySelector(".about-the-game"),n=100;function r(e){const t=e.getBoundingClientRect();return t.top<=window.innerHeight-n&&t.top>=0}function o(){r(i)&&(i.classList.add("in-view"),window.removeEventListener("scroll",o))}window.addEventListener("scroll",o)}function v(){const i=document.querySelectorAll(".section-title");function n(o){const e=o.getBoundingClientRect();return e.top>=0&&e.top<=(window.innerHeight||document.documentElement.clientHeight)}function r(){i.forEach(o=>{n(o)&&o.classList.add("in-view")})}window.addEventListener("scroll",r),r()}function E(){const i=document.querySelector(".statistic-list"),n=document.querySelector('.statistic-text[data-type="rating"]'),r=document.querySelector('.statistic-text[data-type="downloads"]');let o=!1;function e(c,l,p,m){let d=null;function a(u){d||(d=u);const f=Math.min((u-d)/m,1),w=(p-l)*f+l;c.textContent=w.toFixed(1),f<1&&window.requestAnimationFrame(a)}window.requestAnimationFrame(a)}function t(c){const l=c.getBoundingClientRect();return l.top>=0&&l.bottom<=(window.innerHeight||document.documentElement.clientHeight)}function s(){t(i)&&!o&&(o=!0,e(n,0,4.8,1e3),e(r,0,5e4,1500))}window.addEventListener("scroll",s),s()}(()=>{const i=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),o=document.querySelectorAll(".header-link-js"),e=document.querySelector(".backdrop"),t=()=>{const c=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!c),i.classList.toggle("is-open");const l=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[l](document.body)},s=()=>{i.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body)};o.forEach(c=>c.addEventListener("click",t)),n.addEventListener("click",t),r.addEventListener("click",t),e.addEventListener("click",c=>{c.target===e&&s()}),window.addEventListener("keydown",c=>{c.key==="Escape"&&i.classList.contains("is-open")&&s()}),window.matchMedia("(min-width: 1440px)").addEventListener("change",c=>{c.matches&&s()})})();window.addEventListener("load",function(){window.location.hash&&(window.history.scrollRestoration="manual",window.scrollTo(0,0))});document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelectorAll(".play-video");function n(e){const t=e.querySelector("source"),s=e.getAttribute("data-src");t.setAttribute("src",s),e.load()}function r(e,t){e.forEach(s=>{s.isIntersecting&&(setTimeout(()=>{n(s.target),s.target.play()},1e3),t.unobserve(s.target))})}const o=new IntersectionObserver(r,{root:null,rootMargin:"0px",threshold:.1});i.forEach(e=>{o.observe(e)})});document.addEventListener("DOMContentLoaded",()=>{g(),y(),h(),v(),E()});
//# sourceMappingURL=commonHelpers.js.map
