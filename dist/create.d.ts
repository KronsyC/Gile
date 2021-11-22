import TokenOpts from "./interfaces/token";
import EncryptOpts from "./interfaces/EncryptOptions";
/**
 * Create a new JWT with the given payload
 *
 */
declare function create(payload: TokenOpts, settings: EncryptOpts): void;
export default create;
