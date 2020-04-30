/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */
let CURRENT = 'NULL';

/**
 * use  authority or getAuthority
 * 为了给全局的当前用户的权限对象赋值 CURRENT
 * @param {string|()=>String} currentAuthority
 */
const renderAuthorize = Authorized => currentAuthority => {
  if (currentAuthority) {
    if (typeof currentAuthority === 'function') {
      CURRENT = currentAuthority();
    }

    if (
      Object.prototype.toString.call(currentAuthority) === '[object String]' ||
      Array.isArray(currentAuthority)
    ) {
      CURRENT = currentAuthority;
    }
  } else {
    CURRENT = 'NULL';
  }

  return Authorized;
};

export { CURRENT };
export default Authorized => renderAuthorize(Authorized);
