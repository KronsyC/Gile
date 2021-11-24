import Token from "./Token";
import { Header } from "jws";
interface TokenF {
    header: Header;
    payload: Token;
}
export default TokenF;
