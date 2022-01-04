import { useEffect } from "react";
import { Switch, Space } from "antd";
import Button from "./button";

export default () => {
  useEffect(() => {
    const htmlEl = document.documentElement;
    // 给HTML DOM节点添加自定义主题，标识当前主题
    const toggleTheme = (isDarkMode: boolean) => {
      htmlEl.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    };

    const themeMedia = window.matchMedia("(prefers-color-scheme: dark)");

    // 页面初始化切换
    toggleTheme(themeMedia.matches);

    // 监听系统切换
    themeMedia.addListener((e) => {
      toggleTheme(e.matches);
    });
  }, []);
  return (
    <>
      <Space style={{ height: 60, padding: "0 20px" }}>
        切换主题
        <Switch
          onChange={(checked) => {
            const htmlEl = document.documentElement;
            htmlEl.setAttribute("data-theme", checked ? "dark" : "light");
          }}
        ></Switch>
      </Space>

      <Button />
    </>
  );
};
