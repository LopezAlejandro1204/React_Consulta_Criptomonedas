import { create } from 'zustand'
import {devtools} from 'zustand/middleware'
import { Cryptocurrency, CryptoPrice, Pair } from './types'
import { getCryptos, fetchCurrentCryptoPrice } from './services/CryptoService'

//----type para dar forma
type CryptoStore = {
    cryptocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean

    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>

}
//Para manejar el State --- zustand
export const useCriptoStore = create<CryptoStore>()(devtools((set) => ({ // es para escribir
    // Parte del state
    cryptocurrencies: [],
    result: {} as CryptoPrice, // Es como decirle que ese objeto lo trate como CryptoPrice
    loading: false,
    //----Acciones

    fetchCryptos: async () => { //---es asincrona porque de la funcion que obtenemos el dato es asincron
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },

    //---Llamdo a la API y  lo incerta en el state de Zustand
    fetchData: async (pair) => {
        set(() => ({
            
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({

            result,
            loading:false
        }))
    }
})))