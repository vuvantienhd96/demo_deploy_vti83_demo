import { useEffect, useState } from 'react';
import './style.css';
// import thu vien axios call api
import axios from 'axios';
import { PhoneOutlined } from '@ant-design/icons';

export const TestComponent = () => {
  console.log('console.log chay lan 1');
  const [number, setNumber] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [listUser, setListUser] = useState([]);

  const api = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    // call api va api se chay duy nhat mot lan sau khi render
    axios
      .get(api)
      .then((response) => {
        console.log('du lieu data la:', response);
        // set lai list user voi du lieu tu server tra ve
        setListUser(response.data);
      })
      .catch((err) => {
        console.log('err : ', err);
      });
  }, []); // chay duy nhat 1 lan
  // useEffect sẽ lắng nghe nếu truyền dependency là [] thì nó sẽ chạy duy nhát một lần
  // còn nếu depency là một giá trị state thay dổi thì nó sẽ chạy lại hàm bên trong useEffect chứa state thay dổi đó
  useEffect(() => {
    console.log('useEffect chay render khi number thay doi', number);
  }, [number, isActive]); // change -- thay đổi
  return (
    <>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <h4>List user buy somthing...</h4>
      <section className="info-user">
        <ul>
          {listUser.length > 0 &&
            listUser.map((el) => (
              <li key={el.id}>
                <span className="name">{el.name}</span> -- {el.email} --{' '}
                {el.phone}{' '}
                <PhoneOutlined
                  style={{
                    fontSize: '20px',
                    color: 'blue',
                  }}
                />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

// landing page - nhieu trang web - nhiều source

// build reactjs, angular, vuajs,... => single page application
