import { useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import { NewsImage } from 'constants/image-constant';
import WOW from 'wowjs';

import './news.css';

const { ReadMoreBtn } = NewsImage;
const { Content } = Layout;

const NewsView = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return(
        <Content id="news-view">
            <Row className="bunny-in-row" justify='center'>
                <Col>
                    <h1 className='wow fadeInUp'>News</h1>
                    <ul>
                        <li>
                            <Col className='wow fadeInUp'>
                            <div className='bunny-mark'>

                            </div>
                            <h2>BAYC X BLAse bunny</h2>
                            <section>Lorem ipsum dolor sit amet, consectetuer adipscing elit, se diam nonummy rilbh euismod tincidunt ut lacreet dolore magna alliquam erat volutpet Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit loboritis nisl ut aliquip ex es</section>
                            <img src={ReadMoreBtn} alt="read-more" className='read-more'/>
                            </Col>
                        </li>
                        <li>
                            <Col className='wow fadeInUp'>
                            <div className='bunny-mark'>

                            </div>
                            <h2>BAYC X BLAse bunny</h2>
                            <section>Lorem ipsum dolor sit amet, consectetuer adipscing elit, se diam nonummy rilbh euismod tincidunt ut lacreet dolore magna alliquam erat volutpet Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit loboritis nisl ut aliquip ex es</section>
                            <img src={ReadMoreBtn} alt="read-more" className='read-more'/>
                            </Col>
                        </li>
                        <li>
                            <Col className='wow fadeInUp'>
                            <div className='bunny-mark'>

                            </div>
                            <h2>BAYC X BLAse bunny</h2>
                            <section>Lorem ipsum dolor sit amet, consectetuer adipscing elit, se diam nonummy rilbh euismod tincidunt ut lacreet dolore magna alliquam erat volutpet Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit loboritis nisl ut aliquip ex es</section>
                            <img src={ReadMoreBtn} alt="read-more" className='read-more'/>
                            </Col>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Content>
    )
}

export default NewsView;