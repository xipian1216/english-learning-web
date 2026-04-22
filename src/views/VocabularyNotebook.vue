<script setup lang="ts">

import { ref } from 'vue';

const wordsCount = ref(0);
const lastWord = ref('');
const words = ref([
    "example",
    "sample",
    "test",
    "demo",
    "example2",
    "sample2",
    "test2",
    "demo2"
]);

</script>

<template>
    <div class="vocabulary-notebook">
        <div class="card">
            <h2>Total words: {{ wordsCount }}</h2>
        </div>
        <div class="card">
            <h2>The last word added: {{ lastWord }}</h2>
        </div>
        <div class="words-grid">
            <div class="card" v-for="(word, index) in words" :key="index">
                <h3>{{ word }}</h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
.vocabulary-notebook {
    padding: 24px;
    margin: 24px;
    border-radius: 28px;
    background: linear-gradient(180deg, rgba(255, 248, 244, 0.95) 0%, rgba(255, 242, 235, 0.98) 100%);
    box-shadow: 0 18px 40px rgba(180, 100, 42, 0.12);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.card {
    margin: 0;
    padding: 20px;
    border: 1px solid rgba(219, 92, 52, 0.12);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 24px rgba(180, 100, 42, 0.08);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(180, 100, 42, 0.14);
}

.card h2,
.card h3 {
    margin: 0;
    color: #8f3f23;
}

.card h2 {
    font-size: 22px;
    line-height: 1.4;
}

.card h3 {
    font-size: 18px;
    font-weight: 600;
}

.words-grid {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
}

@media (max-width: 768px) {
    .vocabulary-notebook {
        margin: 16px;
        padding: 18px;
        grid-template-columns: 1fr;
    }

    .words-grid {
        grid-column: auto;
        grid-template-columns: 1fr;
    }
}

</style>
