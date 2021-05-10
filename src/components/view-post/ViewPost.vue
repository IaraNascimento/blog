
<template>
    <div class="view-post">
        <div class="view-post-btn">
            <div class="container">
                <button type="button" class="blog-button" @click="goBack()">back</button>
           </div>
        </div>
        <div class="view-post-img" :style="{'background-image': 'url('+post.image+')'}"></div>
        <div class="container">
            <h1 class="view-post-title">{{ post.title }} </h1>
            <p class="view-post-info">
                <span class="view-post-info-author">{{ post.author }}</span> | {{ countDays(post.date) }} | {{ formatDate(post.date) }}</p>
            <popularity class="view-post-popularity" :post="post" ></popularity>
            <p class="view-post-content">{{ post.text }}</p>
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
    </div>
</template>

<script>

import dateFormater from './../../services/DateFormater';
import Popularity from './../popularity/Popularity.vue';

export default {

    name: 'ViewPost',

    components: {
        'popularity': Popularity
    },

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

    mixins: [
        dateFormater
    ],

    created() {
        this.post.addPopular();
    },

    methods: {
        
        goBack() {
            this.$router.push('/');
        },

        formatDate(date) {
            return this.s_formatDate(date);
        },

        countDays(date) {
            return this.s_contDaysByDate(date);
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
    position: relative;
    margin-bottom: 48px;
    
    &-btn {
        position: absolute;
        top: 24px;
        left: 0;
    }
    
    &-img {
        margin-bottom: 24px;
        text-align: center;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
        min-height: 320px;
        height: 80vh;
        max-height: 560px;
        img {
            max-width: 100%;

        }
    }
    
    &-title {
        font-size: 24px;
        text-align: center;
        margin-bottom: 8px;
    }
    
    &-info {
        font-size: 12px;
        text-align: center;
        margin-bottom: 24px;
        &-author {
            text-transform: capitalize;
        }
    }

    &-popularity {
        margin: 24px 0;
    }

    &-content {
        text-align: justify;
        line-height: 24px;
        &:first-letter {
            margin-left: 32px;
        }
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
