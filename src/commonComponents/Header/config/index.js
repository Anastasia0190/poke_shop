import { startCase, omit } from "lodash";
import { ROUTE_NAMES } from "routes/routeNames";

export const NAVIGATION_ITEMS = {
    public: [
        {
            title: 'Sign In',
            path: ROUTE_NAMES.SIGN_IN,
        },
        {
            title: 'Sign Up',
            path: ROUTE_NAMES.SIGN_UP,
        }

    ],
    private: Object.entries(omit(ROUTE_NAMES, ['SIGN_IN', 'SIGN_UP'])).map(([title, path]) => ({
        title: startCase(title),
        path,
    }))
};

export const publicNavsKey = 'public';
export const privateNavsKey = 'private';