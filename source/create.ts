import options from "./options"
import jws from "jws"

/**
 * Create a new JWT with the given payload
 * 
 */
function create( payload : any ){
    if(!options.configured){
        throw new Error("Attempted to create a token, but no configuration detected")
    }
    if( !payload.iat ){
        payload.iat = Math.floor(Date.now() / 1000)
    }

    if( options.defaults ){
        // Iterate over the configured defaults, and if they are not set, set them
        Object.keys( options.defaults ).forEach( option => {
            if( !payload[option] ){
                payload[option] = options.defaults[option]
            }
        } )
    }

    const header = {
        alg: options.algorithm,
        typ: "JWT"
    }
    
    return jws.sign( { header : header, payload: payload, secret: options.secret } )
    
}

export default create