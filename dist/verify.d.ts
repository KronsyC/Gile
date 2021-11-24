import DecryptOptions from "./interfaces/DecryptOptions";
import Token from "./interfaces/Token";
import TokenF from "./interfaces/TokenF";
/**
 * Verify a token, ensuring that it matches your secret/key,
 * returns a payload depending on return options

 * returns null if the token is invalid
 */
declare function verify(token: string, options?: DecryptOptions): Token | TokenF | null;
export default verify;
