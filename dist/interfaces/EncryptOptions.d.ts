import { Header, Algorithm } from "jws";
interface EncryptionOptions {
    algorithm?: Algorithm;
    secret?: string;
    privateKey?: string;
    header?: Header;
}
export default EncryptionOptions;
