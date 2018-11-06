<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
/*清除默认样式*/
*{margin:0; padding:0;}
img{vertical-align:top;border:none;}
a{text-decoration:none;color:#000;}
li{list-style:none;}
html{-webkit-tap-highlight-color: transparent;}

/*常用*/
.fl{float:left;}
.fr{float:right;}
.clearfix{zoom: 1;}
.clearfix:after{content:'';display:block;clear:both;}

.main-body{
    width: 400px;
    margin: 50px auto 0;
    text-align: center;
}
</style>

