import { useEffect, useState } from 'react';
import './style.scss';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { apiEndPoin } from '../../constant/listItem';
import {
  Skeleton,
  Rate,
  Avatar,
  Button,
  Carousel,
  Watermark,
  Modal,
} from 'antd';
import { useDispatch } from 'react-redux';
import { buyItem, resetBell } from '../../feature/counter/cartSlice';
export const DetailProduct = () => {
  let { productId } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isError, setError] = useState(null);

  const dispath = useDispatch();

  const addToCard = () => {
    // reset bell false
    dispath(resetBell());

    // dispath buyitem
    dispath(buyItem(item));
  };

  // call api dua vao id lay tren url
  useEffect(() => {
    axios
      .get(apiEndPoin + `users/${productId}`)
      .then((res) => {
        console.log('data', res);
        setItem(res.data);
      })
      .catch((err) => console.log('err call detal: ', err));
  }, []);

  const showModal = () => {
    setIsModalOpen(!isModalOpen); // true =>> false || false ==> true
  };

  const handleOk = () => {
    // call api delete item then send request with method delete to server
    axios
      .delete(apiEndPoin + `users/${productId}`)
      .then((res) => {
        console.log('delete item success');
        // set error message is null
        setError(null);
        // close modal
        setIsModalOpen(false);
        // redirect to homepage
        navigate('/');
      })
      .catch((err) => setError(err));
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!item ? (
        <Skeleton />
      ) : (
        <Watermark content="raiway83-vti">
          <section className="detail-page">
            <div className="left">
              <Carousel autoplay>
                <div>
                  <img src={item.Img1} />
                </div>
                <div>
                  <img src={item.Img2} />
                </div>
              </Carousel>
            </div>
            <div className="right">
              <h2 className="title">
                {item.title}{' '}
                <Avatar src={<img src={item.logo} alt="avatar" />} />
              </h2>
              <p className="description">{item.description}</p>
              <Rate defaultValue={4} allowClear={false} />
              <h5 className="phone">{item.phone}</h5>
              <h3 className="price">${item.price}</h3>
              <Button type="primary" onClick={() => addToCard()}>
                Add to cart
              </Button>
              <Button
                className="btn-delete"
                type="primary"
                danger
                onClick={() => showModal()}
              >
                Delete item product
              </Button>
              <Link to={'/'}>
                <Button className="btn-delete" type="link">
                  Back
                </Button>
              </Link>
            </div>
          </section>

          <Modal
            title={`Delete item ${item.title}`}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Are you sure delete item detail ?</p>
            {isError ? <span style={{ color: 'red' }}>{isError}</span> : null}
          </Modal>
        </Watermark>
      )}
    </>
  );
};
