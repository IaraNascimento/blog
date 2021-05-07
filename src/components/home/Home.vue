
<template>
    <post-list></post-list>
</template>

<script>

import PostList from './../post-list/PostList.vue';

export default {

    name: 'Home',

    components: {
        'post-list': PostList
    }

}

</script>

<style scoped lang="scss">
</style>
