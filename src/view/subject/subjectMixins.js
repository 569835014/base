export default {
  props:{
    subject:{
      type:Object,
      default(){
        return {
          stem:null,
          branch:null,
          type:null,
          answer:null,
          mode:null,
        }
      }
    }
  },
  data(){
    return {
      subAnswer:null
    }
  },
  methods:{
    validateAnswer(answer){
      if(this.subject.validateAnswer){
        return this.subject.validateAnswer(answer)
      }
      return false
    },

  }
}
