import { Switch, Route, Redirect } from 'react-router-dom';
import { PUBLIC_PATH, APP_PATH } from 'configs/app-config';
import PublicLayout from 'layouts/public';
import AppViews from './app';


const Views = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={PUBLIC_PATH} />
            </Route>
            <Route path={PUBLIC_PATH}>
                <PublicLayout />
            </Route>
            <Route path={APP_PATH}>
                <AppViews />
            </Route>
        </Switch>
    )
}

export default Views;