export default function (url) {
  return () => System.import(`@/${url}`)
}
export const asyncImport = (url) => {
  return () => import(/*webpack*/`@/${url}`)
}
// export const asyncRequire=(url,name)=>{
//   return (r)=>  require.ensure([], () => r(require(`@/${url}`)), name)
// }
