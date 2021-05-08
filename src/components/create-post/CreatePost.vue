
<template>
    <div class="container create-post">
        <button class="create-post-btn blog-button" @click="goBack()">back</button>
        <form class="blog-form" @submit.prevent="createPost(post)">
            <label>Title</label>
            <input type="text" placeholder="title..." v-model.lazy="post.title" />
            <label>Image Url</label>
            <input type="text" placeholder="image..." v-model.lazy="post.image" />
            <label>Post Body</label>
            <textarea placeholder="text..." v-model.lazy="post.text" />
            <label>Author</label>
            <input placeholder="author..." v-model.lazy="post.author" />
            <div class="btn-wrap">
                <button class="blog-button blog-button-sm" type="submit">create</button>
            </div>
        </form>
    </div>
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

@import './../../assets/styles/geral.css';
@import './../../assets/styles/form.css';
@import './../../assets/styles/button.css';

.create-post {
    padding: 16px 16px 40px 16px;
    
    &-btn {
        margin-bottom: 24px;
    }
}

.btn-wrap {
    display: inline-block;
    width: 100%;
    text-align: right;
}

</style>
