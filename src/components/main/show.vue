<template>
    <div class="show">
        <div class="shadown">
        <div class="show-image">
            <div class="close-tag hint" @click="close">
                <img src="http://answering-1253124701.cossh.myqcloud.com/person/images/close.png">
            </div>
            <div class="prev hint" @click="prev">
                <img src="http://answering-1253124701.cossh.myqcloud.com/person/images/prev.png">
            </div>
            <transition name="fade">
                <div class="image" :key="myIndex">
                   <img :src="pictureArray[myIndex]">
                </div>
            </transition>
            <div class="next hint" @click="next">
                <img src="http://answering-1253124701.cossh.myqcloud.com/person/images/next.png">
            </div>
        </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: {
            pictureArray: {
                type: Array,
                default: []
            },
            myIndex: {
                type: Number,
                default: 0
            }
        },
        data (){
            return {
                
            }
        },
        methods: {
            close (){
                this.$emit("close-win");
            },
            next (){
                var val = (this.myIndex + 1) % this.pictureArray.length;
                this.$emit('next',val)
            },
            prev (){
                var val = (this.myIndex - 1 + this.pictureArray.length) % this.pictureArray.length;
                this.$emit('prev',val)
            }
        }
    }
</script>


<style scoped="true">
   
    /**过渡动画**/
    /**进入动画**/
    .fade-enter {
       /* transform: translateX(-500px);*/
        opacity: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: all .5s;
    }
    .fade-leave-to {
        transform: translateX(300px);
        opacity: 0;
    }
    .show {
        
    }
    .shadown {
        position: fixed;
        background: rgba(0,0,0,0.65);
        z-index: 100;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .show-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    .hint {
        z-index: 120;
        color: #fff;
        opacity: 0.5;
        cursor: pointer; 
    }
    
    .hint:hover {
        opacity: 1.0;
    }
    
    .close-tag {
        position: absolute;
        top: 40px;;
        right: 40px;
        
    }
    
    .prev {
        position: absolute;
        top: 45%;
        left: 50px;
    }
    
    .next {
        position: absolute;
        top: 45%;
        right: 50px;
    }
    
    .image {
        position: absolute;
        width: 40%;
        top: 18%;
        left: 30%;
        z-index: 120;
        border: 2px solid #fff;
    }
    
    .image img {
        width: 100%;
    }
    
    
</style>