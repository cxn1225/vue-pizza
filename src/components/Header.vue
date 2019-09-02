<template>
    <div id="header">
        <div class="header-left">
            <p>Pizza点餐系统</p>
            <ul>
                <li>
                    <router-link to="/">首页</router-link>
                </li>
                <li>
                    <router-link to="/menu">菜单</router-link>
                </li>
                <li>
                    <router-link to="/manage">管理</router-link>
                </li>
                <li>
                    <router-link to="/about">关于我们</router-link>
                </li>
            </ul>
        </div>
        <div class="header-right">
            <ul>
                <li v-if="isLogin">
                    <router-link to="/login">{{user.email}}</router-link>
                </li>
                <li v-if="isLogin">
                    <a to="/login" @click.prevent="unSubmit">注销</a>
                </li>
                <li v-if="!isLogin">
                    <router-link to="/login">登录</router-link>
                </li>
                <li v-if="!isLogin">
                    <router-link to="/register">注册</router-link>
                </li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"
    export default {
        name: 'app-header',
        computed: mapGetters(["isLogin", "user"]),
        created() {
            if (localStorage.getItem("username")) {
                this.$store.dispatch("setIsLoginAsync", true)
                this.$store.dispatch("setUserAsync", { email: localStorage.getItem("username") })
            }
        },
        methods: {
            unSubmit() {
                this.$store.dispatch("setIsLoginAsync", false)
                this.$store.dispatch("setUserAsync", null)
            }
        },
    }
</script>


<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    #header {
        background-color: #f8f9fa;
        padding: 15px 30px;
        font-size: 18px;
        width: 97%;
        margin: auto;
    }

    .header-left {
        float: left;
    }

    .header-right {
        float: right;
    }

    p,
    ul,
    li {
        display: inline-block;
    }

    li {
        margin-left: 20px;
        color: #888888;
    }

    .clear {
        clear: both;
    }

    a {
        color: #888888;
        text-decoration: none
    }
</style>