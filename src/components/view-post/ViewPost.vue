
<template>
    <div>
        <button @click="goBack()">voltar</button>
        <p>{{ post.id }}</p>
        <img :src="post.image" />
        <p>{{ post.id }} {{ post.title }} - {{ post.text }} - {{ post.author }} - {{ post.date }}</p>
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

    methods: {
        goBack() {
            this.$router.push('/');
        }
    }

}

</script>

<style scoped lang="scss">
</style>
