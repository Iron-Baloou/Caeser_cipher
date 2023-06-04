function verschlüsseln() {
  let eingabeText = document.getElementById("input").value;
  let verschiebungsWert = parseInt(document.getElementById("shift").value);

  let cryptText = [];

  for (let i = 0; i < eingabeText.length; i++) {
    let zeichen = eingabeText[i];
    console.log(zeichen);
    if (istBuchstabe(zeichen)) {
      let code = zeichen.charCodeAt(0);
      let verschobenerCode = code + verschiebungsWert;
      console.log(code, verschobenerCode);

      if (istGroßbuchstabe(zeichen) && verschobenerCode > 90) {
        verschobenerCode = verschobenerCode - 26;
      }

      if (istKleinbuchstabe(zeichen) && verschobenerCode > 122) {
        verschobenerCode = verschobenerCode - 26;
      }

      zeichen = String.fromCharCode(verschobenerCode);
    }

    cryptText += zeichen;
  }

  document.getElementById("output").value = cryptText;
}

function istBuchstabe(zeichen) {
  return istGroßbuchstabe(zeichen) || istKleinbuchstabe(zeichen);
}

function istGroßbuchstabe(zeichen) {
  return zeichen >= 'A' && zeichen <= 'Z';
}

function istKleinbuchstabe(zeichen) {
  return zeichen >= 'a' && zeichen <= 'z';
}

function istZahl(zeichen) {
  return zeichen >= '0' && zeichen <= '9';
}

function reset() {
  document.getElementById("input").value = "";
  document.getElementById("shift").value = "";
  document.getElementById("output").value = "";
}

