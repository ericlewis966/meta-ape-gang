import { React, useEffect, useRef, useState } from "react";
import { Layout, Row, Col, Slider } from "antd";
import Swal from "sweetalert2";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import BigNumber from "bignumber.js";
import NFTArtifact from "constants/abi/NFT.json";

import { injected } from "configs/connectors";
import CollectionSwiper from "components/swiper";
import { accountProcess } from "components/utils";
import { SharedMedia } from "constants/media-contstant";
import {
  HeaderImage,
  SharedImage,
  TeamImage,
  FractionImage,
  RoadmapImage,
  Mint
} from "constants/image-constant";

import WOW from "wowjs";
import SlideShow from "react-slick";
import { settings } from "configs/app-config";
import FractionBoard from "components/board";
import Modal from "components/modal";
import {
  modalData1,
  modalData2,
  modalData3,
  modalData4,
  modalData5,
} from "datas/shared-data";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Content } = Layout;
const { Smoke } = SharedMedia;
const { DarkJungle, BannerText } = HeaderImage;
const { ConnectBtn, DiscordBtn } = SharedImage;
const { Title, Member1, Member2, Member3, Member4, Member5 } = TeamImage;
const {
  AthleteBtn,
  WarriorBtn,
  CyborgBtn,
  RoyalBtn,
  ModernBtn,
  MythicBtn
} = FractionImage;

const {
  Galaxy,
  Starbtn,
  Milestone,
  RoadmapTitle
} = RoadmapImage;

const { Hero, Agent, King, Guerilla, RPG, Mafia, Sporter } = Mint;

