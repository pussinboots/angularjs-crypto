"use strict"
describe "get example", ->
	it "should redirect /index.html to /index.html/#/get", ->
		browser().navigateTo "/index.html"
		expect(browser().location().url()).toBe "/get"

describe "get example", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/get"
		expect(browser().location().url()).toBe "/get"

	it "check count of encrypted items to be three", -> 
		expect(repeater("div.encrypted").count()).toBe 3

	it "check encrypted name", ->
		expect(repeater("div.encrypted:eq(0)").column("item.name_enc")).toEqual ["XJWoMnnOlSF3tFoU4jn4gg=="]

	it "check encrypted value", ->
		expect(repeater("div.encrypted:eq(0)").column("item.value_enc")).toEqual ["l0gZvr5oiHds8nQpqe0Kqg=="]