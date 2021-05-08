
<template>
    <div>
        <preview-post size="big" label="Latest Post" :post="post" class="home-top"></preview-post>
        <section class="container home-content">
            <post-list class="home-left"></post-list>
            <aside-list class="home-right"></aside-list>
        </section>
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

    computed: {
        post() {
            return JSON.parse(JSON.stringify(this.$store.state.posts)).sort((a,b) => new Date(b.date) - new Date(a.date))[0];
        }
    }

}

</script>

<style scoped lang="scss">

@import './../../assets/styles/geral.css';

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
        }
        &-right {
            margin-top: 24px;
            margin-bottom: 24px;
            width: 28%;
        }
    }
}

</style>
