
<template>
    <nav class="menu-wrap">
        <ul class="menu">
            <li  class="menu-item" v-for="route in routes" :key="route.title" v-show="route.menu">
                <router-link class="nav-list-link" :to="route.path">
                    {{ route.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

import { routes } from './../../routes';

export default {

    name: 'Menu',

    data() {
        return {
            routes
        }
    }

}

</script>

<style scoped lang="scss">

$border-color: #eaeaea;
$text-color: #3a3a3a;

.menu {
    display: inline-block;
    &-wrap {
        text-align: center;
        width: 100%;
        border-bottom: 1px solid $border-color;
        margin-bottom: 16px;
    }
    &-item {
        display: inline-block;
        padding: 8px 16px;
        line-height: 24px;
        a {
            text-decoration: none;
            color: $text-color;
        }
    }
}

@media (min-width: 960px) {

    .menu {
        &-wrap {
            margin-bottom: 48px;
        }
    }

}

</style>
