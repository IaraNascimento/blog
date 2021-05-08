
<template>
    <div class="container view-post">
        <button class="view-post-btn blog-button" @click="goBack()">voltar</button>
        <div class="view-post-img">
            <img :src="post.image" />
        </div>
        <h1 class="view-post-title">{{ post.title }} </h1>
        <p class="view-post-author">{{ post.author }} - {{ post.date }}</p>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>

export default {

    name: 'ViewPost',

    computed: {
        post() {
            return this.$store.state.posts.find(post => this.$route.params.id == post.id);
        }
    },

    created() {
        this.post.addPopular();
    },

    methods: {
        goBack() {
            this.$router.push('/');
        }
    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';
@import './../../assets/styles/button.css';

.view-post {
    margin-top: 32px;
    margin-bottom: 48px;
    &-btn {
        margin-bottom: 24px;
    }
    &-img {
        margin-bottom: 24px;
        text-align: center;
        img {
            max-width: 100%;

        }
    }
    &-title {
        font-size: 24px;
        text-align: center;
        margin-bottom: 8px;
    }
    &-author {
        font-size: 12px;
        text-align: center;
        margin-bottom: 24px;
    }
}

</style>
