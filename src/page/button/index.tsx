import { Button, Card, Space } from "antd";

export default () => {
  return (
    <Card>
      <section className="m-b-20">
        <Space>
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
          <Button size="small" type="primary">
            Primary Button
          </Button>
          <Button size="small">Default Button</Button>
          <Button size="small" type="dashed">
            Dashed Button
          </Button>
          <Button size="small" type="text">
            Text Button
          </Button>
          <Button size="small" type="link">
            Link Button
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button shape="round" type="primary">
            Primary Button
          </Button>
          <Button shape="round">Default Button</Button>
          <Button shape="round" type="dashed">
            Dashed Button
          </Button>
          <Button shape="round" type="text">
            Text Button
          </Button>
          <Button shape="round" type="link">
            Link Button
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button size="large" shape="round" type="primary">
            Primary Button
          </Button>
          <Button size="middle" shape="round" type="primary">
            Default Button
          </Button>
          <Button size="small" shape="round" type="primary">
            Dashed Button
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button type="primary">Primary</Button>
          <Button type="primary" disabled>
            Primary(disabled)
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button>Default</Button>
          <Button disabled>Default(disabled)</Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button type="dashed">Dashed</Button>
          <Button type="dashed" disabled>
            Dashed(disabled)
          </Button>
        </Space>
      </section>

      <section className="m-b-20">
        <Space>
          <Button type="text">Text</Button>
          <Button type="text" disabled>
            Text(disabled)
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button type="link">Link</Button>
          <Button type="link" disabled>
            Link(disabled)
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button danger>Danger Default</Button>
          <Button danger disabled>
            Danger Default(disabled)
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button danger type="text">
            Danger Text
          </Button>
          <Button danger type="text" disabled>
            Danger Text(disabled)
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button type="link" danger>
            Danger Link
          </Button>
          <Button type="link" danger disabled>
            Danger Link(disabled)
          </Button>
        </Space>
      </section>
      <section className="m-b-20">
        <Space>
          <Button ghost>Ghost</Button>
          <Button ghost disabled>
            Ghost(disabled)
          </Button>
        </Space>
      </section>
    </Card>
  );
};
