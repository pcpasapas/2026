<script setup>
defineProps({
    // eslint-disable-next-line vue/require-default-prop
    message: String,
});
</script>

<template>
    <div v-show="message">
        <p class="text-sm text-red-600">
            {{ message }}
        </p>
    </div>
</template>
