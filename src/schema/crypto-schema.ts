import {z} from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

//---Esquema de la respuesta de la API
export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({
        FullName: z.string(),
        Name: z.string()
    })
})
//---LO ponemos en array por que la respuesta de la APi lo es
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)

//Schema del Pair
export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

//Schema de la consulta final de la crypto

export const CryptoPriceSchema = z.object({
    IMAGEURL : z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string()
}) 


