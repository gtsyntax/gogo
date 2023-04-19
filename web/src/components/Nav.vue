<script>
import { RouterLink } from "vue-router"

export default {
    data() {
        return {
            searchQuery: ""
        }
    },
    methods: {
        search(query) {
            console.log(query)
        }
    }
}
</script>

<template>
    <nav>
        <div>
            <h1>GOGO</h1>
        </div>

        <div class="platform">
            <button class="active">Restaurant</button>
            <button>Marketplace</button>
        </div>

        <div class="search-bar">
            <input type="search" v-model="searchQuery" @keydown.enter="search(searchQuery)"
                placeholder="Search..." />
        </div>

        <div class="auth-btns">
            <RouterLink to="/login" class="authLink">
                <button>Login</button>
            </RouterLink>
            <RouterLink to="/register" class="authLink">
                <button>Register</button>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped>
nav {
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 2fr;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid var(--bg-color-gray);
    padding-left: 2rem;
    padding-right: 2rem;
}

input {
    padding: .7rem 1rem;
    border: none;
    background-color: var(--bg-color-gray);
    width: 100%;
    font-family: inherit;
}

.authLink {
    text-decoration: none;
    color: var(--color-black);
}

.platform {
    display: flex;
    justify-content: center;
}

.auth-btns {
    display: flex;
    justify-content: flex-end;
    gap: .5rem;
}

.active {
    background-color: var(--color-yellow);
}
</style>