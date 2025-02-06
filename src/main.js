import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { BreakingBadApps } from './breakingbad/breakinbad-apps'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id= "app-title">Bienvenidos a información sobre el servicio de Breack bad</h1>
    <div class="card">
      
    </div>
  </div>
`
const elemt = document.querySelector('.card');

BreakingBadApps(elemt);

