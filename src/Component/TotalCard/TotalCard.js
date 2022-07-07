import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function TotalCard() {
    const { data } = useSelector((state) => state.content)

    const getTotal = (value) => {
        return value?.reduce(
            (previousValue, currentValue) =>
                previousValue + (currentValue?.qty * currentValue?.price || 0),
            0
        );
    };

    const totalResult = Math.round(getTotal(data)*100)/100;
    return (
        <>
            <div className='shadow-sm p-3'>
                <h5 className='text-start'>The total amount of</h5>
                <Row>
                    <Col className='text-start'>
                        <p>Temporary Amount</p>
                        <p className='mb-0'>Shipping</p>
                    </Col>
                    <Col className='text-end'>
                        <p>${totalResult}</p>
                        <p className='mb-0'>Free</p>
                    </Col>
                </Row>
                <hr />
                <Row className='mb-3'>
                    <Col className='text-start'>
                        <h5 className='mb-0'>The total amount</h5>
                        <h5 className='mb-0'>(Include TAX)</h5>
                    </Col>
                    <Col className='text-end'>
                        <h5>${totalResult}</h5>
                    </Col>
                </Row>
                <Button className='w-100'>GO TO CHECKOUT</Button>
            </div>

            <div className="shadow-sm mt-3 p-3 d-flex justify-content-between align-items-center">
                <p className='mb-0'>Add 2 discount code (optional)</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </>
    )
}

export default TotalCard