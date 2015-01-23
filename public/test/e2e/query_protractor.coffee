"use strict"
describe "query example", ->
	it "should redirect /index.html to /index.html/#/query", ->
		browser().get "/index.html#/query"
		expect(browser().location().url()).toBe "/query"

describe "query example", ->
	beforeEach -> 
		browser().get "/index.html#/query"
		expect(browser().location().url()).toBe "/query"

	it "check plain query", ->
		expect(element(By.binding('query'))).toEqual "{\"name_enc\":\"XJWoMnnOlSF3tFoU4jn4gg==\"}"

	it "check encrypted query", ->    				
		expect(element(By.binding("plainQueryParam"))).toEqual "{\"name_enc\":\"COMMERZBANK AG\"}"
