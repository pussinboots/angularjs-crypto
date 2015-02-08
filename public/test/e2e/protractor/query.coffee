"use strict"
describe "query example", ->
	it "should redirect /index.html to /index.html/#/query", ->
		browser.get "#/query"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/query"

describe "query example", ->
	beforeEach -> 
		browser.get "#/query"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/query"

	it "check plain query", ->
		browser.waitForAngular();
		expect(element(By.binding("query")).evaluate("query")).toEqual {name_enc:"XJWoMnnOlSF3tFoU4jn4gg=="}
  
	it "check encrypted query", ->    				
		browser.waitForAngular();
		expect(element(By.binding("plainQueryParam")).evaluate("plainQueryParam")).toEqual {name_enc:"COMMERZBANK AG"}