import { Layout, Row, Col } from 'antd';
import { AboutImage } from 'constants/image-constant';
import { useEffect } from 'react';
import WOW from 'wowjs';
import './about.css';

const { Content } = Layout;
const { AboutUs } = AboutImage;

const AboutView = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return (
        <Content id='about-view'>
            <Row className="bunny-in-row" align='middle'>
                <Col id="about-text">
                    <h1 className='wow fadeInUp'>About Blase Bunny</h1>
                    <p className='wow fadeInUp' data-wow-delay=".2s">Blase Bunny is a collection of randomly-allocated NFT's found on the Ethereum Blockchain. The limited first generation consists of 10,000 unique hand-drawn artworks.</p>
                    <p className='wow fadeInUp' data-wow-delay=".4s">It's story conveys fundamental truth about the nature of knowledge, reality, and existence, especially with consideration to abstract ideology. As the narrative develops, it becomes clear that extra-terrestrial wisdom does not guarantee omipotence, and the Blase Bunny community joins the title character in mediating what success and failure mean on Earth</p>
                    <p className='wow fadeInUp' data-wow-delay=".6s">
                        Blase Bunny is a much needed symbol in the modern chaotic reality, building the creativity and imagination point of view for our younger generation and serving as a Catharsis figure for all of us.
                    </p>
                </Col>
                <span className='bunny-split' />
                <Col id="about-us" className='wow zoomInUp' data-wow-delay=".8s">
                    <img src={AboutUs} alt="about-us" />
                </Col>
            </Row>
        </Content>
    )
}

export default AboutView;