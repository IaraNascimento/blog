
<template>
    <div class="preview"  :class="(size == 'small')? 'preview-s':'preview-m'">
        <h2 :class="(size == 'small')? 'preview-title-s':'preview-title-m'">{{ post.title }}</h2>
        <img :class="(size == 'small')? 'preview-image-s':'preview-image-m'" :src="post.image" />
        <p v-show="(size == 'medium')" class="preview-text">{{ limitChars( post.text ) }}</p>
    </div>
</template>

<script>

export default {

    name: 'PreviewPost',

    props: {
        post: {
            required: true,
            type: Object
        },
        size: {
            required: true,
            type: String
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
$title-m-padding: 48px;

.preview {
    position: relative;
    overflow: hidden;
    &-s {
        min-height: 40px;
        display: flex;
        align-items: center;
    }
    &-m {
        max-width: 480px;
    }
    &-title {
        &-s {
            width: calc(100% - #{$title-m-padding});
            padding-left: calc(#{$title-m-padding} + 8px);
        }
        &-m {
            text-transform: uppercase;
            font-size: 24px;
            font-weight: bold;
            width: 100%;
            text-align: center;
            margin-bottom: 24px;
        }
    }
    &-image {
        &-s {
            position: absolute;
            top: 0;
            left: 4px;
            object-fit: cover;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
        &-m {
            display: block;
            max-width: 100%;
            max-height: 320px;
            margin: 0 auto 16px auto;
        }
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
