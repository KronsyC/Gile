import DecryptOptions from "./interfaces/DecryptOptions";
import Token from "./interfaces/Token";
import TokenF from "./interfaces/TokenF";
/**
 * Reads a token's value regardless of signature
 * returns a payload depending on return options

 * returns null if the token is invalid
 */
declare function read(token: string, options?: DecryptOptions): Token | TokenF | null;
export default read;
