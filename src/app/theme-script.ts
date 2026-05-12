/** Key for localStorage; keep in sync with `themeInitScript` literal below. */
export const THEME_STORAGE_KEY = 'portfolio-theme';

/** Inline in root layout to avoid flash of wrong theme before React hydrates. */
export const themeInitScript = `(()=>{try{var k='portfolio-theme';var s=localStorage.getItem(k);var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;
