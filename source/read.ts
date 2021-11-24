import DecryptOptions from "./interfaces/DecryptOptions";
import Token from "./interfaces/Token";
import TokenF from "./interfaces/TokenF";
import jws from "jws"
/**
 * Reads a token's value regardless of signature     
 * returns a payload depending on return options

 * returns null if the token is invalid
 */
 function read(token: string,options: DecryptOptions = {}): Token | TokenF | null {
    var jwt;
    try{
        jwt = jws.decode(token)
    }
    catch{
        return null
    }

    if(!jwt) return null

    if( options.returnHeader ){
        return {
            header: jwt.header,
            payload: jwt.payload
        }
    }
    else{
        return jwt.payload
    }

 }

 export default read