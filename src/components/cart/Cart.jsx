import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { Button, Card, Space } from 'antd';
import { deleteItem } from '../../feature/counter/cartSlice';
import { ImagePreview } from './preview/ImagePreview';
import { useEffect, useState } from 'react';
export const Cart = () => {
  const listItemCart = useSelector((state) => state.cart.cartTotal);
  const dispath = useDispatch();
  const [bill, setBill] = useState(0);

  const deleteItemIndex = (index) => {
    console.log(index);
    dispath(deleteItem(index));
  };

  useEffect(() => {
    if (listItemCart.length > 0) {
      const totalSum = listItemCart.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.price),
        0
      );
      setBill(totalSum);
    }
  }, [listItemCart.length, bill]);

  return (
    <section className="cartList">
      <Space direction="vertical" size={16}>
        {listItemCart.length > 0
          ? listItemCart.map((item, index) => {
              return (
                <Card
                  key={item.id}
                  title={item.title}
                  extra={<a href="#">More</a>}
                  style={{
                    width: 300,
                  }}
                >
                  <ImagePreview url={item.Img1} scale={200} />
                  <p>price: {item.price}</p>
                  <p>phone: {item.phone}</p>
                  <Button onClick={() => deleteItemIndex(index)}>
                    Delete item
                  </Button>
                </Card>
              );
            })
          : 'notthing item'}
      </Space>
      {listItemCart.length > 0 ? (
        <Space direction="vertical" size={16}>
          <Card
            title={'Ìnfo product item'}
            extra={<a href="#">More</a>}
            style={{
              width: 300,
            }}
          >
            <p style={{ color: 'green' }}>Total price: ${bill}</p>
            <Button onClick={() => console.log(123)}>Buy Item</Button>
          </Card>
        </Space>
      ) : null}
    </section>
  );
};
