function Product(props) {
console.log(props);
const {products} = props;
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={products.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">{products.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )

}
export default Product;