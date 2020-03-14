<template>
    <div>  
        <!-- {{list}}   -->
        <!-- 用list来接收菜单栏点击后传递的数据 -->

        <!-- 通过接收到的值和if语句判断页面所要显示的内容 -->
        <div v-if="list==1">
            <List :goodId="1"></List>
        </div>
        <div v-else-if="list==2">
           <List :goodId="2"></List>
        </div>
        <div v-else-if="list==3">
           <List :goodId="3"></List>
        </div>
        <!-- 菜单没有任何选择的时候 -->
        <div v-else>
           <List :goodId="0"></List>
        </div>



        <!-- <ul>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
            <li><img src="img/fresh.jpeg"/>></li>
        </ul> -->
    </div>
</template>

<script type='text/javascript'>
    import Msg from './msg.js'   //  ./表示同级  ../表示上一级
    import List from './list.vue' 
    export default{  // 此处必写
        //首先，给list赋一个初始值
       data(){
           return{
               list:0
           }
       },
       //接收
       mounted:function(){
           var _this = this  //右边的this是关键字“当前”，代表整个vue文件本身。 _this是副本
           //通过on来接收兄弟组件触发的点击事件   此处的val必须是兄弟组件点击事件定义的变量名
           //接收到val以后写一个回调函数，回调函数要有一个接收的地方，取名m   。也就是将接收到的val的值交给m处理， 把m的值赋值给list
           Msg.$on('val',function(m){    
               //this.list = m ;  //此时的this指的是on事件，所以this.list是找不到list,这就是为什么要定义_this变量的原因
               _this.list = m 
           }) 
       },
       components:{
           List   //来自于34行
       }
    }
</script>