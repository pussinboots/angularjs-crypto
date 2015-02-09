"use strict"

describe "decode fullbody example", ->
	beforeEach -> 
		browser.get "#/decryptbody"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/decryptbody"

	it "check count of encrypted items to be three", -> 
		expect(element.all(By.repeater('item in data.items')).count()).toBe 1

	it "check plain name", ->
		expect(element.all(By.repeater('item in data.items').column('item.name_enc')).get(0).getText()).toEqual "COMMERZBANK AG"

	it "check plain value", ->
		expect(element.all(By.repeater('item in data.items').column('item.value_enc')).get(0).getText()).toEqual "1504.75"

	it "check encrypted body", ->
		expect(element(By.binding("received")).evaluate("received.items")).toEqual  [{name_enc:"COMMERZBANK AG" ,value_enc:"1504.75",plain:"Hallo"}]