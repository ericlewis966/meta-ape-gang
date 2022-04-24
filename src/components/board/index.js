import { useImperativeHandle, forwardRef, useEffect, useState } from 'react';
import { Col } from 'antd';
import { FractionImage } from 'constants/image-constant';
import './board.css';

const { ScreenBoard, BlaseBunnyLayer } = FractionImage;

const FractionBoard = forwardRef((props, ref) => {
    const [img, setImg] = useState(null);
    useEffect(() => {
        setImg(BlaseBunnyLayer)
    }, [])
    useImperativeHandle(ref, () => ({
        showAlert(chImg) {
            setImg(chImg)
        }
    }))
    return (
        <Col id="fraction-board" className='wow fadeInUp'>
            <img src={ScreenBoard} alt="fraction-board" id="fraction-panel" />
            <img src={img} alt="fraction-royal" id="fraction-layer" />
        </Col>
    )
});

export default FractionBoard;