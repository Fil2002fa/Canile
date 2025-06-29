const params = new URLSearchParams(window.location.search);
const nomeCane = params.get("cane"); // es. "beta"

if (nomeCane) {
    document.getElementById("nome-cane").textContent = nomeCane;
    document.getElementById("foto-cane").src = `fotocani/${nomeCane}.jpg`;

    // Oggetto con le informazioni dei cani (senza duplicati!)
    const informazioni = {
        "beta": {
            descrizione: "Beta è una cagnolona affettuosa e piena di gioia. Purtroppo con gli anni sono emersi dei problemi di salute che interessano le zampe posteriori. Nonostante questo, ama uscire in area di sgambamento.",
            anno: "2016",
            razza: "Meticcio di pastore tedesco",
            sesso: "Femmina"
        },
        "black": {
            descrizione: "Black è un cucciolo vivace e giocherellone, perfetto per famiglie con bambini.",
            anno: "2018",
            razza: "Meticcio di pastore tedesco",
            sesso: "Maschio"
        },
        "bobo": {
            descrizione: "Bobo è un cane tranquillo che ama le passeggiate nel parco.",
            anno: "2013",
            razza: "Meticcio di pastore tedesco",
            sesso: "Maschio"
        },
        "cesare": {
            descrizione: "Cesare è un cane tranquillo che ama le passeggiate nel parco.",
            anno: "2021",
            razza: "Meticcio",
            sesso: "Maschio"
        },
        "dado": {
            descrizione: "Vi ricordate di Dado? È passato del tempo da quando questo dolcissimo Amstaff è entrato nelle nostre vite, ma la sua forza e voglia di vivere ci insegnano ogni giorno cosa significa non arrendersi mai.Dado, recuperato anni fa davanti al cimitero di San Giorgio in Bosco, oggi ha 6 anni. Nonostante la sua semiparalisi e la necessità di essere aiutato ogni giorno a urinare e defecare, continua a vivere con il sorriso negli occhi e la voglia di correre – sì, con il suo carrellino speciale – come qualsiasi altro cane più fortunato.",
            anno: "2019",
            razza: "Amstaf",
            sesso: "Maschio"
        },
        "danny": {
            descrizione: "Danny- età 2021- è sempre stato un cane diffidente, ma allo stesso tempo curioso. Incapace di capire come relazionarsi con noi in modo sereno, ma è soprattutto tanto spaventato dal guinzaglio. Davide l'ha aiutato a gestire le sue emozioni facendogli scoprire la dolcezza di una carezza e la bellezza di una passeggiata o di una corsetta in area sgambamento.",
            anno: "2021",
            razza: "Meticcio",
            sesso: "Maschio"
        },
        "fanny": {
            descrizione: "Fanny è un cane tranquillo che ama le passeggiate nel parco.",
            anno: "2016",
            razza: "Pastore Tedesco",
            sesso: "Maschio"
        },
        "jimmy": {
            descrizione: "Jimmy è un cagnolino che ci ha dato davvero tante soddisfazioni. Quando è arrivato non si fidava di nessuno e non apprezzava che qualcuno di avvicinasse. Ha fatto grandi progressi anche grazie ad un percorso che sta affrontando con il nostro educatore.",
            anno: "2011",
            razza: "Meticcio",
            sesso: "Maschio"
        },
        "jockey": {
            descrizione: "Cagnolino pieno di vita e voglia di zampettare. Allegro e simpatico cerca una casa con la possibilità di stare anche in giardino. ",
            anno: "2014",
            razza: "Meticcio",
            sesso: "Maschio"
        },
        "lulù": {
            descrizione: "Lulù è un cagnolino che ci ha dato davvero tante soddisfazioni. Quando è arrivato non si fidava di nessuno e non apprezzava che qualcuno di avvicinasse. Ha fatto grandi progressi anche grazie ad un percorso che sta affrontando con il nostro educatore.",
            anno: "2023",
            razza: "Meticcio",
            sesso: "Femmina"
        },
        "silver": {
            descrizione: "Silver è un cagnolino che ci ha dato davvero tante soddisfazioni. Quando è arrivato non si fidava di nessuno e non apprezzava che qualcuno di avvicinasse. Ha fatto grandi progressi anche grazie ad un percorso che sta affrontando con il nostro educatore.",
            anno: "2010",
            razza: "Meticcio",
            sesso: "Maschio"
        },
        "tobia": {
            descrizione: " Tobia, arrivato con i due fratelli, è il più timido e timoroso. Si sta aprendo alla conoscenza, sempre più curioso e spinto dall'esempio dei fratelli, ma ancora spaventato e per questo abbaia più dei fratelli. Sicuramente la compagnia di un altro cane in casa lo può aiutare.",
            anno: "2020",
            razza: "Meticcio",
            sesso: "Maschio"
        },
        "zeus": {
            descrizione: "Ciao sono Zeus e vorrei raccontarvi la mia storia. Ho passato i primi quattro anni della mia vita chiuso in un box, in un ambiente privo di stimoli, facendo pochissime esperienze del mondo esterno. Per questo quando sono arrivato in canile ero molto spaventato, non mi fidavo delle persone, non accettavo il guinzaglio e negli spazi grandi mi bloccavo. ",
            anno: "2018",
            razza: "Bracco tedesco",
            sesso: "Maschio"
        },
        


    };

    // Recupera le informazioni del cane
    const infoCane = informazioni[nomeCane];

    if (infoCane) {
        document.getElementById("descrizione-cane").textContent = infoCane.descrizione;
        document.getElementById("anno").textContent = `Anno di nascita: ${infoCane.anno}`;
        document.getElementById("razza").textContent = `Razza: ${infoCane.razza}`;
        document.getElementById("sesso").textContent = `Sesso: ${infoCane.sesso}`;
    } else {
        document.getElementById("descrizione-cane").textContent = "Descrizione non disponibile.";
        document.getElementById("razza").textContent = "Razza: Non disponibile.";
        document.getElementById("anno").textContent = "Anno: Non disponibile.";
        document.getElementById("sesso").textContent = "Sesso: Non disponibile.";
    }
} else {
    document.body.innerHTML = "<h1>Errore: Cane non trovato</h1>";
}
