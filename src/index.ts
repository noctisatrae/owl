import p from "https://esm.sh/phin";
import { parse } from "https://esm.sh/toml"

async function load(url:string) {
    const pkg = await p({
        url: url,
        parse: "string"
    });
    
    const owl = parse(pkg.body);

    // Information
    const name: string = owl["Information"].name
    const version: string = owl["Information"].version
    const description: string = owl["Information"].description
    const homepage: string = owl["Information"].homepage

    // Data
    const files: string = owl["Data"].files
    const script: string = owl["Data"].script
    const checksum: string = owl["Data"].checksum

    return {info:[name, version, description, homepage], data:[]};
}

