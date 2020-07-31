<template>
<v-app>
    <Toolbar />
    <v-main>
        <router-view></router-view>
    </v-main>
</v-app>
</template>

<script>
import Toolbar from './components/__toolbar__items/toolbar'
export default {
    name: 'App',
    components: {
      Toolbar,
    },
    data: () => ({
        //
    }),
};
</script>
