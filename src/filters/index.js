export function toFixed(input, num) { //第二个参数为小数点个数
  if (typeof (input) !== "number") throw ('只支持Number类型')
  return '￥' + input.toFixed(num);
}