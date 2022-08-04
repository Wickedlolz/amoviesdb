import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './Brands.module.css';

function Brands() {
    return (
        <>
            <Row xs={2} md={5} className="g-3 p-2">
                <Col key={1}>
                    <div className="card bg-white text-white p-1">
                        <video autoPlay loop playsInline>
                            <source src="/videos/marvel.mp4" type="video/mp4" />
                        </video>
                        <div
                            className={`card-img-overlay ${styles['overlay-card']}`}
                        >
                            <img
                                src={'/images/marvel.png'}
                                className="card-img"
                                alt="marvel"
                            />
                        </div>
                    </div>
                </Col>
                <Col key={2}>
                    <div className="card bg-white text-white p-1">
                        <video autoPlay loop playsInline>
                            <source src="/videos/disney.mp4" type="video/mp4" />
                        </video>
                        <div
                            className={`card-img-overlay ${styles['overlay-card']}`}
                        >
                            <img
                                className="card-img"
                                src="/images/disnep.png"
                                alt="disnep"
                            />
                        </div>
                    </div>
                </Col>
                <Col key={3}>
                    <div className="card bg-white text-white p-1">
                        <video autoPlay loop playsInline>
                            <source src="/videos/pixar.mp4" type="video/mp4" />
                        </video>
                        <div
                            className={`card-img-overlay ${styles['overlay-card']}`}
                        >
                            <img
                                src={'/images/pixar.png'}
                                className="card-img"
                                alt="pixar"
                            />
                        </div>
                    </div>
                </Col>
                <Col key={4}>
                    <div className="card bg-white text-white p-1">
                        <video autoPlay loop playsInline>
                            <source
                                src="/videos/star-wars.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div
                            className={`card-img-overlay ${styles['overlay-card']}`}
                        >
                            <img
                                src={'/images/starwars.png'}
                                className="card-img"
                                alt="starwars"
                            />
                        </div>
                    </div>
                </Col>
                <Col key={5}>
                    <div className="card bg-white text-white p-1">
                        <video autoPlay loop playsInline>
                            <source
                                src="/videos/national-geographic.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div
                            className={`card-img-overlay ${styles['overlay-card']}`}
                        >
                            <img
                                src={'/images/national-geographic.png'}
                                className="card-img"
                                alt="starwars"
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Brands;
