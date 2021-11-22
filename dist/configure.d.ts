import GileOptions from "./interfaces/GileOptions";
/**
 * Convenient way to configure Gile so you dont have to repeat configuration
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
 * *note: Reassigned properties are replaced*
 */
declare function configure(options: GileOptions): void;
export default configure;
