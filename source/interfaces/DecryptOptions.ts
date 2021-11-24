interface DecryptOptions{
    returnHeader? : boolean; // Should the function return the JWT header within the object
    publicKey? : string; // The Public Key if asymetric encryption is used
    secret? : string;

}

export default DecryptOptions