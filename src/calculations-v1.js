module.exports = {
    
    wartoscLokaty: function (kapital, czas, oprocentowanie) {
        return  kapital * Math.pow(1 + oprocentowanie , czas);    
    }

}
