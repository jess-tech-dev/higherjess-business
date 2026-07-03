/**
 * Higherjess Business - Core Script File
 * Handles responsive interactions & theme persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE DRAWER NAVIGATION MENU ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 2. THEME CONTROLLER (DARK / LIGHT MODE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const mobileThemeToggleIcon = document.getElementById('mobile-theme-toggle-icon');

    function toggleMode() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        updateIcons(isDark);
    }

    function updateIcons(isDark) {
        if (isDark) {
            if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
            if (mobileThemeToggleIcon) mobileThemeToggleIcon.className = "fa-solid fa-sun text-lg text-yellow-400";
        } else {
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
            if (mobileThemeToggleIcon) mobileThemeToggleIcon.className = "fa-solid fa-moon text-lg";
        }
    }

    // Check configuration on initial launch
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }

    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleMode);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleMode);
});
/**
 * Higherjess Business - Core Script File
 * Handles responsive interactions, mobile navigation, & theme persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBILE DRAWER NAVIGATION MENU ---
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- 2. THEME CONTROLLER (DARK / LIGHT MODE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    
    const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
    const mobileThemeToggleIcon = document.getElementById('mobile-theme-toggle-icon');

    function toggleMode() {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
        updateIcons(isDark);
    }

    function updateIcons(isDark) {
        // Desktop Icons
        if (isDark) {
            if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
            if (mobileThemeToggleIcon) mobileThemeToggleIcon.className = "fa-solid fa-sun text-lg text-amber-500";
        } else {
            if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
            if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
            if (mobileThemeToggleIcon) mobileThemeToggleIcon.className = "fa-solid fa-moon text-lg";
        }
    }

    // Check configuration on initial launch
    if (localStorage.getItem('color-theme') === 'dark' || 
        (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateIcons(false);
    }

    // Attach click events
    if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggleMode);
    if (mobileThemeToggleBtn) mobileThemeToggleBtn.addEventListener('click', toggleMode);
});