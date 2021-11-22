import GileOptions from "./interfaces/GileOptions";
import opts from "./options";

/**
 * Configure gile, Always call this function before using any gile features, otherwise you will be thrown an Error
 * 
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
 * *note: Reassigned properties are replaced and not appended*
 */
function configure(options: GileOptions) {
  if (!options.algorithm) options.algorithm = "HS256"; // Use hmac sha-256 by default
  Object.keys(options).forEach((key) => {
    options[key] = options[key];
  });
  opts.configured = true;
}

export default configure;
