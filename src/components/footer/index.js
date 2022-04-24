import { Layout, Row, Col } from "antd";
import { FooterImage } from "constants/image-constant";
import "./footer.css";
import BunnyMenu from "components/menus";
import SocialMenu from "components/social-menu";

const { Footer } = Layout;
const {FooterLogo, Bunny, NftCalendar } = FooterImage;

const BunnyFooter = () => {
  return (
    <Footer id="bunny-footer">
      <Col className="bunny-in-row">
        <Row id="footer-main-row" align="middle" className="space-between">
          <img src={FooterLogo} alt="logo" className="bunny-logo" />
          <BunnyMenu id="footer-menu"/>
          <img src={Bunny} alt="bunny" className="footer-bunny" />
        </Row>
        <Row id="social-row" justify="end">
         <SocialMenu id="social-menu"/>
        </Row>
        <Row id="meta-info" className="space-between">
          <h4>Metaapegang Initiatives</h4>
          <h4>metaapegang@all right reserved</h4>
        </Row>
      </Col>
    </Footer>
  );
};

export default BunnyFooter;
