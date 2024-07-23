import { useEffect, useState } from 'react';
import { apiEndPoin } from '../constant/listItem';
import { ListItem } from './ListItem';
import { Info } from './Info';
import './contentPage.scss';
import axios from 'axios';

// import placehoder skeleten
import { Skeleton, Watermark } from 'antd';
import { Link } from 'react-router-dom';

export const ContentPage = ({ title, des }) => {
  // create new state save data
  const [listData, setList] = useState([]);

  // call api here get list users
  useEffect(() => {
    axios
      .get(apiEndPoin + 'users')
      .then((listUser) => {
        console.log('list user', listUser);
        // setstate render data
        setList(listUser.data);
      })
      .catch((err) => console.log('err call api users: ', err));
  }, []);

  const listSekeleten = [1, 2, 3, 4, 5];

  return (
    <>
      <Watermark content="raiway83-vti">
        <article className="content">
          <h3 className="content-title">{title}</h3>
          <div className="content-des">
            <p>{des}</p>
          </div>
          <div className="content-action">
            <Link to={'/addItem'}>
              <button className="btn-one">Create Item</button>
            </Link>
            <Link to={'/addItemRef'}>
              <button className="btn-two">Create Ref</button>
            </Link>
          </div>
        </article>

        {/* content list item */}
        {listData.length > 0 ? (
          <ListItem listItem={listData} />
        ) : (
          <>
            {listSekeleten.map((el, index) => (
              <Skeleton key={index} />
            ))}
          </>
        )}
        {/* info page */}
        <Info />
      </Watermark>
    </>
  );
};
