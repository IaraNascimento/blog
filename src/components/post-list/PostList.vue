
<template>
    <ul>
        <li v-for="(post, index) in randomizeList(posts)" :key="index" @click="goToPost(post)">
            <p>{{ post.title }}</p>
            <img :src="post.image" />
        </li>
    </ul>
</template>

<script>

export default {

    name: 'PostList',

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
