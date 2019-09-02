<template>
    <div>
        <div id="menu">
            <table>
                <thead>
                    <tr>
                        <th>尺寸</th>
                        <th>价格</th>
                        <th>加入</th>
                    </tr>
                </thead>
                <tbody v-for="(item, index1) in pizzas" :key="index1">
                    <tr>{{item.name}}</tr>
                    <tr v-for="(pizza, index2) in item.options" :key="index2">
                        <td>
                            {{pizza.size}}
                        </td>
                        <td>
                            {{pizza.price}}
                        </td>
                        <td><button @click="addPizza(index1,index2)" class="btn btn-outline-danger btn-sm">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="car">
            <table>
                <thead>
                    <tr>
                        <th>数量</th>
                        <th>品种</th>
                        <th>价格</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in car" :key="index">
                        <td> <button @click="unAddNumber(index)" class="btn btn-outline-danger btn-sm">-</button>
                            {{item.number}}
                            <button @click="AddNumber(index)" class="btn btn-outline-danger btn-sm">+</button>
                        </td>
                        <td> {{item.name+item.size}}</td>
                        <td> {{item.price * item.number}}</td>
                    </tr>
                </tbody>
            </table>
            总价：{{allPrice}}RMB
            <div class="form-group">
                <input type="submit" value="提交" class="form-control bt1" id="exampleInputPassword1" placeholder="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app-menu',
        data() {
            return {
                pizzas: {},
                car: [],
                allPrice: "0" - 0
            }
        },
        created() {
            this.$axios.get("https://wd4565587092snmqvb.wilddogio.com/xnmenus.json").then(result => {
                this.pizzas = result.data
            })
        },
        methods: {
            addPizza(id1, id2) {
                const newCar = {
                    number: 1,
                    name: this.pizzas[id1].name,
                    size: this.pizzas[id1].options[id2].size,
                    price: this.pizzas[id1].options[id2].price
                }
                console.log(this.car)
                if (this.car.length == 0) {
                    this.car.push(newCar)
                } else {
                    var hansPizaa = false
                    for (var i = 0; i < this.car.length; i++) {
                        if (this.car[i].name + this.car[i].size == newCar.name + newCar.size) {
                            hansPizaa = true
                            break
                        }
                    }
                    if (!hansPizaa) {
                        this.car.push(newCar)
                    }
                }
                var sum = 0
                for (var i = 0; i < this.car.length; i++) {
                    sum = sum + (this.car[i].price - 0)
                }
                this.allPrice = sum

            },
            unAddNumber(id) {
                if (this.car[id].number > 0) {
                    this.car[id].number--
                    this.allPrice = this.allPrice - (this.car[id].price - 0)
                }
                if (this.car[id].number == 0) {
                    this.car.splice(id, 1)
                }
            },
            AddNumber(id) {
                this.car[id].number++
                this.allPrice = this.allPrice + (this.car[id].price - 0)
            },
        },
    }
</script>


<style scoped>
    #menu {
        float: left;
    }

    #menu table {
        width: 680px;
        font-size: 18px;
        margin-top: 20px;
    }

    th,
    td {
        padding: 10px 5px;
        border-top: 1px solid #aaaaaa;
        border-bottom: 1px solid #aaaaaa;
    }

    #car {
        float: right;
        margin-right: 20px;
    }

    #car table {
        width: 350px;
        font-size: 18px;
        margin-top: 20px;
    }

    .bt1 {
        background-color: #28a745;
        color: #ffffff;
        font-size: 16px;
        width: 350px;
    }
</style>