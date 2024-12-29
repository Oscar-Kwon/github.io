class nav extends HTMLElement {
    async connectedCallback() {
        
     
     try {

         const template =  `<div class="nav-bar">
             <div class="nav-bar">
                 <a href="down.html" target="_self">
                     <i class="fa-solid fa-circle-arrow-down" alt="nav-icon"></i> 배경다운
                 </a>
                 <a href="index.html" target="_self">
                     <i class="fa-solid fa-gift" alt="nav-icon"></i> 행운뽑기
                 </a>
                 <a href="music.html" target="_self">
                     <i class="fa-solid fa-gift" alt="nav-icon"></i> 음악듣기
                 </a>
             </div>
         </div>`

         this.innerHTML = template;
     } catch (error) {
         console.error('Nav 컴포넌트를 로드하는데 실패했습니다:', error);
         }
     }
 }
 customElements.define("custom-nav", nav);