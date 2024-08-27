import axios from "axios"
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import { Pair } from "../types"


export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url) //Para entrar al DATA que nos entrega la APIs

    //Validando el Data con Zod
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)
    
    if (result.success){
        return result.data
    }

    
}
export async function fetchCurrentCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptocurrency}&tsyms=${pair.currency}`
    const {data: {DISPLAY}} = await axios(url)

    //Entrando primero a la cripto y luego a la moneda
    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptocurrency][pair.currency])
    if(result.success){
        return result.data
    }
    
}