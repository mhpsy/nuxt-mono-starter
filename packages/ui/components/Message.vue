<script setup lang="ts">
import {message} from '~ui/constants/message'

const props = defineProps<{
    msg: string
}>()
</script>

<template>
    <div>
       {{ message }} {{ msg }}
    </div>
</template>
