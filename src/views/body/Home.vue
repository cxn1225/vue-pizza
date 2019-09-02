<template>
    <div id="home">
        <div class="home-center">
            <div class="home-context">
                <p>欢迎大家品尝pizza!</p>
                <p>这里有你非常喜欢的pizza!</p>
                <router-link tag="button" to="menu">Let's order!</router-link>
            </div>
        </div>
        <div class="footer">
            <Ordering class="home-footer" />
            <Express class="home-footer" />
            <HistoricalOrders class="home-footer" />

        </div>
    </div>
</template>

<script>
    import HistoricalOrders from "../about/HistoricalOrders"
    import Express from "../about/Express"
    import Ordering from "../about/Ordering"
    export default {
        name: 'app-home',
        components: {
            HistoricalOrders,
            Ordering,
            Express
        }
    }
</script>


<style scoped>
    #home {
        position: relative;
    }

    #home img {
        width: 100%;
    }

    .home-center {
        position: relative;
        background: url("../../assets/pizza.b587e39.jpg");
        height: 530px;
        margin-bottom: 25px;
    }

    .home-context {
        width: 900px;
        height: 320px;
        background-color: #ffffff;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0.8;
        padding-top: 70px;
        text-align: center;

    }

    p {
        font-size: 40px;
        margin-bottom: 30px;
    }

    button {
        width: 100px;
        height: 40px;
        background-color: #28a745;
        color: #ffffff;
        border: 0;
        border-radius: 5px;
        margin-top: 10px;
    }

    .footer {
        display: flex;
        justify-content: space-around;
        padding-bottom: 15px;
    }

    .home-footer {
        width: 350px;
        border: 1px solid #cccccc;
        border-radius: 5px;
    }
</style>