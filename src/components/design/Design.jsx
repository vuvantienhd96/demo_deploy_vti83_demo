import { giamItem, tangItem } from '../../feature/counter/counterSlice';
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';

export const Design = () => {
  const count = useSelector((state) => state.counter.value);

  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch(); // cap nhap thay roi state trong store

  return (
    <>
      hello design: {count} --- hello {name}
      <button aria-label="Increment value" onClick={() => dispatch(tangItem())}>
        Tang len i phan tu
      </button>
      <button aria-label="Decrement value" onClick={() => dispatch(giamItem())}>
        giam len i phan tu
      </button>
    </>
  );
};
