import ProductCard from '../components'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/product'

import '../styles/custom-styless.css'



export const ShopppingPage = () => {

  const { onProductCountChange, shoppingCart } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

      {
        products.map( (product) => (
          <ProductCard 
            key={product.id}
            product={ product }
            className="bg-dark text-white"
            onChange={ (event) => onProductCountChange(event) }
            value={ shoppingCart[product.id]?.count || 0} //Si es nulo, entonces es cero. Si existe, es el valor de count
          >
            <ProductCard.Image className="custom-image" activeClass="active"/>
            <ProductCard.Title className="text-bold"/>
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))
      }
      </div>

      <div className="shopping-card">

        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key} 
              product={ product }
              className="bg-dark text-white"
              style={{ width: '100px'}}
              onChange={ (event) => onProductCountChange(event) }
              value={ product.count }
            >
              <ProductCard.Image className="custom-image" activeClass="active"/>
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
          ))
        }

      </div>
    </div>
  )
}


