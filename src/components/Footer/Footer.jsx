import { Tooltip } from "antd";

import "./Footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const version = process.env.REACT_APP_VERSION || "7.1.3";

  return (
    <footer>
      <p className={`ibm-plex-sans-regular `}>
        {currentYear}, Маминова Анна
        <Tooltip placement="bottom" title={`Версия сайта: ${version}`}>
          {" ©"}
        </Tooltip>
      </p>
    </footer>
  );
}
