<template>
    <div class="main">
        <div class="row">
            <div class="col-sm-12 header">
                <img :src="headImg" class="head-circle icon-image">
                <div class="sign-style">
                    <span>{{sign}}</span>
                </div>
            </div>
            <!--body-->
            <div class="col-sm-12 body">
                <div class="row">
                   <!--基本信息-->
                    <div v-for="(item,index) in baseInfo" class="col-sm-6 base-info">
                        {{item.title}}:{{item.content}}
                    </div>
                    <!--工作经历-->
                    <div class="col-sm-12 experience-title">
                        WORK EXPERIENCE:
                    </div>
                    <div v-for="(item,index) in experience" class="col-sm-12 experience-body">
                        <div>{{item.time}}</div>
                        <div>{{item.company}}</div>
                        <div>{{item.content}}</div>
                    </div>
                    <!--技能进度条-->
                    <div class="col-sm-12 skill-title">
                        PROFESSIONAL SKILLS:
                    </div>
                    <div v-for="(item,index) in skills" class="col-sm-6 skill-content">
                        <div class="progress progress-striped active">
                            <div class="progress-bar progress-bar-danger" :style="{width:item.content}">{{item.title}}</div>
                        </div>
                    </div>
                    
                    <!--使用技能介绍
                    <div v-for="(item,index) in apply" class="col-sm-12">
                        {{index+1}}.{{item.content}}
                    </div>-->
                    
                    <!--个人介绍-->
                    <div class="col-sm-12 introduce-title">介绍说明:</div>
                    <div v-for="(item,index) in introduce" class="col-sm-12 introduce-content">
                        {{index+1}}.{{item}}
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
    export default {
        data (){
            return {
                headImg: "http://answering-1253124701.cossh.myqcloud.com/person/images/icon.png",
                sign: "要忘记一个人的恩情很容易，但要忘记一个人的仇恨，好像就太难了。——古龙",
                baseInfo: [
                    {
                        title: "NAME",
                        content: "张建平"
                    },
                    {
                        title: "EMAIL",
                        content: "zjp1029@aliyun.com"
                    },
                    {
                        title: "TELEPHONE",
                        content: "15366088223"
                    },
                    {
                        title: "GITHUB",
                        content: "https://github.com/zjp1029"
                    },
                    {
                        title: "JIANSHU",
                        content: "http://www.jianshu.com/u/605bb15399bc"
                    },
                    {
                        title: "BIRTHDAY",
                        content: "1994.10.29"
                    },
                    {
                        title: "SCHOOL",
                        content: "金陵科技学院"
                    },
                    {
                        title: "EDUCATION",
                        content: "本科(学士)"
                    },
                    {
                        title: "MAJOR",
                        content: "软件工程"
                    }
                ],
                experience: [
                    {
                        time: "2016.5-2016.8",
                        company: "苏州兰睿实验技术有限公司",
                        content: "实习于兰睿实验技术有限公司"
                    },
                    {
                        time: "2016.9-2017.5",
                        company: "南京韵奇盈信息技术有限公司",
                        content: "实习于南京韵奇盈信息技术有限公司"
                    }
                ],
                skills: [
                    {
                        title: "JAVAWEB",
                        content: "70%"
                    },
                    {
                        title: "Android",
                        content: "70%"
                    },
                    {
                        title: "nodejs",
                        content: "30%"
                    },
                    {
                        title: "JavaScript & Jquery",
                        content: "50%"
                    },
                    {
                        title: "html & css",
                        content: "50%"
                    },
                    {
                        title: "vue.js",
                        content: "50%"
                    },
                    {
                        title: "sql",
                        content: "60%"
                    }
                ],
                introduce:["idea爱好者，开发过程偏爱idea作为开发工具","开源爱好者","命令行爱好者"]
            }
        }
    }
</script>


<style scoped="true">
    .main {
        width: 80%;
        margin: auto;
        padding: 0 40px;
        background: rgba(255,255,255,0.2);
    }
    .header {
        text-align: center;
        margin-top: 18px;
        border-bottom: 1px solid #fff;
    }
    .head-circle {
         border-radius: 50%;   
    }
    .icon-image {
        width: 80px;
        height: 80px;
    }
    .sign-style {
        margin: 5px 0;
    }
    .body {
        margin-top: 30px;
        margin-bottom: 30px;
        border: 1px solid #fff;
        padding-top: 5px;
        padding-bottom: 15px;
    }
    .base-info {
        margin: 5px 0;
        font-size: 16px;
    }
    .experience-title {
        font-size: 16px;
        font-weight: bold;
        margin-top: 15px;
        
    }
    .experience-body {
        font-size: 14px;
        margin: 5px 0;
    }
    
    .skill-title {
        font-size: 16px;
        font-weight: bold;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .skill-content {
        font-size: 14px;
        padding-right: 10%;
    }
    .introduce-title {
        font-size: 16px;
        font-weight: bold;
    }
    .introduce-content {
        font-size: 14px;
        margin: 3px 0;
    }
</style>