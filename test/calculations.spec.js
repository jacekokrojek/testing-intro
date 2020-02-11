var kalkulatory = require('../src/calculations-v2')

describe("wartoscLokaty", function () {

    it("powinna poprawnie liczyc odsetki z kapitalizacja roczna", () => {
        var wartosc = kalkulatory.wartoscLokaty(1000, 1, 0.1);
        expect (wartosc).toEqual(1100);
    });

});

describe("wartoscPoKapitalizacji", function () {

    it("powinna poprawnie liczyc odsetki z kapitalizacją roczna", () => {
        var wartosc = kalkulatory.wartoscPoKapitalizacji(1000, 1, 0.2, 1);
        expect (wartosc).toEqual(1200);
    });

    it("powinna poprawnie liczyc odsetki z kapitalizacją kwartalną", () => {
        var wartosc = kalkulatory.wartoscPoKapitalizacji(1000, 0.25, 0.2, 4);
        expect (wartosc).toEqual(1050);
    });

    it("powinna poprawnie liczyc odsetki dla dużych wartości", () => {
        var wartosc = kalkulatory.wartoscPoKapitalizacji(10000000, 0.5, 0.2, 2);
        expect (wartosc).toEqual(11000000);
    });

    it("powinna zwrócić błąd gdy liczba kapitalizacji jest równa 0", () => {
        function oblicz(){  kalkulatory.wartoscPoKapitalizacji(1000, 1, 0.2, 0) };
        expect (oblicz).toThrow(new Error("Liczba kapitalizacji musi byc wieksza od 0"));
    });

});

describe("podajOprocentowanie", function () {

    it("powinna podac undefine jesli kwota jest poniżej minimalej wartości", () => {
        var wartosc = kalkulatory.podajOprocentowanie(999);
        expect (wartosc).toEqual(undefined);
    });
 
    it("powinna podać oprocentowanie dla minimalnej granicy", () => {
        var wartosc = kalkulatory.podajOprocentowanie(1000);
        expect (wartosc).toEqual(0.2);
    });

    it("powinna podać oprocentowanie dla maksymalnej granicy", () => {
        var wartosc = kalkulatory.podajOprocentowanie(9999.99);
        expect (wartosc).toEqual(0.2);
    });

    it("powinna podać oprocentowanie dla kwoty bez górnej granicy", () => {
        var wartosc = kalkulatory.podajOprocentowanie(100000000);
        expect (wartosc).toEqual(0.35);
    });

});