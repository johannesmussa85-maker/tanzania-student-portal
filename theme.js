(function(){
const KEY="tsp-theme";
const themes={light:"Light",dark:"Dark",soft:"Soft",high:"High contrast"};
function applyTheme(t){document.documentElement.classList.remove("portal-dark","portal-soft","portal-high");if(t==="dark")document.documentElement.classList.add("portal-dark");if(t==="soft")document.documentElement.classList.add("portal-soft");if(t==="high")document.documentElement.classList.add("portal-high");localStorage.setItem(KEY,t);const label=document.querySelector(".portal-theme-current");if(label)label.textContent=themes[t]||"Light";}
const saved=localStorage.getItem(KEY)||"light";applyTheme(saved);
document.addEventListener("DOMContentLoaded",function(){
const panel=document.createElement("div");panel.className="portal-theme-panel";panel.setAttribute("aria-label","Theme settings");
panel.innerHTML='<span class="portal-theme-label">Theme</span><button type="button" data-theme="light" title="Light theme">☀️</button><button type="button" data-theme="dark" title="Dark theme">🌙</button><button type="button" data-theme="soft" title="Soft theme">🌿</button><button type="button" data-theme="high" title="High contrast">◐</button>';
panel.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>applyTheme(b.dataset.theme)));document.body.appendChild(panel);
let footer=document.querySelector("footer");if(footer&&!footer.querySelector(".creator-credit")){const d=document.createElement("div");d.className="creator-credit";d.innerHTML="Produced by <strong>Johannes Mussa</strong> · Tanzania Student Portal";footer.appendChild(d);}
});
})();