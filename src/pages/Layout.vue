<template>
    <div class="container">
        <div class="header row">
            <div class="left col-md-5 col-xs-12 col-sm-12">
                <div class="header-title">因缘不是姻缘</div>
            </div>
            <div class="right col-md-7 col-xs-12 col-sm-12">
                <my-nav></my-nav>
            </div>
        </div>
        <div class="body row">
            <router-view></router-view>
            <div>
                <my-picture></my-picture>
            </div>
        </div>
        <div class="footer">
            <my-footer></my-footer>
        </div>
    </div>
</template>

<script>
    import Nav from 'components/base/Nav'
    import Index from 'pages/Index'
    import Footer from 'pages/footer'
    import myPicture from 'components/main/Picture'
    export default {
        components: {
          myNav:Nav,
          myFooter: Footer,
          myIndex: Index,
          myPicture  
        }
    }
</script>


<style>
    .left {
        float: left;
    }
    .right {
        float: right;
    }
    .header {
        margin-top: 40px;
        min-height: 80px;
    }
    .container {
        color: #fff;
        /*font-family: '隶书';*/
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Lato', sans-serif;
        color: #fff;
        margin: 0;
    }
    .header-title {
        font-size: 44px;
        padding-top: 0;
    }
</style>