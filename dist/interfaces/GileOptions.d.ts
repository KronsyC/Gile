import EncryptOpts from "./EncryptOptions";
import DecryptOpts from "./DecryptOptions";
interface GileOptions extends EncryptOpts, DecryptOpts {
    defaults?: object;
    warnings?: Boolean;
    [key: string]: any;
}
export default GileOptions;
