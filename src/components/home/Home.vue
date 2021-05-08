
<template>
    <div>
        <preview-post size="big" label="Latest Post" :post="post" class="home-top"></preview-post>
        <section class="container home-content">
            <post-list :limitItens="quantityToShow" class="home-left" @hideShowMoreBtn="hideShowMoreBtn()"></post-list>
            <div class="home-btn-wrap home-btn-mobile">
                <button v-show="!hideBtn" type="button" class="blog-button-secondary" @click="showMore6()">Load More</button>
            </div>
            <aside-list class="home-right"></aside-list>
        </section>
        <div class="container home-btn-wrap home-btn-desktop">
            <button v-show="!hideBtn" type="button" class="blog-button-secondary" @click="showMore6()">Load More</button>
        </div>
    </div>
</template>

<script>

import PreviewPost from './../preview-post/PreviewPost.vue';
import PostList from './../post-list/PostList.vue';
import HomeAside from './../home-aside/HomeAside.vue';

export default {

    name: 'Home',

    components: {
        'preview-post': PreviewPost,
        'post-list': PostList,
        'aside-list': HomeAside
    },

    data() {
        return {
            quantityToShow: 6,
            hideBtn: false
        }
    },

    computed: {
        post() {
            return JSON.parse(JSON.stringify(this.$store.state.posts)).sort((a,b) => new Date(b.date) - new Date(a.date))[0];
        }
    },

    methods: {

        showMore6() {
            this.quantityToShow = this.quantityToShow + 6;
        },

        hideShowMoreBtn() {
            this.hideBtn = true;
        }

    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';
@import './../../assets/styles/button.css';

.home-btn {
    &-wrap {
        text-align: center;
        margin: 24px auto;
    }
    &-desktop {
        display: none;
    }
}

@media (min-width: 960px) {
    .home {
        &-top {
            width: 100%;
        }
        &-content {
            display: flex;
            justify-items: center;
            align-items: top;
            flex-wrap: nowrap;
        }
        &-left {
            width: 72%;
            margin-right: 32px;
        }
        &-right {
            margin-top: 24px;
            margin-bottom: 24px;
            width: 28%;
        }
        &-btn {
            &-mobile {
                display: none;
            }
            &-desktop {
                display: block;
            }
        }
    }
}

</style>
