
<template>
    <div>
        <img :src="post.image" />
        <h1>{{ post.title }}</h1>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>

export default {

    name: 'PreviewPost',

    props: {
        post: {
            required: true,
            type: Object
        }
    }

}

</script>

<style scoped lang="scss">
</style>
