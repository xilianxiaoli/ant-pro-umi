import Authorized from './Authorized';
import Secured from './Secured';
import check from './CheckPermissions';
import renderAuthorize from './renderAuthorize';
Authorized.Secured = Secured;
Authorized.check = check;
// 返回高阶组件
const RenderAuthorize = renderAuthorize(Authorized);
export default RenderAuthorize;
