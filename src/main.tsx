import React from "react";
import ReactDOM from "react-dom";
import Page from "./page";
import { ConfigProvider } from "antd";
import "./theme/antd.css";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider prefixCls="live">
      <Page />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
