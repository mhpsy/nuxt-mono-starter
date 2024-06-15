<script setup lang="ts">
</script>

<template>
    <div>
        <div class="grid grid-cols-4 gap-4 px-3">
            <NuxtLink
                v-for="item in $router.options.routes"
                :to="item.path"
                class="px-2 py-4 bg-blue-500 text-white text-center rounded-lg"
            >
                {{ item.name }}
            </NuxtLink>
        </div>

    </div>
</template>

<style scoped>

</style>