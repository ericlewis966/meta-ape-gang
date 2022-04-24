import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PUBLIC_PATH } from 'configs/app-config';
import Loader from 'components/loader';

const PublicViews = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <Route exact path={PUBLIC_PATH} component={lazy(() => import('./home'))} />
                <Route exact path={`${PUBLIC_PATH}/about`} component={lazy(() => import('./about'))} />
                <Route exact path={`${PUBLIC_PATH}/menu/sub`} component={lazy(() => import('./subMenu'))} />
                <Route exact path={`${PUBLIC_PATH}/news`} component={lazy(() => import('./news'))} />
            </Switch>
        </Suspense>
    )
}

export default PublicViews;