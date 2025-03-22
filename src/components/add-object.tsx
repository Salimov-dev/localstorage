import React from "react";
import type { FormProps } from "antd";
import { Button, Flex, Form, Input } from "antd";

type FieldType = {
  firstName?: string;
  lastName?: string;
};

const AddObject: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    const storageData = localStorage.getItem("formData");

    const formDataArray = storageData ? JSON.parse(storageData) : [];

    formDataArray.push(values);

    localStorage.setItem("formData", JSON.stringify(formDataArray));

    sessionStorage.setItem("formData", JSON.stringify(formDataArray));
  };

  const handleClearStorage = () => {
    localStorage.clear();
  };

  const handleRemoveItemStorage = () => {
    localStorage.removeItem("formData");
  };

  console.log("localStorage.length", localStorage.length);
  console.log("localStorage.key", localStorage.key(1));

  return (
    <>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="firstName" name="firstName">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="lastName" name="lastName">
          <Input />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Добавить в LocalStorage
          </Button>
        </Form.Item>
      </Form>

      <Flex gap={4} vertical align="flex-start">
        <Button
          type="primary"
          danger
          htmlType="submit"
          onClick={handleClearStorage}
        >
          Очистить LocalStorage
        </Button>
        <Button danger htmlType="submit" onClick={handleRemoveItemStorage}>
          Удалить из LocalStorage по key
        </Button>
      </Flex>
    </>
  );
};

export default AddObject;
