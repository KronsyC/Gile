import EncryptOpts from "./EncryptOptions";
import DecryptOpts from "./DecryptOptions";
interface GileOptions extends EncryptOpts, DecryptOpts {
    defaults?: object;
}
export default GileOptions;
