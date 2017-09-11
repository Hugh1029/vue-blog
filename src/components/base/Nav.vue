<template>
    <div>
        <div class="nav row">
            <ul class="nav-tab">
                <li v-for="(menu,index) in menus" class="col-md-2 col-xs-12 col-sm-6 " :class="{active : (index == myIndex)}" @click="choiceTab(index)">
                    <router-link to="/api">
                        <a href="#"><span :class="{'text-active' : (index == myIndex)}">{{menu.name}}</span></a>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
    export default {
        props: {
           
        },
        data (){
            return {
                menus:[
                    {
                        name: "小说故事",
                        url: "http://www.zjp1029.cn"
                    },
                    {
                        name: "API",
                        url: "http://www.zjp1029.cn"
                    },
                    {
                        name: "对我说",
                        url: "http://www.zjp1029.cn"
                    }
                ],
                myIndex : 0
            }
        },
        methods: {
            choiceTab (index){
                this.myIndex = index;
            }
        },
        beforeMount (){
            this.$http.get("http://localhost:8080/main").then((response)=>{
                console.log(response.body);
                if(response.body.success){
                    this.menus = response.body.body;
                }
            }).catch((response)=>{
                
            });
        }
    }

</script>

<style>
    .nav {
        margin-top: 10px;
    }
    .nav ul li{
        font-size: 18px;
        display: inline-block;
        list-style: none;
        margin: 0 5px;
        padding: 3px 8px;
        text-align: center;
    }
    .nav ul li a {
        color: #f3f3f3;
        text-decoration: none;
        cursor: pointer;
    }
    .nav ul li a:hover {
        color: #a4a2a2;
    }
    .active {
        background-image: url(http://answering-1253124701.cossh.myqcloud.com/person/images/bg2.png);
        border-radius: 5px;
        
    }
    .text-active {
        color: #07fde9;
    }
    
</style>