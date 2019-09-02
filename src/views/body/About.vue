<template>
    <div id="about">
        <div class="about-left">
            <ul>
                <router-link to="/about/" tag="li">历史订单</router-link>
                <router-link to="/about/Contact" tag="li">联系我们</router-link>
                <router-link to="/about/Ordering" tag="li">点餐文档</router-link>
                <router-link to="/about/Express" tag="li">快递信息</router-link>
            </ul>
        </div>
        <div class="about-right">
            <router-view></router-view>
        </div>
        <div class="clear">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-about',
    }

</script>


<style scoped>
    .about-left {
        float: left;
        width: 400px;
        margin-top: 10px;
    }

    .about-right {
        float: right;
        width: 300px;
    }

    ul {
        list-style: none;
    }

    li {
        width: 320px;
        height: 50px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        line-height: 50px;
        padding: 0 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }

    .clear {
        clear: both;
    }

    .about-right {
        float: right;
        width: 750px;
        border-radius: 4px;
        border: 1px solid #cccccc;

    }
</style>