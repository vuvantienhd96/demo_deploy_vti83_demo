import {
  FacebookOutlined,
  InstagramFilled,
  TwitterCircleFilled,
  WechatFilled,
  QqCircleFilled,
  HeartFilled,
} from '@ant-design/icons';
import './Info.css';

export const Info = () => {
  return (
    <section className="info-footer">
      <div id="infinite" className="slider">
        <div className="container inte-brnd">
          <ul>
            <li>
              <span className="fab fa-node">
                <FacebookOutlined />
              </span>
            </li>
            <li>
              <span className="fab fa-node">
                <InstagramFilled />
              </span>
            </li>
            <li>
              <span className="fab fa-node">
                <TwitterCircleFilled />
              </span>
            </li>
            <li>
              <span className="fab fa-node">
                <WechatFilled />
              </span>
            </li>
            <li>
              <span className="fab fa-node">
                <QqCircleFilled />
              </span>
            </li>
            <li>
              <span className="fab fa-node">
                <HeartFilled />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
