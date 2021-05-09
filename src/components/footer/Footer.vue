
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
            <div class="footer-part">
                <h4 class="footer-title">Subscribe to our news letter</h4>
                <form class="footer-newsletter" @submit.prevent="sendNewsLetter(email)">
                    <input type="email" placeholder="Enter your email here" v-model.lazy="email" />
                    <font-awesome-icon class="footer-newsletter-icon" icon="paper-plane" @click="sendNewsLetter(email)" />
                </form>
                <h4 class="footer-title">Fallow us on</h4>
                <ul class="footer-social">
                    <li class="footer-social-item" v-for="(social, index) in socials" :key="index">
                        <a :href="social.link" target="_blank" :alt="social.title">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: social.icon }" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="footer-final">
            <p class="container">Copyright @IaraNascimentoSztybe - 2021 - All Rights Reserved</p>
        </section>
    </footer>
</template>

<script>

import { LoremIpsum } from 'lorem-ipsum';
import PreviewPost from './../preview-post/PreviewPost.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

library.add(faPaperPlane, faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube);

export default {

    name: 'Footer',

    components: {
        'preview': PreviewPost
    },

    data() {
        return {
            socials: [
                {  title:'face', icon: 'facebook', link:'https://www.facebook.com/' },
                {  title:'twit', icon: 'twitter', link:'https://twitter.com/' },
                {  title:'inst', icon: 'instagram', link:'https://www.instagram.com/' },
                {  title:'phot', icon: 'linkedin', link:'https://www.linkedin.com/' },
                {  title:'yout', icon: 'youtube', link:'https://www.youtube.com/' }
            ],
            email: ''
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
        },

        sendNewsLetter(email) {
            console.log(email);
            this.email = '';
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
        &-icon {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            padding: 10px;
            opacity: .6;
            transition: all .4s ease;
            &:hover {
                opacity: 1;
            }
        }
    }
    &-social {
        &-item {
            display: inline-block;
            transition: all .4s ease;
            background-color: $newsletter-back;
            border-radius: 50%;
            margin: 0 6px 0 0;
            cursor: pointer;
            a {
                display: inline-block;
                padding: 12px;
                width: 40px;
                height: 40px;
                color: $footer-color;
                box-sizing: border-box;
                &:hover {
                    color: $footer-color;
                } 
            }
            &:hover {
                transform: rotate3d(0, 1, 0, 360deg);
            }
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
            padding-bottom: 96px;
        }
        &-part {
            width: calc(30% - 40px);
            &:first-child {
                width: 25%;
            }
            &:nth-child(2) {
                width: 20%;
            }
            &:last-child {
                width: 30%;
            }
        }
    }

}

</style>
