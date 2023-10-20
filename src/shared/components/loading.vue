<template>
    <div v-if="showLoading" class="flex items-center w-full h-full">
        <Vue3Lottie :animation-data="animation" :loop="true" height="272px" />
    </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie';
import loading from '../../assets/imgs/loadingS.json'

const props = defineProps({
    animation: {
        type: Object,
        default: loading
    },
    showLoading: {
        type: Boolean,
        default: true
    }
})

</script>

<style lang="scss" scoped>

</style>