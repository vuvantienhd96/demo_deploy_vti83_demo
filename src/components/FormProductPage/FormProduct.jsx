import './style.scss';

import { Button, Input, Space } from 'antd';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { useState } from 'react';
import axios from 'axios';
import { apiEndPoin } from '../../constant/listItem';
import { useNavigate } from 'react-router-dom';

export const FormProductPage = () => {
  const [title, setTitle] = useState(null);
  const [imageOne, setImageone] = useState(null);
  const [imageTwo, setImageTwo] = useState(null);
  const [Description, setDes] = useState(null);
  const [price, setPrice] = useState(null);
  const [phone, setPhone] = useState(null);
  const navigate = useNavigate();

  console.log(title, 'title');
  console.log(Description, 'Description');

  const handleSubmit = () => {
    const objItem = {
      title,
      Img1: imageOne,
      Img2: imageTwo,
      description: Description,
      price,
      phone,
    };
    console.log(objItem, 'objitem');
    // call api post then send data to server
    axios
      .post(apiEndPoin + 'users', objItem)
      .then((res) => {
        // redirect to home page
        navigate('/');
      })
      .catch((err) => {
        alert('err', err);
      });
  };

  return (
    <article className="form-control">
      <h3 className="title-header">Create new item product</h3>
      <p className="title">
        Title <span className="reuqired">*</span>
      </p>
      <Input
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        status={title ? 'success' : 'error'}
        prefix={<ClockCircleOutlined />}
        placeholder="please input title"
      />
      <p className="title">
        Image One <span className="reuqired">*</span>
      </p>
      <Input
        name="imageOne"
        onChange={(e) => setImageone(e.target.value)}
        value={imageOne}
        status={imageOne ? 'success' : 'error'}
        prefix={<ClockCircleOutlined />}
        placeholder="please input imageOne"
      />
      <p className="title">
        Image Two <span className="reuqired">*</span>
      </p>
      <Input
        name="imageTwo"
        onChange={(e) => setImageTwo(e.target.value)}
        value={imageTwo}
        status={imageTwo ? 'success' : 'error'}
        prefix={<ClockCircleOutlined />}
        placeholder="please input imageTwo"
      />
      <p className="title">
        Description <span className="reuqired">*</span>
      </p>
      <Input
        name="Description"
        onChange={(e) => setDes(e.target.value)}
        status={Description ? 'success' : 'error'}
        value={Description}
        prefix={<ClockCircleOutlined />}
        placeholder="please input Description"
      />
      <p className="title">
        Price <span className="reuqired">*</span>
      </p>
      <Input
        name="price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        status={price ? 'success' : 'error'}
        type="number"
        prefix={<ClockCircleOutlined />}
        placeholder="please input price"
      />
      <p className="title">
        Phone <span className="reuqired">*</span>
      </p>
      <Input
        name="phone"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        status={phone ? 'success' : 'error'}
        type="number"
        prefix={<ClockCircleOutlined />}
        placeholder="please input phone"
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
