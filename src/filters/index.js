// 全局过滤器
const vFilter = {
  /**
   * 数字格式化 1000000 --> 1,000,000.00
   */
  vNumber: (number, places, symbol, thousand, decimal) => {
    number = number || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "";
    var i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "";
    var j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
  },
  /**
   * 银行卡显示
   */
  vCard: value => {
    return value ? '**** **** **** ' + value.substr(value.length - 4) : ''
  },
  /**
   * 手机号隐藏显示
   */
  vPhone: str => {
    return str ? str.substr(0, 3) + '****' + str.substr(7) : ''
  },
  /**
   * 手机号断层显示
   */
  vTelPhone: str => {
    return str.substr(0, 3) + ' ' + str.substr(3, 4) + ' ' + str.substr(7)
  },
  /**
   * 身份证号断层显示
   */
  vIdCard: str => {
    return str.substr(0, 3) + ' ' + str.substr(3, 3) + ' ' + str.substr(6, 4) + ' ' + str.substr(10, 4) + ' ' + str.substr(14)
  },
  /**
   * 时间毫秒转化
   */
  vGetDay: value => { // 转化天
    return parseInt(Math.floor(value / 3600) / 24)
  },
  vGetHour: value => { // 转化小时
    let val = parseInt(Math.floor(value / 3600) % 24)
    if (val < 10) {
      val = '0' + val
    }
    return val
  },
  vGetMin: value => { // 转化分钟
    let val = Math.floor(value / 60) % 60
    if (val < 10) {
      val = '0' + val
    }
    return val
  },
  vGetSec: value => { // 转化秒
    let val = value % 60
    if (val < 10) {
      val = '0' + val
    }
    return val
  }
}

export default vFilter
