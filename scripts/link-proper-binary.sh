#!/bin/bash

cd jq-releases

if [[ $(uname) =~ ^Darwin ]]; then
    ln -s jq-osx-amd64 jq
else
    if [[ $(uname) == MINGW* ]]; then
        rm -f jq jq.cmd
        ln -s jq-win32.exe jq
        ln -s jq-win32.exe jq.cmd
    else
        if [[ $(uname -m) =~ i686 ]]; then
            ln -s jq-linux32 jq
        else
            ln -s jq-linux64 jq
        fi
    fi
fi
