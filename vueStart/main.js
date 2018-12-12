
Vue.component ('task-list',{
  template: '<div><task v-for="task in tasks">{{task.description}} </task></div>',
  data(){
    return{
      tasks:[
      {description:'Do something 1', completed: false},
      {description:'Do something 2', completed: true},
      {description:'Do something 3', completed: false},
      {description:'Do something 4', completed: true}
      ]
    };
  }

});

Vue.component('task',{
  //View
  template:'<li><slot></slot></li>'

});

new Vue ({
  el:'#root2'
})
