// Exemplo de interatividade: Adicionar um botão para mostrar/ocultar seções
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        const heading = section.querySelector("h2");
        heading.addEventListener("click", () => {
            section.classList.toggle("collapsed");
        });
    });
});

// Função para colapsar/expandir seções
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector(".content");
    const arrow = section.querySelector("h2");

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.innerHTML = arrow.innerHTML.replace("▲", "▼"); // Altera o ícone
    } else {
        content.style.display = "block";
        arrow.innerHTML = arrow.innerHTML.replace("▼", "▲"); // Altera o ícone
    }
}

// Função para destacar a seção ativa na navegação
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(link => link.classList.remove("active"));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add("active");
        });
    });
});