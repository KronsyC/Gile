import configure from "./configure";
import create from "./create"
import config from "./options"
import verify from "./verify";

// Temp debugging function PROD: Remove
function show(){
    console.log(config)
}


export { configure, create, show, verify };
export default { configure, create, show, verify };

