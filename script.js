/**
 * Higherjess Business - Core Script File
 * Handles responsive mobile navigation, theme persistence, and click-blocking prevention.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. MOBILE INTERACTIVE NAVIGATION DRAWER
    // ==========================================================================
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Toggle the visibility class cleanly
            mobileMenu.classList.toggle('hidden');
        });

        // Closes the drawer automatically if clicking anywhere outside the active layout
        document.addEventListener('click', (e) => {
            const isMenuOpen = !mobileMenu.classList.contains('hidden');
            const clickedOutside = !mobileMenu.contains(e.target) && !menuBtn.contains(e.target);
            
            if (isMenuOpen && clickedOutside) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // ==========================================================================
    // 2. THEME ENGINE CONFIGURATION (DARK / LIGHT MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const mobileThemeToggleIcon = document.getElementById('mobile-theme-toggle-icon');

    /**
     * Toggles the theme class on the document root and commits to local storage.
     */
    function toggleMode() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        updateIcons(isDark);
    }

    /**
     * Synchronizes icon visual indicators based on active client state.
     * @param {Boolean} isDark 
     */
    function updateIcons(isDark) {
        // Desktop Navbar Interface Sync
        if (isDark) {
            if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
            if (mobileThemeToggleIcon) {
                mobileThemeToggleIcon.className = "fa-solid fa-sun text-lg text-amber-500";
            }
        } else {
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
            if (mobileThemeToggleIcon) {
                mobileThemeToggleIcon.className = "fa-solid fa-moon text-lg text-gray-500";
            }
        }
    }

    // --- INITIAL BUILD THEME CHECK ---
    // Reads explicitly stored user setting or matches system preferences fallback
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }

    // --- EVENT BINDINGS ---
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleMode);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleMode);
});