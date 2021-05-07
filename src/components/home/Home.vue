
<template>
    <div>
        <form-create-post></form-create-post>
        <post-list></post-list>
    </div>
</template>

<script>

import CreatePost from './../create-post/CreatePost.vue';
import PostList from './../post-list/PostList.vue';

export default {

    name: 'Home',

    components: {
        'form-create-post': CreatePost,
        'post-list': PostList
    }

}

</script>

<style scoped lang="scss">
</style>
