import { Header, Algorithm } from "jws";
interface EncryptionOptions {
    algorithm?: Algorithm;
    secret?: string;
    privateKey?: string;
    header?: Header;
    autoIat?: Boolean;
}
export default EncryptionOptions;
