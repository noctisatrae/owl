import p from "https://esm.sh/phin";
import {parse} from "https://esm.sh/toml"

const owl = await p({
    url:"https://gist.githubusercontent.com/noctisatrae/4d17c610b960bfbb7079f5b54bd462a1/raw/9870b6316b7f0eb796e8139c8d64e90f1a9f1719/package.toml",
    parse: "string"
});
const parsed_owl = parse(owl.body);

console.log(parsed_owl);