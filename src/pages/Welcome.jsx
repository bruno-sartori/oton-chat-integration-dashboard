import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Typography, Alert } from 'antd';
import styles from './Welcome.less';
import { connect } from 'dva';
import { FullscreenChat } from 'oton-chat-client';

const Welcome = ({ chat, dispatch }) => (
  <div style={{ maxHeight: 'calc(100vh - 100px' }}>
    <FullscreenChat chatReducer={chat} dispatch={dispatch} apiHost="localhost:3001" authorizationToken="123456" />
  </div>
);

export default connect(( { chat }) => ({
  chat,
}))(Welcome);
