'use client';

'use client';

import React from 'react';
import { Collapse, Space } from 'antd';
import { UpOutlined, CopyOutlined } from '@ant-design/icons';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const App: React.FC = ({ item }) => (
  <Space direction="vertical" className="w-full">
    {item.map((i) => (
      <Collapse
        collapsible="header"
        expandIconPosition="end"
        className="py-2 bg-transparent mb-3"
        expandIcon={({ isActive }) => (
          <UpOutlined
            rotate={isActive ? 90 : 0}
            style={{ color: 'orange' }} // تغییر رنگ آیکن به نارنجی
          />
        )}
        items={[
          {
            key: '1',
            children: <p>{i.answer}</p>,
            label: (
              <Space>
                <CopyOutlined style={{ color: 'orange' }} /> <span>{i.qustion}</span>
              </Space>
            ),
          },
        ]}
      />
    ))}
  </Space>
);

export default App;
