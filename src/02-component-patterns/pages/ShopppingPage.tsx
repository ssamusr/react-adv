import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

import '../styles/custom-styless.css'


const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShopppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        <ProductCard 
          product={ product }
          className="bg-dark text-white"

        >
          <ProductCard.Image className="custom-image" activeClass="active"/>
          <ProductCard.Title className="text-bold"/>
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={ product }
          className="bg-dark text-white"
        >
          <ProductImage className="custom-image"/>
          <ProductTitle className="text-bold"/>
          <ProductButtons className="custom-buttons" activeClass="active" />
        </ProductCard>

        <ProductCard 
          product={ product }
          style={{
            backgroundColor: '#70D1F8'
          }}
        >
          <ProductImage 
            style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,.2)'
            }}
          />
          <ProductTitle 
            style={{
              fontSize: '20px',
              fontWeight: 'bolder'
            }}
          />
          <ProductButtons 
            style={{
              display: 'flex',
              justifyContent: 'end'
            }}
          />
        </ProductCard>

      </div>
    </div>
  )
}


