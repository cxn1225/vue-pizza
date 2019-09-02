<template>
    <div id="addpizza">
        <h2>添加新的Pizza</h2>
        <form class="form-horizontal" @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">品种</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder="" v-model="pizza.name">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">描述</label>
                <div class="col-sm-10">
                    <textarea rows="8" class="form-control" style="height: 100px"
                        v-model="pizza.description"></textarea>
                </div>
            </div>
            <p>选项1</p>
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">尺寸</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder=""
                        v-model="pizza.options[0].size">
                </div>
            </div>
            <div class=" form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">价格</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder=""
                        v-model="pizza.options[0].price">
                </div>
            </div>
            <p>选项2</p>
            <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">尺寸</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder=""
                        v-model="pizza.options[1].size">
                </div>
            </div>
            <div class=" form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">价格</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputEmail3" placeholder=""
                        v-model="pizza.options[1].price">
                </div>
            </div>
            <div class="form-group">
                <input type="submit" value="提交" class="form-control bt1" id="exampleInputPassword1" placeholder="">
            </div>
        </form>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                pizza: {
                    description: "",
                    name: "",
                    options: [
                        {
                            price: "",
                            size: ""
                        },
                        {
                            price: "",
                            size: ""
                        },
                    ]
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$axios.post("https://wd4565587092snmqvb.wilddogio.com/xnmenus.json", this.pizza).then(result => {
                    console.log(result.data)
                    this.$emit("update")
                })
            }
        },
    }
</script>


<style scoped>
    #addpizza {
        float: left;
        width: 800px;
    }

    h2 {
        padding: 20px 0;
        padding-left: 10px;
    }

    .form-group {
        padding: 5px;
    }

    .col-sm-2 {
        width: 8%;
        font-size: 14px;
        color: #888888;
    }

    p {
        font-size: 16px;
    }

    .clear {
        clear: both;
    }

    .form-control {
        height: 40px;
    }

    .bt1 {
        background-color: #28a745;
        color: #ffffff;
        font-size: 16px;
        width: 750px;
    }
</style>