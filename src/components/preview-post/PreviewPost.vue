
<template>
    <div class="preview">
        <h2 class="preview-title">{{ post.title }}</h2>
        <img class="preview-image" :src="post.image" />
        <p class="preview-text">{{ limitChars( post.text ) }}</p>
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
    },

    methods: {
        limitChars(text) {
            if(text.length > 320) {
                return text.substring(0, 319) + '...';
            }
            return text;
        }
    }

}

</script>

<style scoped lang="scss">

$preview-text-color: #999;

.preview {
    position: relative;
    max-width: 400px;
    overflow: hidden;
    &-title {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-bottom: 24px;
    }
    &-image {
        display: block;
        max-width: 100%;
        max-height: 320px;
        margin: 0 auto 16px auto;
    }
    &-text {
        font-size: 12px;
        line-height: 20px;
        color: $preview-text-color;
    }
}

@media (min-width: 960px) {

    .preview {
        &-image {
            max-height: 240px;
        }
    }

}

</style>
