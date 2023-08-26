import bcrypt from "bcrypt"

export const encodePassword = async(rawPassword)=>{
    const SALT = 10;
    return  await bcrypt.hash(rawPassword,SALT)
}


export const comparePassword = async (rawPassword, hashedPassword) => {
    if (typeof rawPassword !== 'string' || typeof hashedPassword !== 'string') {
        throw new Error('Both rawPassword and hashedPassword must be strings');
    }

    return await bcrypt.compare(rawPassword, hashedPassword);
}