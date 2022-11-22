import React from 'react'
import product from '../screenss/product'
import { Row, Col} from 'react-bootstrap'
import Product from '../Product'

function HomeScreen() {
  return (
    <div>
          <h1>Lastest Product</h1>
        <Row>
            {product.map(product =>(
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product= {product} />
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen