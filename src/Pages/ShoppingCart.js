import React, { useEffect } from 'react'
import Header from '../Component/Header/Header'
import ProductList from '../Component/ProductList/ProductList'
import { Row, Col } from 'react-bootstrap'
import dataProduct from '../Data/productList'
import TotalCard from '../Component/TotalCard/TotalCard'
import { useDispatch, useSelector } from 'react-redux'
import { getDataProduct } from '../Store/Action'

function ShoppingCart() {
    const dispatch = useDispatch()

    const { data } = useSelector((state) => state.content)
    console.log(data);

    return (
        <div>
            <Header title={"Shopping Cart"} />
            <div className='p-5'>
                <Row>
                    <Col lg={8}>
                        <div className="shadow-sm p-3">
                            <h5 className='text-start mb-3'>Cart ({data.length} Items)</h5>
                            {data.map((item, i) => (
                                <ProductList 
                                    key={i}
                                    id={item.id}
                                    img={item.img}
                                    title={item.name}
                                    category={item.category}
                                    color={item.color}
                                    size={item.size}
                                    qty={item.qty}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </Col>
                    <Col lg={4}>
                        <TotalCard />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ShoppingCart