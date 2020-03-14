<template>
    <div name="show">
        <ul>
            <li v-for="goods in list">
                <img v-bind:src="goods.img">
            </li>
        </ul>
    </div>
</template>

<script type='text/javascript'>
    export default{  // 此处必写
       name:"show",
       data(){
           var obj=this;
           //在初始化的时候也要有一个条件的判断
           var url="";
           if(obj.goodId==1){
                url="json/room.json"
            }else if(obj.goodId==2){
                url="json/fresh.json"
            }else if(obj.goodId==3){
                url="json/phone.json"
            }else{
                url="json/room.json"
            }
           //$http是全局注册axios的时候定义的变量名，也可以是其他名字
           //then、data都是关键字
           this.$http.get(url).then(function(res){
                obj.list=res.data;
           })
           return{
               list:[]
           }
       },
       //父子组件传值
       props:{
           goodId:Number   //  需要接收的参数名/类型
       },
       //需要监听goodId的改变，判断是哪个菜单项发生改变
       watch:{  
           goodId(){
                var obj=this;
                var url="";
                if(obj.goodId==1){
                    url="json/room.json"
                }else if(obj.goodId==2){
                    url="json/fresh.json"
                }else if(obj.goodId==3){
                    url="json/phone.json"
                }else{
                    url="json/room.json"
                }
                //$http是全局注册axios的时候定义的变量名，也可以是其他名字
                //then、data都是关键字
                this.$http.get(url).then(function(res){
                        obj.list=res.data;
                })
                return{
                    list:[]
                }
           }
       }

    }
</script>