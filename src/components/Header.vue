<script setup>
import Menu from './Menu.vue'
</script>
<template>

    <header>
        <div class="header_container">
            <div>
                <img class="logo" src="../assets/contra_logo.svg">
            </div>

            <div class="black center"> 
            <Menu />
            </div>
        </div>

    </header>

</template>

<style scoped>
.black {
    color: black;
}

.center {
    place-content: center;
    /* text-align: center;
    justify-self: center;; */
}

header {
    background-color: #00ffc8;
    max-height: 75px;
}

.logo {
    max-height: 75px;
    height: 100%;
    border: none;
    outline: none;
}

.header_container {
    display: grid;
    grid-template-columns: 300px 1fr;
    max-height: 75px;
    height: 100%;
}

</style>