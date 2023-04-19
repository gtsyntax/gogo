<template>
    <main>
        <div class="leftPanel"></div>
        <form>
            <h2>Sign up to GOGO</h2>

                <label for="firstName">Name</label>
                <input type="text" name="firstName" placeholder="Name"/>

                <label for="lastName">Surname</label>
                <input type="text" name="lastName" placeholder="Surname"/>

                <label for="email">Email</label>
                <input type="email" name="email" placeholder="email"/>

                <label for="password">Password</label>
                <input type="password" name="password" placeholder="Password"/>

            <button>Create Account</button>
        </form>
    </main>
</template>

<style scoped>
main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    height: 100vh;
}

form {
    display: flex;
    padding-left: 20rem;
    padding-right: 20rem;
    gap: .5rem;
    flex-direction: column;
    justify-content: center;
}

input {
    font-family: inherit;
    padding: .7rem;
    border: none;
    background-color: var(--bg-color-gray);
}

button {
    background-color: var(--color-yellow);
    align-self: flex-start;
}

.leftPanel {
    background-color: var(--color-yellow);
}
</style>