<script setup lang="ts">

</script>

<template>
    <header class="header">
        <div class="brand">
            <img src="/favicon.ico" alt="English Learning logo" class="brand-logo">
            <div class="brand-copy">
                <p class="eyebrow">English Learning</p>
                <h1>Vocabulary Notebook</h1>
            </div>
        </div>
        <div class="search-wrapper">
            <input type="text" placeholder="Search words, notes, tags..." class="search-input" />
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 18px 24px;
    border-radius: 0 0 28px 28px;
    background: linear-gradient(135deg, #ff8a3d 0%, #db5c34 100%);
    color: #fff;
    box-shadow: 0 18px 40px rgba(180, 100, 42, 0.22);
}

.brand {
    display: flex;
    align-items: center;
    gap: 14px;
    min-width: 0;
}

.brand-logo {
    width: 46px;
    height: 46px;
    border-radius: 14px;
    padding: 8px;
    background: rgba(255, 255, 255, 0.14);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.brand-copy {
    min-width: 0;
}

.eyebrow {
    margin: 0 0 4px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255, 244, 235, 0.78);
}

h1 {
    margin: 0;
    font-size: 24px;
    line-height: 1.2;
    font-weight: 700;
}

.search-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.search-input {
    width: min(100%, 360px);
    padding: 12px 16px;
    border: 1px solid rgba(255, 244, 235, 0.22);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.16);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    color: #fff;
    font-size: 14px;
    outline: none;
    backdrop-filter: blur(8px);
}

.search-input::placeholder {
    color: rgba(255, 244, 235, 0.76);
}

.search-input:focus {
    border-color: rgba(255, 244, 235, 0.42);
    box-shadow: 0 0 0 4px rgba(255, 244, 235, 0.14);
}

@media (max-width: 720px) {
    .header {
        flex-direction: column;
        align-items: stretch;
        padding: 18px;
        border-radius: 0 0 24px 24px;
    }

    .search-wrapper {
        justify-content: stretch;
    }

    .search-input {
        width: 100%;
    }
}
</style>
