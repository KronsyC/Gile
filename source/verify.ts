import jws from "jws"
import options from "./options"

/**
 * Read a Tokens Paylad and verifies the signature, returns undefined if the JWT is invalid
 * 
 * 
 */
function verify( token: string ) : any{
    if(!options.configured){
        throw new Error("Attempted to create a token, but no configuration detected")
    }
    if(jws.isValid(token) && jws.verify(token, options.algorithm, options.secret)){
        return jws.decode(token).payload
    }
    else{
        return undefined
    }
}
export default verify