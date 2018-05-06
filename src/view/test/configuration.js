const SUBJECT_TYPE=['choice','completion','judgMent','shortAnswer'];
const TYPE_CONFIG={
  //判断题是客观题有题支
  choice:{
    isObjective:true,
    branch:true,
    cname:'选择题',
    mode:[
      'multi',
      'single'
    ],
    answerType:'Array'
  },
  //填空题是主观题，有占位符
  completion:{
    isObjective:true,
    cname:'填空题',
    placeholder:'$',
    answerType:'Object'
  },
  //判断题为客观题
  judgMent:{
    cname:'判断题',
    isObjective:true,
  },
  //简答题为主观题
  shortAnswer:{
    isObjective:false,
    answerType:'String'
  }
}
export  {
  SUBJECT_TYPE,
  TYPE_CONFIG
}
