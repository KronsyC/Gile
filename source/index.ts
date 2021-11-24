import configure from "./configure";
import create from "./create"
import config from "./options"
import verify from "./verify";
import read from "./read";
// Temp debugging function PROD: Remove
function show(){
    console.log(config)
}


export { configure, create, show, verify, read };
export default { configure, show, create, verify, read };

