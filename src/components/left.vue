<template>
    <div>   
         <ul>
            <li @click="menu1">家居</li>
            <li @click="menu2">生鲜</li>
            <li @click="menu3">手机</li>
            <li>服装</li>
            <li>鞋包</li>
            <li>电脑</li>
            <li>书籍</li>
            <li>旅游</li>
            <li>{{ name }}</li>
        </ul> 
    </div>
</template>

<script type='text/javascript'>
    import Msg from './msg.js'   //  ./表示同级  ../表示上一级
    export default{  // 此处必写
        data (){
            return {
                name: '111'
            }
        },
        //事件
        methods:{
            menu1:function(){
                Msg.$emit("val","1");   //参数名，参数值    参数名可以任意取
                //通过$emit去触发Msg的on事件，  通过on的自定义事件来接收val         
            },
            menu2:function(){
                Msg.$emit("val","2");           
            },
            menu3:function(){
                Msg.$emit("val","3");           
            }
        }
    }
</script>