const HomeView = () => {
  const childRef = useRef(null);
  const childFunc = useRef(null);

  const { activate, account, library, chainId } = useWeb3React();
  const [mintCount, setMintCount] = useState(0);
  const [mintPrice, setMintPrice] = useState(0);
  const [NFTContract, setNFTContract] = useState(null);

  // let NFTContract = null;
  let NFT_ADDRESS = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
  let allowedChainId = [1, 4, 1337, 31337];

  const connectAccount = () => {
    if (!window.ethereum) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Please install MetaMask.'
      })
      return false;
    } /*else if (allowedChainId.indexOf(window.ethereum.networkVersion) >= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Wrong network',
        text: 'Please connect to Ethereum Mainnet.'
      })
    }*/ else {
      activate(injected);
    }
  }

  const mint = async () => {
    if (allowedChainId.indexOf(chainId) < 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Wrong network',
        text: 'Please connect to Ethereum Mainnet.'
      })
      return false;
    }
    if (NFTContract && account && mintCount > 0) {
      try {
        var tx = await NFTContract.mint(mintCount, { value: ethers.utils.parseUnits(String(mintPrice * mintCount), 18) });
        await tx.wait();
        Swal.fire({
          icon: 'success',
          title: 'Well Done.',
          text: `Minted ${mintCount} MAG${mintCount > 1 ? 's' : ''} successfully.`,
          showCancelButton: false
        })
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.data ? err.data.message : err.message}`,
          showCancelButton: false
        })
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Warning',
        text: `Invalid minting parameter.`,
        showCancelButton: false
      })
    }
  }

  useEffect(async () => {
    if (account) {
      const NFTContractBeforeDeploy = await new ethers.ContractFactory(NFTArtifact.abi, NFTArtifact.deployedBytecode, library?.getSigner());
      const NFTContract = await NFTContractBeforeDeploy.attach(NFT_ADDRESS);
      console.log(NFTContract);
      setNFTContract(NFTContract);

      const nftPrice = await NFTContract.getMintPrice();
      const unsafePrice = new BigNumber(nftPrice.toString());
      const seedNumber = new BigNumber(10).pow(18);
      const mintPrice = unsafePrice.dividedBy(seedNumber).toNumber();
      setMintPrice(mintPrice);
    }
    new WOW.WOW().init();
  }, [account, chainId]);

  const MintSection = <Row className="mint-section" id="mint-section" justify="center" align="middle">
    <Col className="mint-box" align="center" span={8}>
      <span className="mint-border"></span>
      <span className="mint-border"></span>
      <span className="mint-border"></span>
      <span className="mint-border"></span>
      <div className="mint-board">
        <img alt="mint-hero" src={Hero} width="400px" onSelect={(e) => e.preventDefault()} draggable={false} />
      </div>
      <Slider className="mint-count" defaultValue={0} max={3} onChange={e => setMintCount(e)} />
      <button className="mint-button" onClick={mint}>MINT {mintCount} ({(mintPrice * mintCount).toFixed(3)}ETH)</button>
    </Col>
  </Row>;

  return (
    <Content id="home-view">
      {/* Landing Section */}

      <Row id="landing-section" justify="center">
        <video id="banner-video" src={Smoke} muted autoPlay loop />
        <img id="banner-video" alt="dark-jungle" className="dark-jungle" src={DarkJungle} />
        <a className="wow fadeInUp" id="connect-discord" href="https://discord.gg/BsUJwaBN97" target="_blank">
          <img
            src={DiscordBtn}
            alt="connect-discord"
          />
        </a>
        <Col align="middle" className="bunny-in-row wow zoomInUp">
          {/* <h1>Blase bunny universe is arriving</h1> */}
          <img className="banner-text" src={BannerText} alt="Banner Text" />
          <div onClick={connectAccount}>
            {
              account ? <div className="disconnect-account"><a href="#mint-section">{`Mint now: ${accountProcess(account)}`}</a></div> : <img src={ConnectBtn} id="connect-btn" alt="wallet-connect" />
            }
          </div>
        </Col>
      </Row>

      {
        account ? MintSection : <></>
      }

      {/* Video Section */}

      <Row id="no-video-section" justify="center" align="middle">
        {/* <h1 className="wow fadeInUp">Video Section</h1> */}
        {/* <video id="banner-video" src={Nft} muted autoPlay loop /> */}
        <Col span={8} className="collection-slider">
          <CollectionSwiper />
        </Col>
        <Col span={8} className="about-text">
          The cage of reality has been shaken to the ground, and the blockchain struggles to contain its power.
          Metaapegang has been unleashed and is ready to dominate the Metaverse.
          The  Leader of the Metaverse Kingdom —  Metaapegang.
          Metaapegang is an NFT series as limited as it is powerful, only 6666  Metaapegangs shall be minted.
          A primal, unstoppable force that cannot be tamed,  Metaapegang is impossible to be replicated or destroyed.
          Metaapegang dominates the Metaverse in any domain, thanks to its fully imagined, unrestrained 3D form.
          Whether it be in movies, games, or real-time Metaverse meet-ups, your authority and influence will not be challenged.
          Now is the time for you to evolve into your most savage, furious form.Now is the reign of  Metaapegang.
        </Col>
      </Row>

      <Row id="night-sky" justify="center">
        <Col className="bunny-in-row" align="center">
          {/* Fraction Section */}

          <Row id="fraction-section" justify="center">
            <FractionBoard ref={childRef} />
            <Row
              id="fraction-item-carousel"
              className="wow fadeInUp"
              justify="center"
            >
              <SlideShow {...settings}>
                <div>
                  <img
                    src={RoyalBtn}
                    alt="fraction-royal"
                    className="fraction-item"
                    onClick={() => childRef.current.showAlert(King)}
                  />
                </div>
                <div>
                  <img
                    src={WarriorBtn}
                    alt="fraction-warrior"
                    className="fraction-item"
                    onClick={() => childRef.current.showAlert(RPG)}
                  />
                </div>
                <div>
                  <img
                    src={MythicBtn}
                    alt="fraction-artist"
                    className="fraction-item"
                    onClick={() => childRef.current.showAlert(Mafia)}
                  />
                </div>
                <div>
                  <img
                    src={AthleteBtn}
                    alt="fraction-athlete"
                    className="fraction-item"
                    onClick={() => childRef.current.showAlert(Guerilla)}
                  />
                </div>
                <div>
                  <img
                    src={CyborgBtn}
                    alt="fraction-foodie"
                    className="fraction-item"
                    onClick={() => childRef.current.showAlert(Sporter)}
                  />
                </div>
                <div>
                  <img
                    src={ModernBtn}
                    alt="fraction-cyborg"
                    className="fraction-item"
                    onClick={() => childRef.current.showAlert(Agent)}
                  />
                </div>
              </SlideShow>
            </Row>
          </Row>

          {/* Team Section */}

          <Row id="team-section" justify="center">
            <Col>
              {/* <h1 className="wow fadeInUp">The MAG Team</h1> */}
              <img className="wow fadeInUp team-title" alt="Team" src={Title} />
              <ul id="team-list">
                <li>
                  <img
                    className="wow zoomInUp"
                    src={Member1}
                    alt="bunny-team"
                  />
                </li>
                <li>
                  <img
                    className="wow zoomInUp"
                    src={Member2}
                    alt="bunny-team"
                  />
                </li>
                <li>
                  <img
                    className="wow zoomInUp"
                    src={Member3}
                    alt="bunny-team"
                  />
                </li>
                <li>
                  <img
                    className="wow zoomInUp"
                    src={Member5}
                    alt="bunny-team"
                  />
                </li>
                <li>
                  <img
                    className="wow zoomInUp"
                    src={Member4}
                    alt="bunny-team"
                  />
                </li>
              </ul>
            </Col>
          </Row>

          {/* Journey Section */}

          <Row id="roadmap-section" justify="center">
            <Col className="bunny-in-row" align="middle">
              {/* <h1 className="wow fadeInUp">Roadmap</h1> */}
              <img className="wow fadeInUp roadmap-title" src={RoadmapTitle} alt="Roadmap" />
              <Col id="galaxy-box">
                <Modal childFunc={childFunc} />
                <img
                  src={Milestone}
                  id="planet1"
                  className="planet"
                  alt="planet"
                  draggable="false"
                />
                <section id="journey-txt-1" className="journey-txt wow slideInRight">
                  <h1>PHASE 1: GOLDEN META AGE GANG FOR TBC CANCE CHARITY - Q1</h1>
                  Exclusive MAG Gold, will be put in auction one day before minting and the funds will
                  go to TCB Cancer charity for brain cancer for children’s.
                  Bidding will be 24 hour before minting please follow {'<#944984626340966420>'}
                </section>
                <img
                  src={Starbtn}
                  alt="starbtn"
                  className="starbtn"
                  id="star-btn-1"
                  onClick={() => childFunc.current("modal-1", true, modalData1)}
                />
                {/* <div className="headline" id="headline1">
                                    Headline
                                </div> */}
                <img
                  src={Milestone}
                  id="planet2"
                  className="planet"
                  alt="planet"
                  draggable="false"
                />
                <section id="journey-txt-2" className="journey-txt wow slideInRight">
                  <h1>PHASE 2: COLLECTION LAUNCH - Q1</h1>
                  3333 Meta Ape Gangs are storming the ethereum blockchain, randomly generated from 200 traits
                  They are ERC-721 Tokens and their mint price : TBA (+ Gaz) Launch date : TBA
                  Unfortunately for the world, only 3333 investors will be able to claim their very own Meta ape Gang in metaverse.
                </section>
                <img
                  src={Starbtn}
                  alt="starbtn"
                  className="starbtn"
                  id="star-btn-2"
                  onClick={() => childFunc.current("modal-2", true, modalData2)}
                />
                {/* <div className="headline" id="headline2">
                                    Headline
                                </div> */}
                <img
                  src={Milestone}
                  id="planet3"
                  className="planet"
                  alt="planet"
                  draggable="false"
                />
                <section id="journey-txt-3" className="journey-txt wow slideInRight">
                  <h1>PHASE 3: FLOOR PRICE TO BE 2ETH AFTER MINTING - Q2</h1>
                  For the first time ever we build a FPC Community to keep first our holders then our floor price to be at
                  least 2 Eth when minting finished . the traits and small collection will make our floor price to be even
                  higher than what we expected after the reveal.
                </section>
                <img
                  src={Starbtn}
                  alt="starbtn"
                  className="starbtn"
                  id="star-btn-3"
                  onClick={() => childFunc.current("modal-3", true, modalData3)}
                />
                {/* <div className="headline" id="headline3">
                                    Headline
                                </div> */}
                <img
                  src={Milestone}
                  id="planet4"
                  className="planet"
                  alt="planet"
                  draggable="false"
                />
                <section id="journey-txt-4" className="journey-txt wow slideInRight">
                  <h1>PHASE 4: FPC Community Started {'&'} in Progress- Q2</h1>
                  We have just started for the first time in NFT community that we can achieve our
                  targeted Floor price after minting announced ,so stay tuned
                </section>
                <img
                  src={Starbtn}
                  alt="starbtn"
                  className="starbtn"
                  id="star-btn-4"
                  onClick={() => childFunc.current("modal-4", true, modalData4)}
                />
                {/* <div className="headline" id="headline4">
                                    Headline
                                </div> */}
                <img
                  src={Milestone}
                  id="planet5"
                  className="planet"
                  alt="planet"
                  draggable="false"
                />
                <section id="journey-txt-5" className="journey-txt wow slideInRight">
                  <h1>PHASE 5: WE ARE READY TO CONQUER THE UNIVERSE AND METAVERSE - Q3</h1>
                  <section className='point-des'>
                    After our minting sales done, our MAGs Are ready to conquer the universe and metaverse.
                  </section>
                  <h1>PHASE 6: STAY TUNED MORE EXCITEMENT WILL COME - Q4 </h1>
                </section>
                <img
                  src={Starbtn}
                  alt="starbtn"
                  className="starbtn"
                  id="star-btn-5"
                  onClick={() => childFunc.current("modal-5", true, modalData5)}
                />
                {/* <div className="headline" id="headline5">
                                    Headline
                                </div> */}
                <img src={Galaxy} id="galaxy" alt="galaxy" />
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Content>
  );
};

export default HomeView;
