
<template>
    <div class="container view-post">
        <button type="button" class="view-post-btn blog-button" @click="goBack()">back</button>
        <div class="view-post-img">
            <img :src="post.image" />
        </div>
        <h1 class="view-post-title">{{ post.title }} </h1>
        <p class="view-post-author">{{ post.author }} - {{ post.date }}</p>
        <p>{{ post.text }}</p>
        <form class="blog-form view-post-addcomment" @submit.prevent="createComment(comment)">
            <label>Comment</label>
            <textarea placeholder="write your comment here..." v-model.lazy="comment" />
            <div class="view-post-addcomment-btnwrap">
                <button type="submit" class="blog-button blog-button-sm" @click="createComment(comment)">add comment</button>
            </div>
        </form>
        <ul class="view-post-comments">
            <li v-for="(comment, index) in post.comments" :key="index">
                <p class="view-post-comments-comment">{{ comment }}</p>
            </li>
        </ul>
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

    data() {
        return {
            comment: ''
        }
    },

    created() {
        this.post.addPopular();
    },

    methods: {
        
        goBack() {
            this.$router.push('/');
        },

        createComment(comment) {
            if(comment.trim().length) {
                this.post.addComment(comment);
            }
            this.comment = '';
        }
    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';
@import './../../assets/styles/form.css';
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
    &-addcomment {
        margin: 24px 0;
        &-btnwrap {
            text-align: right;
        }
    }
    &-comments {
        margin: 24px 0;
        &-comment {
            &:before, &:after {
                content: ' " ';
            }
        }
    }
}

</style>
