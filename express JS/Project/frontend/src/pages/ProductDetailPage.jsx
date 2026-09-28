import React from 'react'
import { useParams } from 'react-router'

function ProductDetailPage() {
  const {id} = useParams();

  return (
    <div>ProductDetailPage {id}</div>
  )
}

export default ProductDetailPage