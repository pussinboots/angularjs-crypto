"use strict"

describe "fullquery example", ->
	beforeEach -> 
		browser.get "#/fullquery"
		expect(browser.getCurrentUrl()).toBe "http://localhost:9000/#/fullquery"		

	it "check plain fullquery", ->
		expect(element(By.binding("plainQueryParam")).evaluate("plainQueryParam")).toEqual {name:"COMMERZBANK AG", value:12345, id:12345 }

	it "check encrypted query", ->    				
		expect(element(By.binding("query")).evaluate("query")).toEqual {query:"WZM2hwPXWx4+7SbaJpUPrh6KZl7c4lqZ/67En5tJy8DGTjW+mxDV0g8t2UtDklW4f1Ec/mr6hPf2K6V+oE/21A=="}