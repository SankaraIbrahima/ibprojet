// **********************  debut de ligne de code  ***********************************************//

// Exercice 1

function length_chaine(){
    var texte = document.getElementById("chaine").value ;
    var taille_chaine = texte.length ;
    document.getElementById("longueur_text").innerText="La longueur du texte saisi est de "+ taille_chaine + " caractères";
}

//Écrivez un autre script pour extraire une sous-chaîne de caractères de la chaîne saisie, par exemple, les trois premiers caractères. 

function sous_chaine(){
    var souschaine = document.getElementById("chaine").value ;
    
    var pcarac =souschaine.substring(0,3) ;
    document.getElementById("extrait").innerText = "Les trois premières caractères du texte saisi sont : " + pcarac ;
    
}

//Exercice 2

//Écrivez un script JavaScript qui calcule et affiche la racine carrée du nombre saisi dans une balise <p>
function racine_carre(){
    nb_saisi = document.getElementById("nombre").value ;
    nb_carre = Math.sqrt(nb_saisi) ;
    document.getElementById("affiche_nb").innerText = "La racine carrée du nombre saisi est : "+ nb_carre ;
    arrond = Math.round(nb_carre) ;
    document.getElementById("arrondi").innerText= "L'arrondi de la racine carrée du nombre saisi est "+ arrond ;
}

function Aleatoire(){
    var nb_alea = Math.floor(Math.random() * 100 + 1) ;
    document.getElementById("alea").innerText = "Le nombre aleatoire entre 1 et 100 est : " + nb_alea ;

}

function Aleatoire2(min, max){
    min = document.getElementById("minimum").value ;
    max = document.getElementById("maximum").value ;
    nb_plage_alea = Math.floor(Math.random() * (max - min + 1) + min) ;
    document.getElementById("plage_alea").innerText = "Le nombre aléatoire entre les minimum et le maximum saisi est : "+ nb_plage_alea ;

}

//Exercice 3

function af_date(){

    datesaisie = document.getElementById("date_saisie").value ;

if(datesaisie){

    date_s = new Date(datesaisie) ;
    jour = date_s.getDate() ;
    mois = date_s.getMonth() + 1 ;
    annee = date_s.getFullYear() ;
    document.getElementById("jour").textContent = "Le jour de la date saisie est : " + jour;
    document.getElementById("mois").textContent = "Le mois de la date saisie est : " + mois;
    document.getElementById("annee").textContent = "L'année de la date saisie est : " + annee;
} else {
    alert("saisir la date")
    }

}
// Calcul de la difference entre la date saisie et la date d'aujourd'hui

function Diff_date() {
    
    const dateSaisie = document.getElementById("date_saisie").value;

    if (dateSaisie) {
       
        const date1 = new Date(dateSaisie); 
        const date2 = new Date();
        const difference_Ms = Math.abs(date2 - date1);
        const difference_jour = Math.ceil(difference_Ms / (1000 * 60 * 60 * 24));
        document.getElementById("difference").textContent = "La différence entre la date saisie et la date d'aujourd'hui est : " + difference_jour + " jours";
    } else {
        alert("Veuillez sélectionner une date !");
    }
}

//Exercice 4

function af_Heure() {
   
    const heur_actu = new Date();
    const heures = String(heur_actu.getHours()).padStart(2, '0'); 
    const minutes = String(heur_actu.getMinutes()).padStart(2, '0');
    const secondes = String(heur_actu.getSeconds()).padStart(2, '0');
    
    
    document.getElementById("horloge").value = `${heures}:${minutes}:${secondes}`;
    
    
    setTimeout(af_Heure, 1000);
}
af_Heure();

//Exercice 5
let tableau = new Array(12, 5, 20, 8, 15) ;

// Fonction pour mettre à jour l'affichage du tableau

function afTableau() {
    document.getElementById("tableau_act").textContent = "Tableau mis à jour : " + JSON.stringify(tableau);
}

// Ajout
function ajouterElement() {
    const nouvelElement = document.getElementById("nouvelElement").value;
    if (nouvelElement !== "") {
        tableau.push(Number(nouvelElement)); 
        afTableau(); 
    } else {
        alert("Veuillez saisir un nombre à ajouter.");
    }
}

// Suppression
function supElement() {
    const elementSupp = document.getElementById("elementSup").value;
    if (elementSupp !== "") {
        const index = tableau.indexOf(Number(elementSupp));
        if (index !== -1) {
            tableau.splice(index, 1);
            afTableau(); 
        } else {
            alert("Élément non trouvé dans le tableau.");
        }
    } else {
        alert("Veuillez saisir un nombre à supprimer.");
    }
}

// Trier
function trierTab() {
    tableau.sort((a, b) => a - b); 
    afTableau(); 
}

afTableau();



//Exercice 6
 
function PaiementPret(){
    const montantp = document.getElementById("montant").value ;
    const tauxp = document.getElementById("taux").value ;
    const dureep = document.getElementById("duree").value ;

    if (montantp < 0 || tauxp < 0 || dureep < 0) {
        document.getElementById("paiement").textContent = "Veuillez entrer des valeurs positives pour tous les champs.";
        return;
    }
    const payementM = montantp * ((tauxp/1200) * (1 + (tauxp/1200)) ** (dureep * 12))/ ((1 + (tauxp/1200)) ** (dureep * 12)-1) ;

    const payementmensuel = payementM.toFixed(2) ;
    document.getElementById("paiement").textContent = "Le montant du paiement mensuel du prêt hypothécaire est : " + payementmensuel ;
}

// *************************** Fin de ligne de code ***********************************************//