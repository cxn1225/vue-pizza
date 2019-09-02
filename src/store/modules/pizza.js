const state = {
    pizza: {}
}
const getters = {
    pizza: state => state.pizza
}
const mutations = {
    setPizza: (state, pizza) => state.pizza = pizza
}
const actions = {
    setPizzaAsync: ({ commit }, pizza) => commit("setPizza", pizza)
}

export default {
    state, getters, mutations, actions
}