
<template>
    <form class="blog-form create-post" @submit.prevent="createPost(post)">
        <label>Títilo da postagem</label>
        <input placeholder="título..." v-model.lazy="post.title" />
        <label>Url da imagem</label>
        <input placeholder="imagem..." v-model.lazy="post.image" />
        <label>Corpo da postagem</label>
        <textarea placeholder="texto..." v-model.lazy="post.text" />
        <label>Autor</label>
        <input placeholder="autor..." v-model.lazy="post.author" />
        <div class="btn-wrap">
            <button class="blog-button blog-button-sm" type="submit">criar</button>
        </div>
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
            this.post = new Post();
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

@import './../../assets/styles/form.css';
@import './../../assets/styles/button.css';

.create-post {
    padding: 16px 16px 40px 16px;
}

.btn-wrap {
    display: inline-block;
    width: 100%;
    text-align: right;
}

</style>
