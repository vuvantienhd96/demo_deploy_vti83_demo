import { Header } from './Header';
import logo from './../assets/logo.svg';
import { ContentPage } from './ContentPage';
import { des, menuHome, title } from '../constant/listItem';

// import react router dom to Home component
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './ErrorPage/ErrorPage';
import { Feature } from './Feature/Feature';
import { DetailProduct } from './detailIProduct/DetailProduct';
import { FormProductPage } from './FormProductPage/FormProduct';
import { FormProductPageRef } from './FormProductPage/FormProductRef';
import { Design } from './design/Design';
import { Cart } from './cart/Cart';
// khởi tạo ra một react router dom -- khởi tạo ra một bộ điều hướng bằng trình duyệt cho website của b
const routerHome = createBrowserRouter([
  {
    path: '/', // go to home page
    element: <Header logo={logo} menu={menuHome} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', // go to Feature page
        element: <ContentPage title={title} des={des} />,
      },
      {
        path: '/detail/:productId', // go to Feature page
        element: <DetailProduct />,
      },
      {
        path: '/addItem', // go to add item page
        element: <FormProductPage />,
      },
      {
        path: '/editItem/:productId', // go to add item page
        element: <FormProductPageRef />,
      },
      {
        path: '/addItemRef', // go to add item page
        element: <FormProductPageRef />,
      },
      {
        path: '/Feature', // go to Feature page
        element: <Feature />,
      },
      {
        path: '/Design', // go to Design page
        element: <Design />,
      },
      {
        path: '/cart', // go to Design page
        element: <Cart />,
      },
    ],
  },
  {
    path: '/number',
    element: <h1>this is number</h1>,
  },
]);

export const Home = () => {
  return (
    <>
      <RouterProvider router={routerHome} />
      {/* 
      <TestComponent /> */}
    </>
  );
};
