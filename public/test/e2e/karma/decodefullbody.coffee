"use strict"

describe "decode fullbody example", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/decryptbody"
		expect(browser().location().url()).toBe "/decryptbody"

	it "check count of encrypted items to be three", -> 
		expect(repeater("div.plain").count()).toBe 1

	it "check plain name", ->
		expect(repeater("div.plain:eq(0)").column("item.name_enc")).toEqual ["COMMERZBANK AG"]

	it "check plain value", ->
		expect(repeater("div.plain:eq(0)").column("item.value_enc")).toEqual ["1504.75"]

	it "check encrypted body", ->
		expect(binding("received")).toEqual "{\"items\":[{\"name_enc\":\"COMMERZBANK AG\",\"value_enc\":\"1504.75\",\"plain\":\"Hallo\"}],\"count\":1}"