#!/bin/sh
node server.js&>application.log
./node_modules/protractor/bin/protractor karma/protractor.conf.js
