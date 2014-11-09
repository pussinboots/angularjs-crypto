"use strict"

describe "post example", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/post"
		expect(browser().location().url()).toBe "/post"

	it "check count of encrypted items to be three", -> 
		expect(repeater("div.plain").count()).toBe 1

	it "check plain name", ->
		expect(repeater("div.plain:eq(0)").column("item.name_enc")).toEqual ["COMMERZBANK AG", "XJWoMnnOlSF3tFoU4jn4gg=="]

	it "check plain value", ->
		expect(repeater("div.plain:eq(0)").column("item.value_enc")).toEqual ["1504.75", "l0gZvr5oiHds8nQpqe0Kqg=="]

	it "check encrypted name", ->
		expect(repeater("div.encrypted:eq(0)").column("item.name_enc")).toEqual [ "XJWoMnnOlSF3tFoU4jn4gg=="]

	it "check encrypted value", ->
		expect(repeater("div.encrypted:eq(0)").column("item.value_enc")).toEqual ["l0gZvr5oiHds8nQpqe0Kqg=="]