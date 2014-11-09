#!/bin/sh
node server.js&>logs/application.log
scripts/karma.sh e2esaucelabs
#stop node server not nice but worked
kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')