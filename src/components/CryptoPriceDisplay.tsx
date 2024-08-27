import { useMemo } from "react"
import { useCriptoStore } from "../store"
import style from "./CryptoPriceDisplay.module.css"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    
    const result = useCriptoStore((state) => state.result)
    const loading = useCriptoStore((state) => state.loading)
    const hasResult = useMemo(() => {
        if(result.LOWDAY){
            return true
        }
        else{
            return false
        }
    } , [result])

    return (
        <div className={style.resultWrapper}> 
        {loading ? <Spinner /> : 
            hasResult &&  (
                <>
                    <h2>Cotizacion</h2>
                    <div className={style.result}>
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                            alt="Imagen Cryptomoneda" />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio más alto del dia: <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del dia: <span>{result.LOWDAY}</span></p>
                            <p>Variacion ultimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}


        </div>
    )
}
