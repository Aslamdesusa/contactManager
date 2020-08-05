<template>
<v-app>
    <v-main>
        <router-view></router-view>
    </v-main>
    <Toolbar />
    <notifications height="200" group="foo" position="top center"/>
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
    mounted(){
        const user_token = localStorage.getItem('user_token')
        console.log(user_token)
    }
};
</script>

<style>
.v-application--wrap {
    min-height: 0vh;
}
</style>
