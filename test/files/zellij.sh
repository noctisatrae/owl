#!/bin/bash
# bool function to test if the user is root or not (POSIX only)
is_user_root () { [ "$(id -u)" -eq 0 ]; }

if is_user_root; then
    echo 'You are the almighty root!'
    wget https://github.com/zellij-org/zellij/releases/download/v0.30.0/zellij-x86_64-unknown-linux-musl.tar.gz -P /tmp
    tar -xf /tmp/zellij-x86_64-unknown-linux-musl.tar.gz
    mv ./zellij /bin
    echo "Zellij has been installed!"
    exit 0 # implicit, here it serves the purpose to be explicit for the reader
else
    echo 'You need run this script as root!' >&2
    exit 1
fi