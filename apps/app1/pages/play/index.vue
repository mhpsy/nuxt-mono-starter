<script setup lang="ts">
import {useCounter} from "@vueuse/core";

definePageMeta({
    layout: 'news'
})

const {
    count,
    dec,
    inc
} = useCounter(1);

const {data, refresh, pending, error, clear, execute, status,} = await useFetch('/api/play/list', {
    query: {
        id: count
    },
})
</script>

<template>
    <div>
        <div>
            <h1 class="text-xl">play</h1>
            <button class="btn" @click="dec()">dec</button>
            <p>{{ count }}</p>
            <button class="btn" @click="inc()">inc</button>
        </div>
        <div>
            <button class="btn" @click="refresh">refresh</button>
            <button class="btn" @click="clear">clear</button>
            <button class="btn" @click="execute">execute</button>
        </div>
        <div>status: {{ status }}</div>
        <div>pending: {{ pending }}</div>
        <div>error: {{ error }}</div>
        <pre>
            {{ data }}
        </pre>
    </div>
</template>

<style scoped>
.btn {
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: blue;
    }
}
</style>