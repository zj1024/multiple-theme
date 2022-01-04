echo '编译暗黑主题样式'
npx lessc --js ./src/theme/antd.dark.base.less ./src/theme/antd.dark.base.css
echo '编译白色主题样式'
npx lessc --js ./src/theme/antd.light.base.less ./src/theme/antd.light.base.css
echo '基础样式编译成功 🎉'

echo '主题添加作用域'
npx lessc --js -clean-css ./src/theme/antd.less ./src/theme/antd.css

rm -rf ./src/theme/antd.dark.base.css ./src/theme/antd.light.base.css
