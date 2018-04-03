export const symbolPrefix = Symbol('prefix')
export const symbolContext = Symbol('context');
export function controller(path) {
  return (target)=>{
    target.prototype[symbolPrefix] =path;
    target.prototype[symbolContext] =null;
  }
}
function baseMethods(target, key, descriptor,name,path) {
  let method = descriptor.value;
  descriptor.value =  async (arg)=>{
    arg.url = target[symbolPrefix]?target[symbolPrefix]+path:path;
    arg.method=name;
    method.call(target[symbolContext],arg)
  }
}
export function get(path) {
  return function (target, key, descriptor) {
    baseMethods(target, key, descriptor,'get',path)
  }
}
export function post(path) {
  return function (target, key, descriptor) {
    baseMethods(target, key, descriptor,'post',path)
  }
}
export function showNotice(target, key, descriptor) {
  let method = descriptor.value;
  descriptor.value =  (arg)=>{
    arg.successNotice=true;
    method.call(target[symbolContext],arg)
  }
}
