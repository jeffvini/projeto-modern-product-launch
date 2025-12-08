export function initMenu() {
    const header = document.querySelector("header");
    const menuBtn = document.querySelector("button#menu-toggle");
    let openMenu = menuBtn.getAttribute("aria-expanded") === "true";

    menuBtn.addEventListener("click", () => {
        if (!openMenu) {
            header.classList.add("expanded");
            menuBtn.classList.add('fade');
            menuBtn.setAttribute("aria-expanded", "true");
            openMenu = true;
        } else {
            header.classList.remove("expanded");
            menuBtn.setAttribute("aria-expanded", "false");
            openMenu = false;
           
            menuBtn.classList.toggle('menu-open', openMenu);
            menuBtn.classList.toggle('menu-closed', !openMenu);

        }
    });

    menuBtn.addEventListener('transitionend', () => {
    if (menuBtn.classList.contains('fade')) {
        menuBtn.classList.remove('fade');

        menuBtn.classList.toggle('menu-open', openMenu);
        menuBtn.classList.toggle('menu-closed', !openMenu);
    }
});
}