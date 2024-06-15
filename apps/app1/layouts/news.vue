<script setup lang="ts">

</script>

<template>
    <div class="pt-5 container mx-auto">
        <NuxtLink to="/" class="text-2xl hover:red p-3 bg-blue-400 rounded-2xl block">
            Home
        </NuxtLink>
        <slot/>
    </div>
</template>

<style scoped>

</style>