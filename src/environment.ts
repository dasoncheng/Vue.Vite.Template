export const environment = {
  mode: import.meta.env.MODE,
  uri: {
    pla: import.meta.env.VITE_URI_PLA,
    sso: import.meta.env.VITE_URI_SSO,
  },
  forge: {
    aes: import.meta.env.VITE_AES,
    rsa: import.meta.env.VITE_RSA,
  },
  pattern: {
    idcard: "^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$",
    telephone: "^[0-9]{3,4}[-][0-9]{8}$",
    mobile: "^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$",
    phone: "^\\d{3,4}[-]{0,1}\\d{8,12}$",
    sms: "^\\d{6}$",
  },
  dictionary: {
    classification: [
      { label: "高血压", value: "c-0" },
      { label: "糖尿病", value: "c-1" },
      { label: "高脂血症", value: "c-2" },
      { label: "房颤", value: "c-3" },
      { label: "心力衰竭", value: "c-4" },
      { label: "冠心病", value: "c-5" },
      { label: "脑卒中", value: "c-6" },
      { label: "肥胖", value: "c-7" },
      { label: "其他", value: "c-3" },
    ],
    flup_type: [
      { label: "电话随访", value: 1 },
      { label: "来院随访", value: 2 },
    ],
    flup_status: [
      { label: "未完成", value: 0 },
      { label: "已完成", value: 1 },
      { label: "已终止", value: 2 },
    ],
    frequency_unit: [
      { label: "天", value: 1 },
      { label: "周", value: 2 },
      { label: "月", value: 3 },
    ],
    pressure_status: [
      { label: "一级高血压", value: 1 },
      { label: "二级高血压", value: 2 },
      { label: "三级高血压", value: 3 },
      { label: "正常", value: 4 },
      { label: "偏低", value: 5 },
    ],
    gender: [
      { label: "未知的性别", value: "0" },
      { label: "男性", value: "1" },
      { label: "女性", value: "2" },
      { label: "未说明的性别", value: "9" },
    ],
    nation: [
      { label: "汉族", value: "01" },
      { label: "蒙古族", value: "02" },
      { label: "回族", value: "03" },
      { label: "藏族", value: "04" },
      { label: "维吾尔族", value: "05" },
      { label: "苗族", value: "06" },
      { label: "彝族", value: "07" },
      { label: "壮族", value: "08" },
      { label: "布依族", value: "09" },
      { label: "朝鲜族", value: "10" },
      { label: "满族", value: "11" },
      { label: "侗族", value: "12" },
      { label: "瑶族", value: "13" },
      { label: "白族", value: "14" },
      { label: "土家族", value: "15" },
      { label: "哈尼族", value: "16" },
      { label: "哈萨克族", value: "17" },
      { label: "傣族", value: "18" },
      { label: "黎族", value: "19" },
      { label: "傈僳族", value: "20" },
      { label: "佤族", value: "21" },
      { label: "畲族", value: "22" },
      { label: "高山族", value: "23" },
      { label: "拉祜族", value: "24" },
      { label: "水族", value: "25" },
      { label: "东乡族", value: "26" },
      { label: "纳西族", value: "27" },
      { label: "景颇族", value: "28" },
      { label: "柯尔克孜族", value: "29" },
      { label: "土族", value: "30" },
      { label: "达斡尔族", value: "31" },
      { label: "仫佬族", value: "32" },
      { label: "羌族", value: "33" },
      { label: "布朗族", value: "34" },
      { label: "撒拉族", value: "35" },
      { label: "毛难族", value: "36" },
      { label: "仡佬族", value: "37" },
      { label: "锡伯族", value: "38" },
      { label: "阿昌族", value: "39" },
      { label: "普米族", value: "40" },
      { label: "塔吉克族", value: "41" },
      { label: "怒族", value: "42" },
      { label: "乌孜别克族", value: "43" },
      { label: "俄罗斯族", value: "44" },
      { label: "鄂温克族", value: "45" },
      { label: "德昂族", value: "46" },
      { label: "保安族", value: "47" },
      { label: "裕固族", value: "48" },
      { label: "京族", value: "49" },
      { label: "塔塔尔族", value: "50" },
      { label: "独龙族", value: "51" },
      { label: "鄂伦春族", value: "52" },
      { label: "赫哲族", value: "53" },
      { label: "门巴族", value: "54" },
      { label: "珞巴族", value: "55" },
      { label: "基诺族", value: "56" },

      { label: "穿青人族", value: "81" },
      { label: "其他", value: "97" },
      { label: "外国血统中国籍人士", value: "98" },
    ],
    marital_status: [
      { label: "未婚", value: "10" },
      { label: "已婚", value: "20" },
      { label: "初婚", value: "21" },
      { label: "再婚", value: "22" },
      { label: "复婚", value: "23" },
      { label: "丧偶", value: "30" },
      { label: "离婚", value: "40" },
      { label: "未说明的婚姻状况", value: "90" },
    ],
  },
};
