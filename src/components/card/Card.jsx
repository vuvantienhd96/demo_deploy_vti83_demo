import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  return (
    <Link to={`detail/${item.id}`}>
      <article className="cart" key={item.id}>
        <div className="images">
          <div className="image">
            <img src={item.Img1} alt="not found" width="200" height="200" />
            <img
              className="first"
              src={item.Img2}
              alt="not found"
              width="200"
              height="200"
            />
          </div>
        </div>
        <h4 className="title">
          {item.title}
          <span>
            <img src={item.logo} width="20" height="20" />
          </span>
          <Link to={`editItem/${item.id}`}>edit</Link>
        </h4>
      </article>
    </Link>
  );
};
