"use strict"
describe "builds", ->
	it "should redirect /index.html to /index.html/#/get", ->
		browser().navigateTo "/index.html"
		expect(browser().location().url()).toBe "/get"
describe "build with eleven test suites", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/get"
		expect(browser().location().url()).toBe "/get"
	it "ten builds are display", -> 
		expect(repeater("div.encrypted").count()).toBe 3
	#todo added test of correct link to testsuite, link to travis and correct error
	it "check encrypted name", ->
		expect(repeater("div.encrypted:eq(0)").column("item.name_enc")).toEqual ["XJWoMnnOlSF3tFoU4jn4gg=="]
	it "check encrypted value", ->
		expect(repeater("div.encrypted:eq(0)").column("item.value_enc")).toEqual ["l0gZvr5oiHds8nQpqe0Kqg=="]