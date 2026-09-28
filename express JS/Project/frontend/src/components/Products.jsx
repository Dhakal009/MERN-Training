import React from 'react'
import { Card } from 'react-bootstrap'
import Raiting from './Raiting'
import { Link } from 'react-router'


function Products({product}) {
  return (
        <Card className='my-3 p-3 rounded'>
            <Card.Img src={product.image} variant='logo'/>
            <Card.Body>
                <Card.Title className='product-title'>
                    <Link to={`/products/${product.id}`}>
                    <strong>{product.name}</strong>
                    </Link>
                </Card.Title>
                    <Card.Text as='h4'>${product.price}</Card.Text>
                    <Card.Text as ="div">
                        <Raiting value={product.rating} text={product.numReviews} />
                    </Card.Text>
            </Card.Body>
        </Card>
  )
}

export default Products