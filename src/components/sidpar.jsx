import './component.css'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Accordion from 'react-bootstrap/Accordion';
import Dog from "../assest/img/catigories/pets/dog.png"
import Cat from "../assest/img/catigories/pets/cat.png"
import Fish from "../assest/img/catigories/pets/fish.png"
import Bird from "../assest/img/catigories/pets/birds.png"
import Shop from "../assest/img/catigories/place/shop.png"
import Vet from "../assest/img/catigories/place/vet.png"
import Profile from "../assest/img/catigories/place/profile.png"
import { Link } from 'react-router-dom';
function Sidpar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div style={{ marginTop: '-30px' }} onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            {/* ************************ */}
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>NAVIGATION</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion>
                        {/* ****************** */}
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <div className='d-flex'>

                                    <img src={Dog} alt="" />
                                    <div className='fs-4 text-pink ms-3 fw-normal'>Dog</div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link className='text-decoration-none' to={'/dog-accessories'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>accessories</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-beds'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Beds</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-food'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Food</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-flea'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>flea & ticks</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-grooming'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>grooming</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-pharmacy'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Pharmacy & vitamins</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-toys'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>toys</li>

                                </Link>

                                <Link className='text-decoration-none' to={'/dog-treats'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>treats & biscuits</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/dog-wetFood'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>wet food</li>

                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ****************** */}
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>
                                <div className='d-flex'>

                                    <img src={Cat} alt="" />
                                    <div className='fs-4 text-pink ms-3 fw-normal'>Cat</div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link className='text-decoration-none' to={'/cat-accessories'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>accessories</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-beds'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Beds</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-food'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Food</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-flea'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>flea & ticks</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-grooming'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>grooming</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-pharmacy'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Pharmacy & vitamins</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-toys'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>toys</li>

                                </Link>

                                <Link className='text-decoration-none' to={'/cat-treats'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>treats & biscuits</li>

                                </Link>
                                <Link className='text-decoration-none' to={'/cat-wetFood'}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>wet food</li>

                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ****************** */}
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                <div className='d-flex'>

                                    <img src={Fish} alt="" />
                                    <div className='fs-4 text-pink ms-3 fw-normal'>Fish</div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link  className='text-decoration-none' to={"/fish-accessories"}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>accessories</li>
                                </Link>
                                <Link  className='text-decoration-none'to={"/fish-food"}>
                                    <li className='fs-5 text-pink ms-3 fw-normal'>Food</li>
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ****************** */}
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                <div className='d-flex'>

                                    <img className='ms-2' src={Bird} alt="" />
                                    <div className='fs-4 text-pink ms-3 fw-normal'>Bird</div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Link  className='text-decoration-none'to={"/bird-accessories"}>
                                
                                <li className='fs-5 text-pink ms-3 fw-normal'>accessories</li>
                                </Link>
                                <Link  className='text-decoration-none'to={"/bird-food"}>
                                
                                <li className='fs-5 text-pink ms-3 fw-normal'>Food</li>
                                </Link>
                                <Link className='text-decoration-none' to={"/bird-pharmacy"}>
                                <li className='fs-5 text-pink ms-3 fw-normal'>Pharmacy & vitamins</li>
                                
                                </Link>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ****************** */}
                        <Link className='text-decoration-none' to={'/shop'}>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                    <div className='d-flex'>
                                        <img className='ms-2' src={Shop} alt="" />
                                        <div className='fs-4 text-pink ms-3 fw-normal'>Shop</div>

                                    </div>
                                </Accordion.Header>
                            </Accordion.Item>
                        </Link>
                        {/* ****************** */}
                        <Link className='text-decoration-none' to={'/vets'}>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>
                                    <div className='d-flex'>

                                        <img className='ms-2' src={Vet} alt="" />
                                        <div className='fs-4 text-pink ms-3 fw-normal'>Vet</div>

                                    </div>
                                </Accordion.Header>
                            </Accordion.Item>
                        </Link>
                        {/* ****************** */}
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>
                                <div className='d-flex'>

                                    <img className='ms-2' src={Profile} alt="" />
                                    <div className='fs-4 text-pink ms-3 fw-normal'>My Profile</div>

                                </div>
                            </Accordion.Header>
                            <Accordion.Body>
                                <li className='fs-5 text-pink ms-3 fw-normal'>account details</li>
                                <li className='fs-5 text-pink ms-3 fw-normal'>Logout</li>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* ****************** */}
                    </Accordion>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default Sidpar