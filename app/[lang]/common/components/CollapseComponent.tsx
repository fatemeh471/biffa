'use client';
import React from 'react';
import { Collapse, Space } from 'antd';
import { UpOutlined, CopyOutlined } from '@ant-design/icons';

const CollapseComponent = ({ item }: { item: any }) => (
  <Space direction="vertical" className="w-full">
    {item.map((i: { answer: string; qustion: string }) => (
      <Collapse
        collapsible="header"
        expandIconPosition="end"
        className="py-2 bg-transparent mb-3"
        expandIcon={({ isActive }) => (
          <UpOutlined rotate={isActive ? 90 : 0} className="text-primary-40" />
        )}
        items={[
          {
            key: '1',
            children: <p>{i.answer}</p>,
            label: (
              <Space>
                <CopyOutlined className="text-primary-40" />{' '}
                <span>{i.qustion}</span>
              </Space>
            ),
          },
        ]}
      />
    ))}
  </Space>
);

export default CollapseComponent;
