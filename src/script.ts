import { exec } from "https://deno.land/x/exec@0.0.5/mod.ts";
import { TerminalSpinner } from "https://deno.land/x/spinners@v1.1.2/mod.ts";

export const script = async (what: string) => {
    const spinner = new TerminalSpinner("Installing everything!\n")

    const install = await exec(`bash -c "curl --silent  ${what} | sh -"`);
    
    console.log(install.status);

    if (install.status) {
        spinner.succeed("Done!")
    } else {
        spinner.fail("The install script returned an error code. See STDOUT for for more info.")
    }
}