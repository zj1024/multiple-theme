import { Switch, Space } from "antd";
import Button from "./button";

export default () => {
  return (
    <>
      <Space style={{ height: 60, padding: "0 20px" }}>
        切换主题
        <Switch
          onChange={(checked) => {
            const htmlEl = document.documentElement;
            htmlEl.setAttribute("data-theme", checked ? "dark" : "default");
          }}
        ></Switch>
      </Space>

      <Button />
    </>
  );
};
