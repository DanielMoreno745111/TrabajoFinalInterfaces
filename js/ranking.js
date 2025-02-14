document.querySelectorAll("button").forEach(button => {
    let textParts = button.innerHTML.split("<br>");
    button.innerHTML = textParts[0]; // Solo mantiene la parte antes del <br>
});
