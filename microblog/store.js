import { reactive, computed } from 'vue'
import { testPosts } from "./testPosts.js";

class Store {
    constructor() {
        this.state = reactive({
            posts: testPosts,
            currentHashtag: null
        })
    }

    get filteredPosts() {
        return computed(() => {
            if(!this.state.currentHashtag) {
                return this.state.posts
            }
            const regexp = new RegExp(this.state.currentHashtag,`i`)

            return this.state.posts.filter(
                //post => post.hashtags.includes(this.state.currentHashtag)
                post => regexp.test(post.hashtags)
            )
        })
    }

    setHashtag(tag) {
        this.state.currentHashtag = tag
    }

    incrementLike(post) {
        const thePost = this.state.posts.find(x =>
            x.id === post.id
        )

        if(!thePost) {
            return
        }

        thePost.likes += 1
    }
}

export const store = new Store()