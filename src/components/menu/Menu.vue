
<template>
    <nav>
        <ul>
            <li v-for="route in routes" :key="route.title" v-show="route.menu">
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
</style>
