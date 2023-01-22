<script setup></script>
<template>

    <div class="flex flex-col text-base">
        <ul class="horizontal-list">
            <li>
                <a href="http://contra.com"> Missions </a>
            </li>
            <li>
                <a href="http://contra.com"> Columns </a>
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

</style>