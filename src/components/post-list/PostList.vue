
<template>
    <ul>
        <li v-for="(post, index) in randomizeList(posts)" :key="index" @click="goToPost(post)">
            <preview :post="post" />
        </li>
    </ul>
</template>

<script>

import PreviewPost from './../preview-post/PreviewPost.vue';

export default {

    name: 'PostList',

    components: {
        'preview': PreviewPost
    },

    computed: {
        posts() {
            return this.$store.state.posts;
        }
    },

    methods: {

        randomizeList(list) {
            let shuffleArray = [];
            let listCopy = JSON.parse(JSON.stringify(list));
            list.forEach(() => {
                const randomItem = listCopy[Math.floor(Math.random() * listCopy.length)];
                shuffleArray.push(randomItem);
                listCopy.splice(listCopy.indexOf(randomItem), 1);
            });
            return shuffleArray;
        },

        goToPost(post) {
            this.$router.push( '/post/' + post.id );
        }

    }


}

</script>

<style scoped lang="scss">
</style>
