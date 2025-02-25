'use client'
import React, { use } from 'react'



type TestProps = {
    products: {
        products: {
            id: number,
            title: string
        }[]
    }
}

const Test = ({ products }: TestProps) => {

    console.log("productosss", products)
    
    return (
        <div>
            <h1>Test de API</h1>
            {products?.products?.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                </div>
            ))}
        </div>
    )
}

export default Test