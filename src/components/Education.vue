<script setup>
import data from '../content/data';
import Headline from './Headline.vue';
</script>

<template>
    <section class="education" id="Education">
        <Headline headline="Education" />
        <div class="education-content">
            <div class="education-details" v-for="edu in education">
                <div style="display: flex; align-items: center;">
                    <img :src="edu.logo" alt="Logo">
                    <div>
                        <h3>{{ edu.institute }}</h3>
                        <p>{{ edu.degree }}</p>
                    </div>
                </div>
                <div>
                    <p>{{ edu.duration }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    components: {
        Headline,
    },
    data() {
        return {
            education: data.education,
        };
    },
};

</script>

<style scoped>
.education-content {
    display: flex;
    gap: 2em;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.education-details {
    display: flex;
    gap: 1em;
    width: -webkit-fill-available;
    justify-content: space-between;
    align-items: center;
}

.education-details img {
    width: 100px;
    height: 100px;
    object-fit: contain;
}

.education-details h3 {
    font-size: 1.5em;
    margin-block: 0.5em;
}

.education-details p {
    font-size: 1em;
    color: #aeb2ba;
}
</style>
