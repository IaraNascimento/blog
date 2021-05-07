
<template>
    <form @submit.prevent="createPost(post)">
        <input placeholder="título..." v-model.lazy="post.title" />
        <input placeholder="imagem..." v-model.lazy="post.image" />
        <input placeholder="texto..." v-model.lazy="post.text" />
        <input placeholder="autor..." v-model.lazy="post.author" />
        <button type="submit">criar</button>
    </form>
</template>

<script>

import Post from './../../domain/Post';

export default {

    name: 'CreatePost',

    data() {
        return {
            post: new Post()
        }
    },

    methods: {
        createPost(post) {
            console.log(post);
            this.$emit('createPost', post);
        }
    }

}

</script>

<style scoped lang="scss">
</style>
