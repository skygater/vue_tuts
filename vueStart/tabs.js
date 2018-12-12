
Vue.component('tabs',{
    template:`
    <div>
            <div class="tabs">
          <ul>
            <li v-for= "tab in tabs " :class="{'is-active':tab.isActive}">
            <a :href="tab.href" @click = "selectedTab(tab)">{{tab.name}}</a></li>
          </ul>
        </div>
        <div class="tabs-details">
        <slot> </slot>
        </div>
    </div>
    `,
    data(){
      return{
        tabs:[]
      };
    },
    created(){
      this.tabs = this.$children;
    },
    methods:{
      selectedTab(selectedTab){
        this.tabs.forEach( tab=> {
          tab.isActive= (tab.name == selectedTab.name);
        });
      }
    }
});

Vue.component('tab',{
  props:{
    name:{required:true},
    selected:{default:false}
  },
  template:`
  <div v-show= "isActive"><slot></slot></div>
  `,
  data (){
    return{
      isActive: false
    };
  },
  computed:{
    href(){
      return '#'+this.name.toLowerCase().replace(" ","-");
    }
  },
  mounted(){
    this.isActive = this.slected;
  }
});

new Vue({
  el:'#root2'
});
