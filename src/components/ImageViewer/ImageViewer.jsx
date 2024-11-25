import { EyeOutlined } from "@ant-design/icons";
import { Image } from "antd";

export default function ImageViewer({ src, className }) {
  return (
    <div className={className}>
      <Image
        src={src}
        className={className}
        preview={{
          mask: (
            <div style={{ fontSize: 24, color: "white" }}>
              <EyeOutlined />
              {" Предпросмотр"}
            </div>
          ),
        }}
      />
    </div>
  );
}
