<template>
<v-app>
    <v-main>
        <router-view></router-view>
    </v-main>
    <Toolbar />
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

<style>
.v-application--wrap{
  min-height: 0vh;
}
</style>
