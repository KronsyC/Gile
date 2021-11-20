import jws from "jws"
import options from "./options"
import read from "./read"
/**
 * Return True if a token has the specified role, otherwise false
 */
function role( token: string, role: string ) : Boolean{
    if(!options.configured){
        throw new Error("Attempted to create a token, but no configuration detected")
    }
    if(jws.isValid(token) && jws.verify(token, options.algorithm, options.secret)){
        const data : any = read(token)
        console.log("Valid");
        
        if( data.roles ){
            
            if( typeof(data.roles) === "string" && data.roles === role ) return true
            else if( Array.isArray( data.roles ) && data.roles.includes(role) ) return true
            else return false
        }
    }
    else{
        return false
    }
}
export default role