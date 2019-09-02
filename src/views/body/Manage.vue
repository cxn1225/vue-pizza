<template>
    <div id="manage">
        <Addpizza @update="updatePizza" />
        <Menu :pizzas="pizzas" @delete="deletePizza" />
    </div>
</template>

<script>
    import Addpizza from "../manage/Addpizza"
    import Menu from "../manage/Menu"
    export default {
        name: 'app-manage',
        data() {
            return {
                pizzas: null
            }
        },
        components: {
            Addpizza,
            Menu
        },
        methods: {
            updatePizza() {
                this.$axios.get("api/xnmenus.json").then(result => {
                    console.log(result.data)
                    this.pizzas = result.data
                })
            },
            deletePizza(id) {
                this.$axios.delete(`https://wd4565587092snmqvb.wilddogio.com/xnmenus/${id}.json`).then(result => {
                    console.log(result.data)
                    this.updatePizza()
                })
            }
        },
    }
</script>


<style scoped>

</style>