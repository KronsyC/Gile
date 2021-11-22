import GileOptions from "./interfaces/GileOptions";
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
declare function configure(opts: GileOptions): void;
export default configure;
