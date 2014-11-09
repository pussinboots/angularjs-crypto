#!/bin/sh
node server.js&>application.log
scripts/karma.sh e2e
#stop node server not nice but worked
#kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')