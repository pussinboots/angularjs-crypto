"use strict"
describe "query example", ->
	it "should redirect /index.html to /index.html/#/query", ->
		browser().navigateTo "/index.html#/query"
		expect(browser().location().url()).toBe "/query"

describe "query example", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/query"
		expect(browser().location().url()).toBe "/query"

	it "check plain query", ->
		expect(binding("query.name")).toEqual "{\"name_enc\":\"XJWoMnnOlSF3tFoU4jn4gg==\"}"

	it "check encrypted query", ->    				
		expect(binding("plainQueryParam.name")).toEqual "{\"name_enc\":\"COMMERZBANK AG\"}"
