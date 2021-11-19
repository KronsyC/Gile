import GileOptions from "./interfaces/GileOptions";
import options from "./options";

/**
 * This function configures gile, Always call this function before using any gile features, otherwise you will be thrown an Error
 * usage example:
 * ```
 * import gile from "gile"
 *
 * gile.configure(
 * {
 *     algorithm : "RS256",
 *     secret: "superSecretString"
 * })
 * ```
 */
function configure(opts: GileOptions) {
  if (!opts.algorithm) opts.algorithm = "HS256"; // Use hmac sha-256 by default
  Object.keys(opts).forEach((key) => {
    options[key] = opts[key];
  });
  options.configured = true;
}

export default configure;
