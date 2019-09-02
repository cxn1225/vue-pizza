<template>
    <div id="register">
        <div class="img">
            <img src="../../assets/icon.c43f32c.png" alt="">
        </div>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">邮箱</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="" v-model="user.email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""
                    v-model="user.password">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">确认密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder=""
                    v-model="user.confirmPassword">
            </div>
            <div class="form-group">
                <input type="submit" value="登录" class="form-control bt1" id="exampleInputPassword1" placeholder="">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'app-register',
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                    confirmPassword: "",
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post("https://wd4565587092snmqvb.wilddogio.com/xnusers.json", this.user).then(result => {
                    this.$router.push("/login")
                })
            }
        },
    }
</script>


<style scoped>
    .form-group {
        font-weight: 800;
        font-size: 16px;
    }

    #register {
        border: 1px solid #bbbbbb;
        border-radius: 5px;
        padding: 10px 20px;
        margin-top: 15px;
    }

    .bt1 {
        background-color: #28a745;
        color: #ffffff;
        font-size: 16px;
    }

    .img {
        text-align: center;
        margin-top: 10px
    }
</style>