<template>
    <div id="menu">
        <h2>菜单</h2>
        <table>
            <thead>
                <tr>
                    <th>品种</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in pizzas" :key="index">
                    <td>{{item.name}}</td>
                    <td><button @click="deletPizza(index)" class="btn btn-outline-danger btn-sm">x</button></td>
                </tr>
            </tbody>
        </table>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: 'pizza-menu',
        props: {
            pizzas: Object
        },
        created() {
            this.updatePizza()
        },
        methods: {
            deletPizza(id) {
                this.$emit("delete", id)
            },
            updatePizza() {
                this.$axios.get("https://wd4565587092snmqvb.wilddogio.com/xnmenus.json").then(result => {
                    this.pizzas = result.data
                })
            }
        },

    }
</script>


<style scoped>
    h2 {
        padding: 20px 0;
        padding-left: 10px;
    }

    #menu {
        float: left;
    }

    .clear {
        clear: both;
    }

    table {
        width: 280px;
        font-size: 18px;
    }

    thead {
        border-top: 1px solid #aaaaaa;
        border-bottom: 1px solid #aaaaaa;
    }

    th,
    td {
        padding: 10px 5px;
    }
</style>