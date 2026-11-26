const menuButton = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#huvudmeny');
const compactLayout = window.matchMedia('(max-width: 52rem)');

function setMenuOpen(open) {
  mainMenu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? 'Stäng meny' : 'Meny';
}

function syncMenuLayout() {
  setMenuOpen(!compactLayout.matches);
}

menuButton.addEventListener('click', () => setMenuOpen(mainMenu.hidden));
mainMenu.addEventListener('click', (event) => {
  if (compactLayout.matches && event.target.closest('a')) setMenuOpen(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && compactLayout.matches && !mainMenu.hidden) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
if (compactLayout.addEventListener) compactLayout.addEventListener('change', syncMenuLayout);
else compactLayout.addListener(syncMenuLayout);
syncMenuLayout();
menuButton.hidden = false;
