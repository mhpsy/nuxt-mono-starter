<script setup lang="ts">
import {useCounterStore} from "~/stores/useCounter";

const counterStore = useCounterStore();
</script>

<template>
    <div>
        <h1>use-pinia</h1>

        <pre>
            {{ counterStore.counter }}
        </pre>
        <div v-if="counterStore.pending">
            loading...
        </div>
        <template v-else>
            <div v-for="item in counterStore.counter.count" :key="item">
                {{ item }}
            </div>
        </template>
    </div>
</template>

<style scoped>

</style>