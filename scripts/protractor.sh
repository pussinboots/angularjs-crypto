#!/bin/sh
node server.js&>application.log
protractor karma/protractor.conf.js
