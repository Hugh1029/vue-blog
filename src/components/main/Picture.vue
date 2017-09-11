<template>
    <div class="picture">
        <div class="main-image row">
            <div v-for="(item,index) in pictures" class="col-md-3 col-sm-6 col-xs-12 image-box">
                <img :src="item" @click="showImage(index)" width="100%"/>
            </div>
        </div>
        <my-show v-if="showShadown" :pictureArray="pictures" :myIndex="index" @close-win="closeImage" @next="next" @prev="prev"></my-show>
    </div>
</template>

<script>
    import Show from 'components/main/show'
    export default {
        components: {
            myShow:Show
        },
        data (){
            return {
                pictures: [
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo1.jpg",
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo2.jpg",
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo3.jpg",
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo4.jpg",
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo5.jpg",
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo6.jpg",
                    "http://answering-1253124701.cossh.myqcloud.com/person/images/photo7.jpg"
                ],
                showShadown: false,
                index: 0
            }
        },
        methods: {
            showImage (index){
                this.index = index;
                this.showShadown = true;
            },
            closeImage (){
                this.showShadown = false;
            },
            next (val){
                this.index = val;
            },
            prev (val){
                this.index = val;
            }
        },
        beforeMount (){
            //在这里获取要显示的图片
        }
    }
</script>


<style scoped="true">
    .picture {
        margin-top: 30px;
        width: 100%;
    }
    .main-image {
        text-align: center;
        margin: 0 5%;
    }
    .image-box {
        padding: 10px;
        cursor: pointer;
        text-align: center;
    }
    img {
        border: 2px solid #fff;
    }
   
</style>