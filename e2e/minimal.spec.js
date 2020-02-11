describe('Kalkulator', function () {

	function sendKeys(el, text) {
		el.clear();
		el.sendKeys(text);
	}

	it('powinien zmienić oczekiwaną kwotę jeśli użytkownik poda nowe wartości i naciśnie przycisk Oblicz', function () {
		browser.driver.get('http://localhost:3000/index.html');
		sendKeys(element(by.id('input_kwota')), 1000);
		sendKeys(element(by.id('input_czas')), 1);
		element(by.id('calculate')).click();
		expect(element(by.id("message")).getText()).toEqual("Wartość lokaty po 1 roku to 1200PLN");
	});

});
