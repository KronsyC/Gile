import config from "./options"
import jws from "jws"
import DecryptOptions from "./interfaces/DecryptOptions"
import Token from "./interfaces/Token"
import TokenF from "./interfaces/TokenF"

function verify(
	token: string,
	options: DecryptOptions = {}
): Token | TokenF | null {
	const decoded = jws.decode(token)
	if (!decoded) return null
	const alg = decoded.header.alg
	const secOrKey =
		alg === "ES256" ||
		alg == "ES384" ||
		alg === "ES512" ||
		alg === "PS256" ||
		alg === "PS384" ||
		alg === "PS512" ||
		alg === "RS256" ||
		alg === "RS384" ||
		alg === "RS512"
			? options.publicKey || config.publicKey || undefined
			: alg === "HS256" || alg === "HS384" || alg === "HS512"
			    ? options.secret || config.secret || undefined
			    : options.secret || config.secret

	const returnHeader = options.returnHeader || config.returnHeader || false
    
	if (secOrKey && jws.verify(token, alg, secOrKey)) {
		// All good
		if( alg==="none"){
            
            if( secOrKey === "" ){
                const warn = config.warnings || true
                if(warn){
                    console.error("Your secret is \"\", so tokens with no signature will pass successfully, it is recommended to add a non-empty secret to prevent this behavior")
                }
                if (returnHeader) {
                    return {
                        header: decoded.header,
                        payload: decoded.payload,
                    }
                } else {
                    return decoded.payload
                }
            }
            return null
        }
		if (returnHeader) {
			return {
				header: decoded.header,
				payload: decoded.payload,
			}
		} else {
			return decoded.payload
		}
	} else if (secOrKey === null) {
	} else if (secOrKey === undefined) {
		console.log(secOrKey)
		throw new Error("No decode algorithm provided to verify()")
	} else {
		// Its an invalid secOrKey String
		return null
	}
	return {}
}

export default verify
