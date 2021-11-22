import GileOptions from "./interfaces/GileOptions";
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
declare function configure(options: GileOptions): void;
export default configure;
