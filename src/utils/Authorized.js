import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';
/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */

// getAuthority 获取到权限码  RenderAuthorize 返回一个高阶组件
let Authorized = RenderAuthorize(getAuthority()); // Reload the rights component

// 用于接口获取权限后 重新生成高阶组件
const reloadAuthorized = () => {
  Authorized = RenderAuthorize(getAuthority());
};
/**
 * hard code
 * block need it。
 */

window.reloadAuthorized = reloadAuthorized;
export { reloadAuthorized };
export default Authorized;
