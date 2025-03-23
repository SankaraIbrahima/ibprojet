console.log("Salut les amis") ;
/* validation du formulaire */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        let prenom = document.getElementById("prenom").value.trim();
        let nom = document.getElementById("nom").value.trim();
        let sujet = document.getElementById("subject").value.trim();
        let description = document.getElementById("describe").value.trim();
        
        if (prenom === "" || nom === "" || sujet === "" || description === "") {
            alert("Veuillez remplir tous les champs obligatoires.");
            event.preventDefault(); // Empêche l'envoi du formulaire
        }
    });
});

