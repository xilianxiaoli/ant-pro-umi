import React from 'react';
import { Result } from 'antd';
import check from './CheckPermissions';

// 这个组件才是 BasicLayout.jsx 中的经过多层包装后的 Authorized 组件
const Authorized = ({
  children,
  authority,
  noMatch = (
    <Result
      status={403}
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  ),
}) => {
  
  const childrenRender = typeof children === 'undefined' ? null : children;
  // 校验路由的权限
  const dom = check(authority, childrenRender, noMatch);
  return <>{dom}</>;
};

export default Authorized;
