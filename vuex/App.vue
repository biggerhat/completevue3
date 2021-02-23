<template>
    <button v-for="post in posts" @click="fetchPostData(post.id)">
        {{ post.title }}
    </button>
    <div v-if="currentPost">
        <h3>{{ currentPost.title }}</h3>
        <p>{{ currentPost.content }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    id: 1,
                    title: 'Post #1'
                },
                {
                    id: 2,
                    title: 'Post #2'
                },
            ]
        }
    },
    methods: {
        fetchPostData(id) {
            //mutation
            //this.$store.commit('setPostId', id)
            //action
            this.$store.dispatch('posts/fetchDataFromServer',id)
        },
    },
    computed: {
        currentPost() {

            return this.$store.state.posts.currentPost
        },
    },
}
</script>


<style>

</style>
