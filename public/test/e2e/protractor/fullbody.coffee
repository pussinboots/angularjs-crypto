"use strict"

describe "fullbody example", ->
	beforeEach -> 
		browser.get "#/fullbody"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/fullbody"	

	it "check count of encrypted items to be three", ->
		expect(element.all(By.repeater('item in data.items')).count()).toBe 1

	it "check plain name", ->
		expect(element.all(By.repeater('item in data.items').column('item.name_enc')).get(0).getText()).toEqual "COMMERZBANK AG"

	it "check plain value", ->
		expect(element.all(By.repeater('item in data.items').column('item.value_enc')).get(0).getText()).toEqual "1504.75"

	it "check encrypted body", ->
		expect(element(By.binding("send.body")).evaluate("send.body")).toEqual "7fF8WOaj2HNvqhnOgvCNWFlxbNFX3N2Fi13ueR/Fe5kT5/pZGp1oVUw+ZYIgv7ST/Ke4+F5/8JXQI87/mpHVlNF6UrYEHrqAnj0gewtcwQ20lf+Kc4aSaXwJN8XJuNYy"