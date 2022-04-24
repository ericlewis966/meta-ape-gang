import { Spin, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './loader.css';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loader = () => {
    return (
        <div id="loader-wrapper">
            <Space size="middle">
                <Spin size="large" indicator={antIcon} />
            </Space>,
        </div>
    )
}

export default Loader;