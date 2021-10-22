import React from 'react'
import { Container, Image, Row, Col } from 'react-bootstrap'

export default function About(props) {
    return (
        <Container fluid className="background">
            <div className="top-container flex">
                <Row className="mb-3"><h2>About</h2></Row>
                <Row>
                    <Col>
                        <Image src="https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png" roundedCircle />
                    </Col>

                    <Col>
                        <h3>Yeet!</h3>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}
