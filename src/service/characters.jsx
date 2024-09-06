import CryptoJS from "crypto-js"

const timeStamp = new Date().getTime()
const private_api_key = '91b7b2d2c9a5fedbe3aad5bdbfda7bfa0dbe33e7'
const public_api_key = '997bd8a36b490b20529a1ceff369053f'

const hash = CryptoJS.MD5(timeStamp + private_api_key + public_api_key).toString();

export const reqCharacters = async (pagina, buscarPer) => {
    const offset = (pagina -1)*20
    let url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}`;
    buscarPer !== null && buscarPer !== ""
    ? (url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${buscarPer}`)
    : null;

    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data)
    return data
    }


