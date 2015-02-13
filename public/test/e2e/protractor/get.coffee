"use strict"
describe "get example", ->
	beforeEach -> 
		browser.get "/"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/get"

	it "check count of encrypted items to be three", -> 
		expect(element.all(By.repeater('item in received.items')).count()).toBe 3

	it "check encrypted name", ->
		expect(element.all(By.repeater('item in received.items').column('item.name_enc')).get(0).getText()).toEqual "XJWoMnnOlSF3tFoU4jn4gg=="

	it "check encrypted value", ->
		expect(element.all(By.repeater('item in received.items').column('item.value_enc')).get(0).getText()).toEqual "l0gZvr5oiHds8nQpqe0Kqg=="