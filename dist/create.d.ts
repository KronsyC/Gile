import Token from "./interfaces/Token";
import EncryptOpts from "./interfaces/EncryptOptions";
/**
 * Create a new JWT with the given payload
 *
 */
declare function create(payload: Token, settings?: EncryptOpts): string;
export default create;
