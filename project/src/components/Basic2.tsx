import React, { useState } from 'react'

interface productData {
  name: string
  price: number
}

const Basic2: React.VFC = () => {
  // stateをobjectで指定
  const [product, setProducts] = useState<productData>({ name: '', price: 0 })
  return (
    <>
      <form>
        <input
          type="text"
          value={product.name}
          onChange={(evt) =>
            setProducts({ ...product, name: evt.target.value })
          }
        />
        <input
          type="number"
          value={product.price}
          onChange={(evt) =>
            setProducts({ ...product, price: evt.target.valueAsNumber })
          }
        />
      </form>
      <h3>Product name is {product.name}</h3>
      <h3>Product price is {product.price}</h3>
    </>
  )
}

export default Basic2
