// import css
import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
// import danh sach item động được render ra dựa trên outlet
import { Outlet, Link } from 'react-router-dom';

import { BellTwoTone } from '@ant-design/icons';
import { useEffect } from 'react';
import { resetBell } from '../feature/counter/cartSlice';
import { useState } from 'react';

export const Header = ({ logo, menu }) => {
  const toralItemCart = useSelector((state) => state.cart.cartTotal);
  const bell = useSelector((state) => state.cart.flagBell);
  const dispath = useDispatch();
  const [rotate, setRotate] = useState(-60);

  useEffect(() => {
    if (bell) {
      console.log(bell, 'bell');
      setTimeout(() => {
        // set lai bell =>> false
        dispath(resetBell());
        setRotate(60);
      }, 4000);
    }
  }, [bell]);

  return (
    <>
      <section className="header">
        <div className="header-left">
          <Link to={'/'}>
            <img src={logo} width="100" height="50" />
          </Link>
        </div>
        <div className="header-right">
          <ul>
            {menu.map((item, index, menuArr) => (
              <li key={item.id}>
                <Link to={item.src}>{item.name}</Link>
              </li>
            ))}

            <li>
              <Link to={'/cart'}>
                Cart<span className="cart-item">{toralItemCart.length}</span>
                {bell ? (
                  <BellTwoTone
                    rotate={rotate}
                    spin={bell}
                    style={{
                      fontSize: '20px',
                      paddingTop: '5px',
                      paddingLeft: '15px',
                    }}
                    twoToneColor="#eb2f96"
                  />
                ) : null}
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </section>

      {/* render content here */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
