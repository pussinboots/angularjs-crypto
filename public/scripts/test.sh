#!/bin/bash

BASE_DIR=`dirname $0`
echo "hallo"
echo BASE_DIR
java -jar "$BASE_DIR/../test/lib/jstestdriver/JsTestDriver.jar" \
     --config "$BASE_DIR/../config/jsTestDriver.conf" \
     --basePath "$BASE_DIR/.." \
     --tests all \
     --reset
