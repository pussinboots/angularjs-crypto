"use strict"

describe "post example", ->
	beforeEach -> 
		browser.get "#/post"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/post"

	it "check count of encrypted items to be three", -> 
		expect(element.all(By.repeater('item in data.items')).count()).toBe 1

	it "check plain name", ->
		expect(element.all(By.repeater('item in data.items').column('item.name_enc')).get(0).getText()).toEqual "COMMERZBANK AG"

	it "check plain value", ->
	    expect(element.all(By.repeater('item in data.items').column('item.value_enc')).get(0).getText()).toEqual "1504.75"

	it "check encrypted name", ->
	    expect(element.all(By.repeater('item in send.items').column('item.name_enc')).get(0).getText()).toEqual "XJWoMnnOlSF3tFoU4jn4gg=="

	it "check encrypted value", ->
	    expect(element.all(By.repeater('item in send.items').column('item.value_enc')).get(0).getText()).toEqual "l0gZvr5oiHds8nQpqe0Kqg=="