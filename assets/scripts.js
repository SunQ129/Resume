// 等待文檔載入完成
document.addEventListener('DOMContentLoaded', function() {
    // 導航列活躍項目標記
    highlightActiveNavItem();
    
    // 技能進度條動畫
    animateSkillBars();
    
    // 表單驗證
    setupFormValidation();
    
    // 平滑滾動
    setupSmoothScroll();
    
    // 響應式行為
    handleResponsiveBehavior();
});

// 標記當前頁面的導航項目
function highlightActiveNavItem() {
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation || 
            (linkPath === '/' && currentLocation === '/index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

// 技能進度條動畫
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    if (progressBars.length > 0) {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 200);
        });
    }
}

// 設定表單驗證
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        }, false);
    });
}

// 平滑滾動設定
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 處理響應式行為
function handleResponsiveBehavior() {
    // 在小螢幕上摺疊導航列
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        document.addEventListener('click', function(event) {
            const isNavbarOpen = navbarCollapse.classList.contains('show');
            const clickedInsideNavbar = navbarCollapse.contains(event.target);
            const clickedToggler = navbarToggler.contains(event.target);
            
            if (isNavbarOpen && !clickedInsideNavbar && !clickedToggler) {
                navbarToggler.click();
            }
        });
    }
} 