import { useEffect } from 'react';
import WOW from 'wowjs';
import { Layout, Col } from 'antd';
import './subMenu.css';

const { Content } = Layout;

const SubMenuView = () => {
    useEffect(() => {
        new WOW.WOW().init();
    }, [])
    return (
        <Content id="sub-menu-view">
            <Col className='bunny-in-row' align="middle">
                <h1 className='wow fadeInUp' >News | Bayc in 7 days of mood</h1>
                <div className='bunny-mark wow fadeInUp'>

                </div>
                <section id="news-text">
                    <p className='wow fadeInUp'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea</p>
                    <p className='wow fadeInUp'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                    </p>
                    <p className='wow fadeInUp'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                    </p>
                    <p className='wow fadeInUp'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                    </p>
                    <p className='wow fadeInUp'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea</p>
                    <p className='wow fadeInUp'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                    </p>
                    <p className='wow fadeInUp'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                    </p>
                    <p className='wow fadeInUp'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volupat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullarncorper suscipit lobortis nisl ut aliquip ex ea
                    </p>
                </section>
            </Col>
        </Content>
    )
}

export default SubMenuView;