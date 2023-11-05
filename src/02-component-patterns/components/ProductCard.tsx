import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'

import styles from '../styles/styles.module.css'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'



export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style }: ProductCardProps) => {

  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div 
        className={ `${styles.productCard} ${className}`}
        style={style}
      >

        { children }

        {/* <ProductImage img={product.img}/>

        <ProductTitle title={product.title} />
        
        <ProductButtons 
          increaseBy={ increaseBy} 
          counter={ counter} 
        /> */}    
        
      </div>
    </Provider>
  )
}