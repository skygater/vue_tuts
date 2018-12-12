//
// Vue.component('message',{
// props:['title','body'],
// data(){ return {isVisible:true}; },
// template:'<div v-show="isVisible"><h1>{{title}} <button v-on:click = "hidemodal"> HIDE </button></h1><p>{{body}}</p></div>',
// methods:{
//   hidemodal(){
//     this.isVisible=false;
//   }
// }
//
// });

Vue.component('modal',{
  template:`
  <div class="modal is-active">
   <div class="modal-background"></div>
   <div class="modal-content">
   <div class="box"><slot></slot></div>
   </div><button class="modal-close is-large"  aria-label="close"  @click="$emit('close')"></button>
   </div>
  `
});

new Vue ({
  el:'#root2',
  data:{
    isShown: false
  },
  methods:{
    showModal(){
      this.isShown = true;
    }
  }
})
