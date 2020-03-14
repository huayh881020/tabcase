<template>
    <div id="main">
        <div id="left">
            <Left></Left>
        </div>
        <div id="right">
            <div id="up">
                <img src="img/banner.jpeg"/>
            </div>
            <div id="down">
                <Right></Right>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<script type='text/javascript'>
    //引用
    import Left from '../components/left.vue'
    import Right from '../components/right.vue'

    //注册组件
    export default{
        components:{
            Left,
            Right
        }
    }
</script>

<style>
    *{
        padding :0;
        margin :0;
    }
    ul{
        list-style: none;
        font-size: 0;
    }
    
    html,body,#app{
        width:100%;
        height:100%;
    }
    #main{
        padding :20px 50px;
        box-sizing :border-box;
        background :#ffffff;
        width :100%;
        height :100%;
        position: relative;
    }
    #left{
        width: 100px;
        height: 100%;
        background: #fff;
        position: absolute;
        top:20px;
        left: 50px;
        cursor: pointer;
    }
    #left li:hover{
        color: #466dd8;
    }
    #right{
        padding :0 0 0 100px;
        box-sizing :border-box;
        background: #f6f6f6;
        width :100%;
        height :100%;
        overflow: auto;
    }
    #right img{
        width: 100%;
        height :200px;
    }
    #top{
        height :100%;
    }
    #left ul li{
        line-height: 60px;
        font-size: 24px;
        color: #666;
        list-style: none;
        border-bottom: 1px solid #e6e6e6;
        text-align: center;
    }
    #down ul li{
        width: 25%;
        background: #fff;
        float: left;

    }
    #down img{
        width: 100%;
        height: 100%;
        display: block;
    }

    

</style>