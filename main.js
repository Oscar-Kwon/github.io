class nav extends HTMLElement {
    async connectedCallback() {
        try {
            const template = `
                <div class="nav-bar">
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
                        <!-- 추가된 섹션 -->
                        <div class="nav-icons">
                            <a href="https://www.instagram.com/luckyspot.kr" 
                               onclick="window.open(this.href, '_blank'); return false;">
                                <img id="instagram" src="Name=logoInstagram.svg" alt="Instagram">
                            </a>
                            <a href="https://www.luckyspot.in" 
                               onclick="window.open(this.href, '_blank'); return false;">
                                <img id="home" src="Name=home.svg" alt="Homepage">
                            </a>
                        </div>
                    </div>
                </div>`;

            this.innerHTML = template;
        } catch (error) {
            console.error('Nav 컴포넌트를 로드하는데 실패했습니다:', error);
        }
    }
}

customElements.define("custom-nav", nav);
