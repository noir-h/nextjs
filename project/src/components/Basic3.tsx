import React, { useState } from 'react'

interface test<T> {
  id: T
  name: T
}

const Basic3: React.VFC = () => {
  const [products, setProducts] = useState<any>([])

  const newProducts = () => {
    setProducts([
      ...products,
      {
        id: products.length,
        name: 'Hello React',
      },
    ])
  }
  return (
    <div>
      <button onClick={newProducts}>Add New Product </button>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            {product.name} id: {product.id}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Basic3
