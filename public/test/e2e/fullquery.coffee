"use strict"
describe "fullquery example", ->
	it "should redirect /index.html to /index.html/#/fullquery", ->
		browser().navigateTo "/index.html#/fullquery"
		expect(browser().location().url()).toBe "/fullquery"

describe "fullquery example", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/fullquery"
		expect(browser().location().url()).toBe "/fullquery"

	it "check plain fullquery", ->
		expect(binding("plainQueryParam")).toEqual "{\"name\":\"COMMERZBANK AG\",\"value\":12345,\"id\":12345}"

	it "check encrypted query", ->    				
		expect(binding("query")).toEqual  "WZM2hwPXWx4+7SbaJpUPrh6KZl7c4lqZ/67En5tJy8DGTjW+mxDV0g8t2UtDklW4f1Ec/mr6hPf2K6V+oE/21A=="
