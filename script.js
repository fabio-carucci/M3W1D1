// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter"
// sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al
// caricamento della pagina, automticamente.

document.addEventListener("DOMContentLoaded", () => {document.querySelector("aside div.p-4:last-child ol li:nth-child(2) a").remove();});

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente
// elemento padre dal DOM cliccando sul link "Continua a leggere".

document.addEventListener("DOMContentLoaded", () => {

    let myText = "Continua a leggere";

    document.querySelectorAll('*').forEach( (node) => {
        node.textContent.includes(myText) ? node.classList.add("myTextFinded") : null;
    });

    document.querySelectorAll("a.myTextFinded").forEach(anchorFinded => {
        anchorFinded.addEventListener("click", () => {
          anchorFinded.parentNode.remove();
        });
      });
});

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome
// dell'autore ogni volta che il cursore passa sopra l'autore del post.

document.querySelectorAll("div.blog-post h2 + p a").forEach((author) => {
    author.addEventListener("mouseover", () => {
        let myText = author.textContent;
        alert(myText);
    })
})