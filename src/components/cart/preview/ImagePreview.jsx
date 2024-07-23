import './style.scss';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import { Image, Space } from 'antd';

export const ImagePreview = ({ url, scale }) => {
  const onDownload = (src) => {};

  return (
    <>
      <Image
        width={200}
        src={url}
        preview={{
          toolbarRender: (
            _,
            {
              image: { url },
              transform: { scale },
              actions: {
                onFlipY,
                onFlipX,
                onRotateLeft,
                onRotateRight,
                onZoomOut,
                onZoomIn,
                onReset,
              },
            }
          ) => (
            <Space size={12} className="toolbar-wrapper">
              <DownloadOutlined onClick={() => onDownload(url)} />
              <SwapOutlined rotate={90} onClick={onFlipY} />
              <SwapOutlined onClick={onFlipX} />
              <RotateLeftOutlined onClick={onRotateLeft} />
              <RotateRightOutlined onClick={onRotateRight} />
              <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
              <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
              <UndoOutlined onClick={onReset} />
            </Space>
          ),
        }}
      />
    </>
  );
};
