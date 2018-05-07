export default {
  methods:{
    renderText(item,index){
      let start=65
      return String.fromCharCode(start+index)+'、'+item
    }
  }
}
