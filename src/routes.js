/**
 *  ROUTING
 */

import Home from './hooks/Home';

/**
 *  hooks url
 */
 import UseCallback from './hooks/useCallback/Index';
 import UseContext from './hooks/useContext/Index';
 import UseEffect from './hooks/useEffect/Index';
 import UseMemo from './hooks/useMemo/Index';
 import UseReducer from './hooks/useReducer/Index';
 import UseRef from './hooks/useRef/Index';
 import UseState from './hooks/useState/Index';
 import CustomHook from './hooks/customHook/Index';

 // react 18 new hooks
 import UseTransition from './hooks/useTransition/Index';
 import UseDeferredValue from './hooks/useDeferredValue/Index';
 import UseId from './hooks/useId/Index';
 import UseSync from './hooks/useSync/Index';
 import UseInsertion from './hooks/useInsertion/Index';
 

const routes = [
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                index: true
            },
            {
                path: '/use-state',
                element: <UseState/>,
            },
            {
                path: '/use-effect',
                element: <UseEffect/>,
            },
            {
                path: '/use-ref',
                element: <UseRef/>,
            },
            {
                path: '/use-reducer',
                element: <UseReducer/>,
            },
            {
                path: '/use-memo',
                element: <UseMemo/>,
            },
            {
                path: '/custom-hook',
                element: <CustomHook/>,
            },
            {
                path: '/use-callback',
                element: <UseCallback/>,
            },
            {
                path: '/use-context',
                element: <UseContext/>,
            },

            {
                path: '/use-transition',
                element: <UseTransition/>,
            },
            {
                path: '/use-deferred-value',
                element: <UseDeferredValue/>,
            },
            {
                path: '/use-id',
                element: <UseId/>,
            },
            {
                path: '/use-sync',
                element: <UseSync/>,
            },
            {
                path: '/use-insertion',
                element: <UseInsertion/>,
            },
        ]
    }
];

export default routes;