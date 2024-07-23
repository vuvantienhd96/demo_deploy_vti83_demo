// useRouteError dung de lay ra thông báo lỗi của react router dom
import { useRouteError } from 'react-router-dom';
import { menuHome } from '../../constant/listItem';
import logo from './../../assets/logo.svg';
import notFoundl from './../../assets/notFoundl.svg';
import './style.css';

import { Header } from '../Header';

export const ErrorPage = () => {
  // get ra status loi cuar page
  const error = useRouteError();
  // console.error(error);

  return (
    <>
      <Header logo={logo} menu={menuHome} />
      <div id="error-page" className="error-page">
        <article>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <img className="icon" src={notFoundl} alt="notfound" />
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </article>
      </div>
    </>
  );
};
