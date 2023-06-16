import Dog from "../assest/img/Feature Catigory/dog.png"
import Fish from "../assest/img/Feature Catigory/fish.png"
import Cat from "../assest/img/Feature Catigory/cat.png"
import Bird from "../assest/img/Feature Catigory/b.png"
import { Link } from "react-router-dom";
function Feature() {
    return (
        <>
            <div className="d-flex justify-content-center mt-5" >

                <div className="fs-1 fw-bold">Feature Categories</div>
            </div>
            <div className="d-flex justify-content-center mt-5 text-center">
                <div className="container w-100">
                    <div className="row">
                        {/* ******************* */}

                        <div className="col-12 col-md-3 mb-5 col-sm-6">
                            <Link to={'/dogs-products'}>
                                <img style={{ width: '200px' }} className="" src={Dog} alt="" />

                            </Link>
                        </div>
                        {/* ******************* */}
                        <div className="col-12 col-md-3 mb-5 col-sm-6">
                            <Link to={'/cats-products'}>
                                <img style={{ width: '200px' }} src={Cat} alt="" />
                            </Link>

                        </div>
                        {/* ******************* */}

                        <div className="col-12 col-md-3 mb-5 col-sm-6">
                            <Link to={'/fish-products'}>
                                <img style={{ width: '200px' }} src={Fish} alt="" />
                            </Link>

                        </div>
                        {/* ******************* */}

                        <div className="col-12 col-md-3 mb-5 col-sm-6">
                            <Link to={'/Bird-products'}>
                                <img style={{ width: '200px' }} className="" src={Bird} alt="" />
                            </Link>
                        </div>
                        {/* ******************* */}

                    </div>
                </div>
            </div>
        </>
    )
}
export default Feature;