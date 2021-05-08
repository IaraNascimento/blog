
<template>
    <section class="home-wrap">
        <post-list class="home-left"></post-list>
        <aside-list class="home-right"></aside-list>
    </section>
</template>

<script>

import PostList from './../post-list/PostList.vue';
import HomeAside from './../home-aside/HomeAside.vue';

export default {

    name: 'Home',

    components: {
        'post-list': PostList,
        'aside-list': HomeAside
    }

}

</script>

<style scoped lang="scss">

@media (min-width: 960px) {
    .home {
        &-wrap {
            display: flex;
            justify-items: center;
            align-items: top;
        }
        &-left {
            width: 72%;
        }
        &-right {
            width: 28%;
        }
    }
}

</style>
