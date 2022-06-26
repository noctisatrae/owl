import p from "https://esm.sh/phin";
import { parse } from "https://esm.sh/toml"
import { exec } from "https://deno.land/x/exec/mod.ts";

const required: string[] = ["name", "version", "description", "script"]

const load = async (url:string) => {

    const pkg = await p({
        url: url,
        parse: "string"
    });
    
    const owl = parse(pkg.body);

    /*

    Information
    const name: string = owl["Information"].name
    const version: string = owl["Information"].version
    const description: string = owl["Information"].description
    const homepage: string = owl["Information"].homepage

    Data
    const files: string = owl["Data"].files
    const script: string = owl["Data"].script
    const checksum: string = owl["Data"].checksum


    return {info:[name, version, description, homepage], data:[files, script, checksum]};

    */

    const info = Object.entries(owl["Information"]);
    const data = Object.entries(owl["Data"]);

    let available: string[] = [];

    for(let i = 0; i < info.length; i++) {
        let [key, value] = info[i]
        available.push(key);
    }

    for(let i = 0; i < data.length; i++) {
        let [key, value] = data[i]
        available.push(key);
    }

    const check_field = required.filter(value => available.includes(value));

    if (check_field.length < required.length) {
        console.log(new Error("The required field (name, version, description, author, and script) aren't present in the file you submitted."))
        return;
    } 

    return {available:available, info:owl["Information"],  data:owl["Data"]};

}

let pkg = await load("https://cdn.statically.io/gh/noctisatrae/owl/master/test/files/some-package.toml");

let install = await exec(`bash -c "curl --silent  ${pkg?.data.script} | sh -"`);

await console.log(install.status)