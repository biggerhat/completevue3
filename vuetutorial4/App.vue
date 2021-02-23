<template>
    <button @click="increment">{{ count }}</button>
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <div v-for="msg in history">
        {{ msg }}
    </div>
</template>

<script>
    import { useNumbers } from './numbers'
    export default {
        setup() {
            const {
                history,
                count,
                increment,
                a,
                b,
            } = useNumbers()
          return {
              history,
              count,
              increment,
              a,
              b,
          }
        },
    }
</script>

<style scoped>

</style>
