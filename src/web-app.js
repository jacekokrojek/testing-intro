function generujKomunikat(czas, wartosc) {
    var message;
    if (!wartosc) {
        message = 'Nie można otworzyć lokaty dla podanych parametrów';
    }
    else if (czas === 1) {
        message = 'Wartość lokaty po 1 roku to ' + wartosc + 'PLN';
    } else {
        message = 'Wartość lokaty po ' + czas + ' latach to ' + wartosc + 'PLN';
    }
    var html = '<p class="lead" style="font-size: 1.8rem;">' + message + '</p>'
    return html;
}

function generujHtml(message) {
    var html = '<h2>Dowiedz się więcej o eLokacie</h2> ' +
      message +
      '<div class="clearFix"></div>'
    return html;
}
