<template>
    <div id="HistoricalOrders">
        <p class="p1">联系我们</p>
        <div class="footer">
            <h3>联系我们</h3>
            <p class="p2">675087841@qq.com</p>
            <a href="" @click.prevent="phone = true; people = false">电话</a>&nbsp;&nbsp;
            <a href="" @click.prevent="people = true; phone = false">联系人</a>
            <h1 v-if="phone">15513274577</h1>
            <h1 v-if="people">池晓宁</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HistoricalOrders',
        data() {
            return {
                phone: false,
                people: true
            }
        }
    }
</script>


<style scoped>
    * {
        padding: 0;
        margin: 0;
    }

    .p1 {
        padding: 15px 15px;
        background-color: #eeeeee;
        border-bottom: 1px solid #cccccc;
        font-size: 16px
    }

    .footer {
        padding: 25px 15px;
        background-color: #f8f9fa;
    }

    .p2 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 16px;
    }

    a {
        font-size: 16px;
    }

    h1 {
        margin-top: 30px;
        padding-left: 30px;
    }
</style>