<template>
    <div>
        <header>
            <div class="navbar navbar-default">
                <div class="navbar-header">
                    <h1></h1>
                </div>
                <div class="nav navbar-nav navbar-right cart">
                        <router-link active-class="active" tag="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
                        <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span> 체크아웃 
                        </router-link>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name : 'my-header',
    data (){
        return {
            sitename : 'Vue.js애완용품샵',
        }
    },
    props : ['cartItemCount'],
    methods : {
        showCheckOut() {
            this.$router.push({name: 'From'});
        }
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
        color: black;
    }

    .router-link-exact-active {
        color: blue;
    }
</style>