
<template>
    <footer class="footer-wrap">
        <section class="container footer">
            <div class="footer-part">
                <h4 class="footer-title">About the blog</h4>
                <p class="footer-text">{{ lorem }}</p>
            </div>
            <div class="footer-part">
                <h4 class="footer-title">Popular posts</h4>
                <ul class="footer-list">
                    <li class="footer-list-item" v-for="(post, index) in popularList(posts)" @click="goToPost(post.id)" :key="index">
                        <preview size="small" :post="post" />
                    </li>
                </ul>
            </div>
            <!--
            <div class="footer-part">
                <h4 class="footer-title">Subscribe to our news letter</h4>
                <form class="footer-newsletter">
                    <input placeholder="Enter your email here" />
                </form>
                <h4 class="footer-title">Fallow us on</h4>
                <ul class="footer-social">
                    <li class="footer-social-item" v-for="(social, index) in socials" :key="index">
                        <a :href="social.link" target="_blank">{{ social.title }}</a>
                    </li>
                </ul>
            </div>
            -->
        </section>
        <section class="footer-final">
            <p class="container">Copyright @IaraNascimentoSztybe - 2021 - All Rights Reserved</p>
        </section>
    </footer>
</template>

<script>

import { LoremIpsum } from 'lorem-ipsum';
import PreviewPost from './../preview-post/PreviewPost.vue';

export default {

    name: 'Footer',

    components: {
        'preview': PreviewPost
    },

    data() {
        return {
            socials: [
                {  title:'face', icon: '', link:'' },
                {  title:'twit', icon: '', link:'' },
                {  title:'inst', icon: '', link:'' },
                {  title:'phot', icon: '', link:'' },
                {  title:'link', icon: '', link:'' },
                {  title:'yout', icon: '', link:'' }
            ]
        }
    },

    computed: {
        lorem() {
            return new LoremIpsum().generateSentences(3);
        },
        posts() {
            return this.$store.state.posts;
        }
    },

    methods: {

        popularList(list) {
            let newList = JSON.parse(JSON.stringify(list)).sort((a,b) => b.popular - a.popular);
            return newList.slice(0, 2);
        },

        goToPost(id) {
            this.$router.push( '/post/' + id );
        }

    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';

$footer-background: #263843;
$footer-background-secondary: #283C48;
$footer-color: rgba(255, 255, 255, .8);
$footer-color-secondary: rgba(255, 255, 255, .5);
$newsletter-back: #3A4A54;

.footer {
    &-wrap {
        position: relative;
        background-color: $footer-background;
        padding-top: 48px;
        padding-bottom: 96px;
    }
    &-part {
        color: $footer-color-secondary;
        margin-bottom: 32px;
    }
    &-title {
        display: inline-block;
        text-transform: uppercase;
        font-size: 14px;
        padding: 8px 0;
        border-bottom: 1px solid $footer-color;
        color: $footer-color;
        margin-bottom: 12px;
    }
    &-text {
        font-size: 12px;
        line-height: 18px;
    }
    &-list {
        &-item {
            margin: 8px 0;
        }
    }
    &-newsletter {
        position: relative;
        margin-bottom: 24px;
        input {
            background-color: $newsletter-back;
            color: $footer-color-secondary;
            padding: 12px;
            border: none;
            width: 100%;
            box-sizing: border-box;
        }
    }
    &-social {
        &-item {
            display: inline-block;
        }
    }
    &-final {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: $footer-color-secondary;
        font-size: 12px;
        line-height: 20px;
        padding: 24px 0;
        background-color: $footer-background-secondary;
    }
}

@media (min-width: 960px) {

    .footer {
        display: flex;
        justify-content: space-between;
        &-wrap {
            padding-bottom: 140px;
        }
        &-part {
            min-width: calc(33% - 40px);
            margin: 0 20px;
            max-width: 200px;
        }
    }

}

</style>
