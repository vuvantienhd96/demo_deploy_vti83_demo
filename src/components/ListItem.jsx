import './ListItem.css';
import icon from './../assets/icon.svg';
import { Card } from './card/Card';
export const ListItem = ({ listItem }) => {
  return (
    <>
      <footer className="footer" key={1}>
        {listItem.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </footer>
    </>
  );
};
