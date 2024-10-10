import { jwtVerify } from 'jose'

const getJwtSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey){
        throw new Error('Jwt bulunamadı!');
    }

    return new TextEncoder().encode(secretKey)
}

export async function verifyJwtToken(token : string) {
    try {
        //const tokenResult = await jwtVerify(token, getJwtSecretKey())
        const { payload } = await jwtVerify(token, getJwtSecretKey())

        return payload
    } catch (error) {
        console.log("token doğrularnırken (verify) edilirken bir hata oluştu! hata = ", error);

        return null;
    }
}