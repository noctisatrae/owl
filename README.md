[![Deno](https://github.com/noctisatrae/owl/actions/workflows/deno.yml/badge.svg)](https://github.com/noctisatrae/owl/actions/workflows/deno.yml)
# owl - the community-driven TOML package manager
owl is predicated on TOML package file which holds an install script znd everything you need to know about what you're trying to install.

## Get started
In order to install Owl, you should use the most recent binaries in the **[release section]**(https://github.com/noctisatrae/owl/releases). 

## Usage
```bash
./owl --load <URL>
```

## Create a package
Just copy-past this and make it accessible on the internet:

```toml
[Information]
name = "some package."
version = "0.1"
description = ""
[Data]
script = "<url to install script>"
```

You can read some examples at `test/files`. I managed to install Zellij (awesome terminal multiplexer) just using one command!  