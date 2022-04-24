import PublicViews from "views/public";
import BunnyHeader from 'components/header';
import { Layout } from 'antd';
import BunnyFooter from "components/footer";

const PublicLayout = () => {
    return (
        <Layout>
            <BunnyHeader/>
            <PublicViews />
            <BunnyFooter/>
        </Layout>
    )
}

export default PublicLayout;