<template>
    <div id="login">
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
                <input type="submit" value="登录" class="form-control bt1" id="exampleInputPassword1" placeholder="">
            </div>
        </form>
    </div>

</template>

<script>
    export default {
        name: 'app-login',
        data() {
            return {
                user: {
                    email: "",
                    password: "",
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.get("https://wd4565587092snmqvb.wilddogio.com/xnusers.json", this.user).then(result => {
                    var hasUser = false
                    for (var user in result.data) {
                        if (result.data[user].email == this.user.email && result.data[user].password == this.user.password) {
                            hasUser = true
                        }
                    }
                    if (hasUser) {
                        localStorage.setItem("username", this.user.email)
                        this.$store.dispatch("setIsLoginAsync", true)
                        this.$store.dispatch("setUserAsync", this.user)
                        this.$router.push("/")
                    } else {
                        alert("账号或密码不正确")
                    }

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

    #login {
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