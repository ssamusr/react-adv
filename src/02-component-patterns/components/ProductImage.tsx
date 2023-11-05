import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export interface Props {
  img?: string
  className?: string
  activeClass?: string
  style?: CSSProperties
}

export const ProductImage = ({img = '', className, style}: Props) => {

    /* Puede venir tres valores:
      1. Por la definición de la propiedad como atributo
      2. Que la imagen venga en el producto
      3. Que no venga ninguna imagen --> No Product Image
    */
  
    const { product } = useContext( ProductContext )
  
    /* let imgToShow: string
    
    if( img ) {
      imgToShow = img
    } else if ( product.img ) {
      imgToShow = product.img
    } else {
      imgToShow = noImage
    } */
  
    return (
      <img 
        src={img || product.img || noImage} 
        alt="Product Image" 
        className={ `${styles.productImg} ${className}`}
        style={style}
      />
    )
  }