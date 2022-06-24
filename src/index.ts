import p from "https://esm.sh/phin";
import { parse } from "https://esm.sh/toml"

const pkg = await p({
    url:"https://cdn.statically.io/gh/noctisatrae/owl/master/test/files/some-package.toml",
    parse: "string"
});

const owl = parse(pkg.body);