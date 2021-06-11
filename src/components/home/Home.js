import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../Particle'

export default function Home(props) {
    return (
        <Container fluid className="background">
            <Particle />
            <div className="top-container flex">
                <h1>Hi! I'm Jack Doherty</h1>
            </div>
        </Container>
    )
}
