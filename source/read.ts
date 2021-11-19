import jws from "jws"

/**
 * Read a Tokens Paylad without verifying the signature, returns undefined if the JWT is invalid
 * 
 * 
 */
function read( token: string ) : object{
    if(jws.isValid(token)){
        return jws.decode(token).payload
    }
    else{
        return undefined
    }
}
export default read