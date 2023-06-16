import Nav from "../components/nav";
import Carousels from "../components/Carousels";
import Feature from "../components/Feature"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ShoppingCartOutlined, HeartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
function Home() {
    const { Meta } = Card;
    return (
        <>
            <Nav />
            <Carousels />
            <Feature />
            <Tabs>
                <TabList className="d-flex justify-content-center">
                    <Tab className=" btn-light rounded-3-pointer ">BEST SELLER</Tab>
                    <Tab className="btn btn-light rounded-3-pointer mx-4 ">SUGGESTED products</Tab>
                    <Tab className=" btn-light rounded-3-pointer ">ON SALE</Tab>
                </TabList>

                <TabPanels className="d-flex justify-content-center mt-5 mb-5" >
                    <TabPanel>
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
                                                        src="https://i0.wp.com/www.7pets.net/wp-content/uploads/2023/05/Petshine-Wipes-Yellow.jpg?w=1000&ssl=1"
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
                    </TabPanel>
                    {/* ******************* */}
                    <TabPanel>
                    <div className="d-flex justify-content-center mt-5 text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-4 col-sm-6">
                                    <img style={{width:'350px'}} src="https://i0.wp.com/www.7pets.net/wp-content/uploads/2021/07/3.png?resize=595%2C595&ssl=1" alt="" />
                                </div>
                                <div className="col-12 col-md-4 col-sm-6">
                                    <img style={{width:'350px'}} src="https://i0.wp.com/www.7pets.net/wp-content/uploads/2021/07/3.png?resize=595%2C595&ssl=1" alt="" />
                                </div>
                                <div className="col-12 col-md-4 col-sm-6">
                                    <img style={{width:'350px'}} src="https://i0.wp.com/www.7pets.net/wp-content/uploads/2021/07/3.png?resize=595%2C595&ssl=1" alt="" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
export default Home;