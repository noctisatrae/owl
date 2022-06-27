import { parse } from "https://esm.sh/toml";

const required: string[] = ["name", "version", "description", "script"]

export const load = async (url:string) => {

    const pkg = await (await fetch(url)).text();
    
    const owl = parse(pkg);

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

    const available: string[] = [];

    for(let i = 0; i < info.length; i++) {
        const [key, _value] = info[i]
        available.push(key);
    }

    for(let i = 0; i < data.length; i++) {
        const [key, _value] = data[i]
        available.push(key);
    }

    const check_field = required.filter(value => available.includes(value));

    if (check_field.length < required.length) {
        console.log(new Error("The required field (name, version, description, author, and script) aren't present in the file you submitted."))
        return;
    } 

    return {available:available, info:owl["Information"],  data:owl["Data"]};

}