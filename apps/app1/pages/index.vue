<script setup lang="ts">
import {getRandom} from "~/utils";

const show_r = ref(false)

const random_number_r = ref(getRandom(1, 20))

const toggle = () => {
    show_r.value = !show_r.value
    random_number_r.value = getRandom(1, 20)
}

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

        <button
            class="px-4 py-2 bg-blue-400 text-white rounded-xl m-4"
            @click="toggle"
        >
            {{ show_r ? 'hide' : 'show' }}
        </button>

        <MhHTransition>
            <div v-if="show_r"
                 class="m-3 bg-blue-400 rounded-xl shadow-md"
            >
                <div v-for="i in random_number_r" :key="i" class="p-3 text-white">
                    {{ i }}
                </div>
            </div>
        </MhHTransition>

    </div>
</template>

<style scoped>

</style>