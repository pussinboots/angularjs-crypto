"use strict"

describe "fullbody example", ->
	beforeEach -> 
		browser().navigateTo "/index.html#/fullbody"
		expect(browser().location().url()).toBe "/fullbody"

	it "check count of encrypted items to be three", -> 
		expect(repeater("div.plain").count()).toBe 1

	it "check plain name", ->
		expect(repeater("div.plain:eq(0)").column("item.name_enc")).toEqual ["COMMERZBANK AG"]

	it "check plain value", ->
		expect(repeater("div.plain:eq(0)").column("item.value_enc")).toEqual ["1504.75"]

	it "check encrypted body", ->
		expect(binding("send.body")).toEqual "7fF8WOaj2HNvqhnOgvCNWFlxbNFX3N2Fi13ueR/Fe5kT5/pZGp1oVUw+ZYIgv7ST/Ke4+F5/8JXQI87/mpHVlNF6UrYEHrqAnj0gewtcwQ20lf+Kc4aSaXwJN8XJuNYy"