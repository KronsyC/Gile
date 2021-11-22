import EncryptOpts from "./EncryptOptions"
import DecryptOpts from "./DecryptOptions"

interface GileOptions extends EncryptOpts, DecryptOpts{
    defaults?  : object;
    [key: string]: any; // Dirty fix, replace if you can
}

export default GileOptions