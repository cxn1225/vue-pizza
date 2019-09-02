<template>
    <div id="HistoricalOrders">
        <p class="p1">点餐文档</p>
        <div class="footer">
            <h3>点餐文档</h3>
            <p class="p2">675087841@qq.com</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HistoricalOrders',

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
    }
</style>