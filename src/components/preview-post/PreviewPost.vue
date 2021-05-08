
<template>
    <div class="preview"  :class="(size == 'small')? 'preview-s':'preview-m'">
        <h2 :class="(size == 'small')? 'preview-title-s':'preview-title-m'">{{ post.title }}</h2>
        <img :class="(size == 'small')? 'preview-image-s':'preview-image-m'" :src="post.image" />
        <p v-show="(size == 'medium')" class="preview-text">{{ limitChars( post.text ) }}</p>
        <p v-show="(size == 'small')" class="preview-date">{{ countDays( post.date ) }}</p>
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
        },

        countDays(date) {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((new Date(date) - new Date()) / oneDay));
            if ( diffDays <= 0 ) {
                return 'today';
            } else if ( diffDays === 1 ) {
                return '1 day ago';
            } else {
                return JSON.stringify(diffDays) + ' days ago';
            }
        }
    }

}

</script>

<style scoped lang="scss">

$preview-text-color: #999;
$title-m-padding: 48px;
$date-color: #999;

@mixin position() {
    width: calc(100% - #{$title-m-padding});
    padding-left: calc(#{$title-m-padding} + 8px);
}

.preview {
    position: relative;
    overflow: hidden;
    &-s {
        min-height: 40px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    &-m {
        max-width: 480px;
    }
    &-title {
        &-s {
            @include position();
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
    &-date {
        @include position();
        font-size: 12px;
        color: $date-color;
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
