
<template>
    <ul>
        <li v-for="(post, index) in posts" :key="index">
            <img :src="post.image" />
            <p>{{ post.title }} - {{ post.text }} - {{ post.author }} - {{ post.date }}</p>
        </li>
    </ul>
</template>

<script>

export default {

    name: 'PostList',

    props: {
        posts: {
            required: true,
            type: Array
        }
    }

}

</script>

<style scoped lang="scss">
</style>
