function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("opacity-0");
    menu.classList.toggle("scale-95");
    menu.classList.toggle("invisible");
}

// Detectar el scroll para detener el botón en el footer
window.addEventListener("scroll", () => {
    const footer = document.getElementById("footer");
    const floatingMenu = document.getElementById("floating-menu");
    const footerRect = footer.getBoundingClientRect();

    if (footerRect.top <= window.innerHeight) {
        floatingMenu.classList.add("absolute");
        floatingMenu.classList.remove("fixed");
        floatingMenu.style.bottom = `${window.innerHeight - footerRect.top + 20}px`;
    } else {
        floatingMenu.classList.add("fixed");
        floatingMenu.classList.remove("absolute");
        floatingMenu.style.bottom = "20px";
    }
});

// Detectar el hover para mostrar el menú
const floatingMenu = document.getElementById("floating-menu");
const menu = document.getElementById("menu");

// Hover para mostrar el menú sin clic
floatingMenu.addEventListener("mouseenter", () => {
    menu.classList.remove("opacity-0");
    menu.classList.remove("scale-95");
    menu.classList.remove("invisible");
    menu.classList.add("opacity-100");
    menu.classList.add("scale-100");
});

floatingMenu.addEventListener("mouseleave", () => {
    // Si el menú no está abierto con clic, ocultarlo
    if (!menu.classList.contains("scale-100")) {
        menu.classList.add("opacity-0");
        menu.classList.add("scale-95");
        menu.classList.add("invisible");
    }
});