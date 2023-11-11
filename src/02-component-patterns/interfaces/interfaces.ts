import { CSSProperties, ReactElement } from "react"
import { Props as ProductButtonsProps } from '../components/ProductButtons'
import { Props as ProductImageProps } from '../components/ProductImage'
import { Props as ProductTitleProps } from '../components/ProductTitle'

export interface Product {
    id: string
    title: string
    img?: string
}

export interface ProductInCart extends Product {
    count: number
  }

export interface ProductCardProps {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
    onChange?: (args: onChangeArgs ) => void
    value?: number
}
    
export interface ProductContextProps {
    counter: number
    increaseBy: (value: number) => void
    product: Product
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Buttons: ( Props : ProductButtonsProps) => JSX.Element
  Image: ( Props : ProductImageProps) => JSX.Element
  Title: ( Props : ProductTitleProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product
    count: number
}


