
function Validoi(form) {
    document.getElementById("halytysKentta").innerHTML = ""

    if (TarkistaKentat() == true) {
        document.getElementById("halytysKentta").innerHTML = "Lomake lähetetty"
    }
    
}

function TarkistaKentat() {
    const kayttajaId = form.Kayttaja.value;
    const salasana = form.Salasana.value;
    const nimi = form.Nimi.value;
    const osoite = form.Osoite.value;
    const maa = form.Maa.value;
    const postinumero = form.Postinumero.value;
    const sahkoposti = form.Sahkoposti.value;
    const sukupuoli = form.Sukupuoli.value;
    const kieli = document.querySelectorAll('input[type="checkbox"]')

    // Käyttäjä

    if (kayttajaId == "") {
        document.getElementById("halytysKentta").innerHTML = "Käyttäjä ID tyhjä";
        return false;

    } else if (kayttajaId.length < 6) {
        document.getElementById("halytysKentta").innerHTML = "Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä";
        return false;
    }

    // Salasana

    if (salasana == "") {
        document.getElementById("halytysKentta").innerHTML = "Salasana tyhjä";
        return false;
    }

    // Nimi

    if (nimi == "") {
        document.getElementById("halytysKentta").innerHTML = "Nimi tyhjä";
        return false;
    }

    // Osoite

    if (osoite == "") {
        document.getElementById("halytysKentta").innerHTML = "Osoite tyhjä";
        return false;
    }

    // Maa

    if (maa == "Valitse") {
        document.getElementById("halytysKentta").innerHTML = "Valitse maa";
        return false;
    }

    // Postinumero

    if (postinumero.length == 0) {
        document.getElementById("halytysKentta").innerHTML = "Postinumero tyhjä";
        return false
    } else if (isNaN(postinumero)) {
        document.getElementById("halytysKentta").innerHTML = "Postinumerossa ei saa olla kirjaimia";
        return false;

    } else if (postinumero.length != 5) {
        document.getElementById("halytysKentta").innerHTML = "Postinumeron kuuluu olla 5 merkkiä pitkä";
        return false;
    }

    // Sähköposti

    if (sahkoposti == "") {
        document.getElementById("halytysKentta").innerHTML = "Sähköposti tyhjä";
        return false;
    } else if (!(sahkoposti.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))) {
        document.getElementById("halytysKentta").innerHTML = "Säkhöposti ei ole säkhöpostiosoitteen muotoinen";
        return false
    }

    if (sukupuoli == "") {
        document.getElementById("halytysKentta").innerHTML = "Valitse sukupuoli";
        return false;
    }

    let onkoKieltaValittu = false;
    kieli.forEach(Kieli => {
        if (Kieli.checked) {
            onkoKieltaValittu = true;
        }
    });

    if (onkoKieltaValittu) {
        return true;
    } else {
        document.getElementById("halytysKentta").innerHTML = "Valitse kieli"
    }
}