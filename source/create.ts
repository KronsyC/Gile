import config from "./options"
import jws from "jws"
import { Header, Algorithm } from "jws"
import Token from "./interfaces/Token"
import EncryptOpts from "./interfaces/EncryptOptions"
/**
 * Create a new JWT with the given payload
 *
 */
function create(payload: Token, settings: EncryptOpts = {}): string {
	const algorithm: Algorithm =
		settings.algorithm || config.algorithm || "HS256"
	const header: Header = settings.header ||
		config.header || { typ: "JWT", alg: algorithm }
	const secret: string = settings.secret || config.secret || undefined
	const privKey: string =
		settings.privateKey || config.privateKey || undefined
	const autoIat: Boolean = settings.autoIat || config.autoIat || true
	config.defaults && Object.keys(config.defaults).forEach( d => {
		
		if( payload[d] === undefined ){
			payload[d] = config.defaults[d]
		}
	} )
	console.log(payload);
	
	if (autoIat && !payload.iat) {
        payload.iat = Math.floor(Date.now()/1000)
    }
    if( payload.exp && payload.exp < Math.floor(Date.now()/1000) ){
        throw new Error("Token with expiry before current time created")
    }
	switch (algorithm) {
		case "ES256":
		case "ES384":
		case "ES512":
		case "PS256":
		case "PS384":
		case "PS512":
		case "RS256":
		case "RS384":
		case "RS512":
			// Asymmetrical
			if (!privKey) {
				throw new Error(
					"Asymmetrical Encrytion chosen but no private key defined"
				)
			}
			
			return jws.sign({
				header: header,
				payload: payload,
				privateKey: privKey,
			})
		case "HS256":
		case "HS384":
		case "HS512":
			// Symmetrical
			if (!secret) {
				throw new Error(
					"Symmetrical Encrytion chosen but no secret defined"
				)
			}
			return jws.sign({
				header: header,
				payload: payload,
				secret: secret,
			})
		case "none":
			// Insecure JWT
			return jws.sign({
				header: header,
				payload:payload
			})
	}

}

export default create
