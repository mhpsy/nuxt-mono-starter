<template>
    <transition
        @before-enter="hooks.onBeforeEnter"
        @enter="hooks.onEnter"
        @after-enter="hooks.onAfterEnter"
        @before-leave="hooks.onBeforeLeave"
        @leave="hooks.onLeave"
        @after-leave="hooks.onAfterLeave"
    >
        <slot></slot>
    </transition>
</template>

<script setup lang="ts">
interface IProps {
    time?: string
    moveFn?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
}
const Props = withDefaults(defineProps<IProps>(), {
    time: '.3',
    moveFn: 'ease'
})

const hooks = {
    css: false,
    onBeforeEnter(el: HTMLElement) {
        el.style.transition =`max-height ${Props.time}s ${Props.moveFn}`
        el.style.maxHeight = '0'
    },

    onEnter(el: HTMLElement) {
        el.style.maxHeight = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
    },

    onAfterEnter(el: HTMLElement) {
        el.style.maxHeight = ''
        el.style.overflow = ''
    },

    onBeforeLeave(el: HTMLElement) {
        el.style.maxHeight = el.scrollHeight + 'px'
        el.style.overflow = 'hidden'
    },

   onLeave(el: HTMLElement) {
       if (el.scrollHeight !== 0) {
            el.style.maxHeight = '0'
        }
    },

   onAfterLeave(el: HTMLElement) {
        el.style.maxHeight = ''
        el.style.transition = ''
    }
}
</script>
