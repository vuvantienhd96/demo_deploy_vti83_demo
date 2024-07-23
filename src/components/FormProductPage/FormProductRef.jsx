import './style.scss';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';

import { Button, Input } from 'antd';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { apiEndPoin } from '../../constant/listItem';
import { useNavigate, useParams } from 'react-router-dom';
import { ShowMessErr } from '../common/showMessageErr/ShowMessErr';
import { CheckErrValidate } from '../common/until/CheckErrValidate';

export const FormProductPageRef = () => {
  const titleRef = useRef(null);
  const imageOneRef = useRef(null);
  const imageTwoRef = useRef(null);
  const desRef = useRef(null);
  const priceRef = useRef(null);
  const phoneRef = useRef(null);
  const navigate = useNavigate();

  const [err, listError] = useState(null);

  let { productId } = useParams();

  useEffect(() => {
    if (productId) {
      // call api edit
      axios
        .get(apiEndPoin + `users/${productId}`)
        .then((res) => {
          // fille data
          titleRef.current.value = res.data.title;
          imageOneRef.current.value = res.data.Img1;
          imageTwoRef.current.value = res.data.Img2;
          desRef.current.value = res.data.description;
          priceRef.current.value = res.data.price;
          phoneRef.current.value = res.data.phone;
        })
        .catch((err) => console.log('err call detal: ', err));
    }
  }, []);

  const handleSubmit = () => {
    const title = titleRef.current.value;
    const imageOne = imageOneRef.current.value;
    const imageTwo = imageTwoRef.current.value;
    const description = desRef.current.value;
    const price = priceRef.current.value;
    const phone = phoneRef.current.value;
    const objItem = {
      title,
      Img1: imageOne,
      Img2: imageTwo,
      description,
      price,
      phone,
    };
    // check err message
    const valid = CheckErrValidate(listError, title, imageOne, imageTwo, err);

    if (valid) {
      return;
    }
    // call api post then send data to server
    // Nếu là edit thì gọi api put ngược lại là gọi api post
    if (productId) {
      // edit
      axios
        .put(apiEndPoin + 'users/' + productId, objItem)
        .then((res) => {
          // redirect to home page
          navigate('/');
        })
        .catch((err) => {
          alert('err', err);
        });
    } else {
      // add
      axios
        .post(apiEndPoin + 'users', objItem)
        .then((res) => {
          // redirect to home page
          navigate('/');
        })
        .catch((err) => {
          alert('err', err);
        });
    }
  };

  console.log(err, 'list err');

  return (
    <article className="form-control">
      <h3 className="title-header">Create new item product Form Ref</h3>
      <ShowMessErr
        title={'Title'}
        name="title"
        refs={titleRef}
        err={err?.title}
      />
      {/* <input ref={titleRef} /> */}
      <ShowMessErr
        title={'Image One'}
        name="imageOne"
        refs={imageOneRef}
        err={err?.imageOneRef}
      />
      <ShowMessErr
        title={'Image Two'}
        name="imageTwo"
        refs={imageTwoRef}
        err={err?.imageTwoRef}
      />
      <ShowMessErr
        title={'Description'}
        name="Description"
        refs={desRef}
        err={err?.desRef}
      />
      <ShowMessErr
        title={'Price'}
        name="price"
        refs={priceRef}
        err={err?.priceRef}
        type={'number'}
      />
      <ShowMessErr
        title={'Phone'}
        name="phone"
        refs={phoneRef}
        err={err?.phoneRef}
        type={'text'}
      />
      <Button
        onClick={() => handleSubmit()}
        className="btn-submit"
        type="primary"
      >
        Submit
      </Button>
    </article>
  );
};
