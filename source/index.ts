import configure from "./configure";
import create from "./create"
import config from "./options"

// Temp debugging function PROD: Remove
function show(){
    console.log(config)
}


export { configure, create, show };
export default { configure, create, show };

