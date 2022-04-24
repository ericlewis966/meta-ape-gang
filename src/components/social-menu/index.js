import { InstagramOutlined, TwitterOutlined } from "@ant-design/icons";
import { FooterImage } from "constants/image-constant";
import './social-menu.css';

const SocialMenu = ({ className, id }) => {

  const {NftCalendar} = FooterImage;

  return (
    <ul className={`${className} social-menu`} id={id}>
      <li>
        <a href="https://www.instagram.com/metaapegang.nft/" target="_blank">
          <InstagramOutlined />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/MetaApeGang1" target="_blank">
          <TwitterOutlined />
        </a>
      </li>
      <li>
        <a href="https://nftcalendar.io/event/meta-ape-gang-mag-ready-to-conquer-the-metaverse/" target="_blank">
          <img alt="nft-calendar" className="nft-calendar" src={NftCalendar} />
        </a>
      </li>
    </ul>
  )
}

export default SocialMenu;