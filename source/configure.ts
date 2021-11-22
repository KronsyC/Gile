import GileOptions from "./interfaces/GileOptions";
import config from "./options";

/**
 * Convenient way to configure Gile so you dont have to repeat configuration   
 
 * *note: Setting nested properties deletes their siblings*
 * ```
 * import gile from "gile"
 *
 * gile.configure(
 * {
 *     algorithm : "RS256",
 *     secret: "superSecretString",
 *     defaults: {
 *        rol: ["user"],
 *        iss: "epicServer"
 *    }
 * })
 * ```
 * 
 * 
 */

function configure(options: GileOptions) {
  const keys = Object.keys(options)

  keys.forEach(  key => {
    
    // TODO: Implement some sort of check to replace only specific properties
    config[key] = options[key]
    
  })
}

export default configure;
