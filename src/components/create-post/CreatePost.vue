
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

    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },

    methods: {
        
        createPost(post) {
            let newPost = { ...JSON.parse(JSON.stringify(post)), id: ( this.getBiggerId(this.posts) + 1 )}
            const posts = [ ...this.$store.state.posts, newPost ];
            const newState = { ...this.$store.state, posts };
            this.$store.replaceState(newState);
        },

        getBiggerId(list) {
            let highest;
            list.forEach(item => {
                if (!highest || ( item.id > highest )) {
                    highest = item.id;
                }
            })
            return highest;
        }
    }

}

</script>

<style scoped lang="scss">
</style>
