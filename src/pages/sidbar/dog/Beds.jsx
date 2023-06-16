import Nav from "../../../components/nav";
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
function Dogbeds(){
    const { Meta } = Card;
    return(
        <>
        <Nav />
        <div className="d-flex justify-content-center mt-5" >
            
                <div className="fs-1 fw-bold">
                Beds

                </div>
            </div>
            <div className="d-flex justify-content-center mt-5 text-center">
                <div className="container w-100">
                    <div className="row">
                        <div className="col-12 col-md-3 mb-5 col-sm-6">
                            <Card
                                style={{ width: 250, }}
                                cover={
                                    <div className="d-flex justify-content-center">

                                        <img
                                            style={{ height: '230px', width: '200px' }} alt="example"
                                            src="https://i0.wp.com/www.7pets.net/wp-content/uploads/2022/12/7.jpg?resize=450%2C637&ssl=1"
                                        />
                                    </div>
                                }
                                actions={[
                                    <ShoppingCartOutlined key="cart" />, <HeartOutlined key="heart" />]}>
                                <Meta title="Naomi Pet Hair Brush" description="EGP140.00" />
                            </Card>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Dogbeds;