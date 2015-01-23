#!/bin/bash

base_folder="~"

install()
{
	#Check if win_host_fixes folder already exists
	if [ ! -d ~/win_host_fixes ]; then
		mkdir ~/win_host_fixes
	fi
}

create()
{
	name="$base_folder/win_host_fixes/$$"

	while [ -d "$name" ]
	do
		name="$base_folder/win_host_fixes/$$"
	done

	eval "mkdir $name"

	eval "ln -s $name $1"
}

if [ -d $1 ]; then
	echo "Folder already exists, or no folder informed at all..."
else
	install
	create $1
fi