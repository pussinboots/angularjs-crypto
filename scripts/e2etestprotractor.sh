#!/bin/sh
node server.js&>application.log
./node_modules/protractor/bin/webdriver-manager update
sleep 10
echo "start selenium"
scripts/selenium.sh &
sleep 5
scripts/protractor.sh
#stop node server not nice but worked
kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')
