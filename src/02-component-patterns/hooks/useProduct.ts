import { useEffect, useRef, useState } from "react"
import { Product, onChangeArgs } from './../interfaces/interfaces';

interface useProductArgs {
  product: Product
  onChange?: ( args: onChangeArgs ) => void
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

    const[ counter, setCounter ] = useState(value)

    const isControlled = useRef( !!onChange ) //Necesito saber si la función onChange es true || undefined

    const increaseBy = (value: number) => {

      if( isControlled.current) {
        return onChange!({ count: value, product})
      }

      //Por la renderización de React, necesito saber el valor del counter pronto para la funcion del onChange
      const newValue = Math.max( counter + value, 0)
      
      //setCounter( prev ( prev + value, 0))
      setCounter(newValue)

      onChange && onChange({ count: newValue, product })
      /* ACLARACIÓN: Tenemos que estar seguro de que venga un onChange. Si no, puede venir un undefined() o un null(). Esos falsys rompen la aplicación. Funciona de tal forma de si viene un valor positivo de onChange, se ejecuta onChange() */
    }

    useEffect(() => {
      setCounter(value)
    }, [value])
    
  
  return {
    counter,
    setCounter,
    increaseBy
  }
}