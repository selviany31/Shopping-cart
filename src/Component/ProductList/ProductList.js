import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getDecrement, getIncrement, removeData } from '../../Store/Action'

function ProductList({ img, title, category, color, size, qty, price, id }) {
    const dispatch = useDispatch()

    const handleMinus = () => {
        dispatch(getDecrement(id))
    }

    const handlePlus = () => {
        dispatch(getIncrement(id))
    }

    const handleRemove = () => {
        dispatch(removeData(id))
    }

    return (
        <>
        <Row className='mb-2'>
            <Col lg={2}>
                <img 
                    src={`assets/product/${img}`}
                    alt={title}
                    width={140}
                    height={170}
                    className="rounded"
                />
            </Col>
            <Col lg={10}>
                <Row className='text-start'>
                    <Col>
                        <h5>{title}</h5>
                        <p>{category}</p>
                        <p className='mb-0'>Color: {color}</p>
                        <p>Size: {size}</p>
                    </Col>
                    <Col>
                        <div className='d-flex align-items-center justify-content-end'>
                            <div className='border border-1'>
                                <Button onClick={handleMinus} className='bg-transparent text-dark border-0 px-3 py-1'>-</Button>
                            </div>
                            <p  className='border border-1  px-3 py-1 mb-0'>{qty}</p>
                            <div className='border border-1'>
                                <Button onClick={handlePlus} className='bg-transparent text-dark border-0  px-3 py-1'>+</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='text-start'>
                    <Col>
                        <div className='d-flex'>
                            <Button onClick={handleRemove} className='bg-transparent border-0 text-dark d-flex align-items-center ps-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                </svg>
                                <span className='ms-2'>REMOVE ITEM</span>
                            </Button>
                            <Button className='bg-transparent border-0 text-dark d-flex align-items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                                <span className='ms-2'>MOVE TO WISH LIST</span>
                            </Button>
                        </div>
                    </Col>
                    <Col className='d-flex  justify-content-end'>
                        <h5>${price}</h5>
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr />
        </>
    )
}

export default ProductList