import { Layout, Row } from "antd";
import BunnyMenu from "components/menus";
import SocialMenu from "components/social-menu";
import { HeaderImage } from "constants/image-constant";
import './header.css';

const { Header } = Layout;
const { GorilaHeaderLogo } = HeaderImage;


const BunnyHeader = () => {
    return (
        <Header id="bunny-header">
            <Row className="bunny-in-row" id="header-bg" align="middle">
                <img src={GorilaHeaderLogo} alt="bunny-logo" className="header-logo" />
                <span id="header-split" style={{
                    flex:"1"
                }}/>
                <BunnyMenu id="header-menu"/>
                <SocialMenu id="social-menu"/>
            </Row>
        </Header>
    )
}

export default BunnyHeader;