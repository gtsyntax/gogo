<script>
export default {
    data() {
        return {
            foodTypes: ["Hamburger", 
                        "Breakfast", 
                        "Dessert", 
                        "Chicken",
                        "Donuts",
                        "Salad",
                        "Fast food",
                        "Pizza",
                        "Ice cream"
                    ]
        }
    },
    methods: {
        logFood(food) {
            console.log(`Clicked food: ${food}`)
        }
    }
}
</script>

<template>
<ul>
    <li v-for="food in foodTypes" :key="food" @click="logFood(food)">{{food}}</li>
</ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  gap: .5rem;
}

li {
  padding: 1rem;
  cursor: pointer;
}

li:hover {
    border-bottom: 1px solid var(--bg-color-gray);
}
</style>