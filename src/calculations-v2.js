module.exports = {

    wartoscPoKapitalizacji: function (kapital, czas, oprocentowanie, kapitalizacjiWRoku) {
        if (kapitalizacjiWRoku === 0)
            throw new Error('Liczba kapitalizacji musi byc wieksza od 0')
        var wartosc = kapital * Math.pow(1 + (oprocentowanie / kapitalizacjiWRoku), czas * kapitalizacjiWRoku);
        return wartosc
    },

    wartoscLokaty: function (kapital, czas, oprocentowanie) {
        return this.wartoscPoKapitalizacji(kapital, czas, oprocentowanie, 1);
    },

    podajOprocentowanie: function (kapital) {
        var progi = [
            { wartoscMin: 0, wartoscMax: 1000, oprocentowanie: undefined },
            { wartoscMin: 1000, wartoscMax: 10000, oprocentowanie: 0.2 },
            { wartoscMin: 10000, wartoscMax: 25000, oprocentowanie: 0.25 },
            { wartoscMin: 25000, wartoscMax: 50000, oprocentowanie: 0.3 },
            { wartoscMin: 50000, wartoscMax: Number.MAX_VALUE, oprocentowanie: 0.35 }
        ]
        var wlasciwyProg = progi.filter(function (prog) {
            return prog.wartoscMin <= kapital && kapital < prog.wartoscMax;
        })
        return wlasciwyProg.pop().oprocentowanie;
    }

}
