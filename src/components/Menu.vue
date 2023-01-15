<script setup></script>
<template>
    <div class="container">
        <ul class="black center horizontal-list">
            <li>
                <a href="http://contra.com"> Home </a>
            </li>
            <li>
                <a href="http://contra.com"> Projects </a>
            </li>
            <li>
                <a href="http://contra.com"> About Us </a>
            </li>
            <li>
                <a href="http://contra.com"> Contact </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul.horizontal-list li {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
}

ul.horizontal-list li:not(:last-child) {
    border-right: 1px solid black;
}

.black {
    display: inline-block;
    color: black;
}

s .center {
    place-content: center;
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

.container {
    border: 1px solid black;
    display: flex;
    justify-content: start;
    align-items: flex-end;
    height: 75px;
}
</style>