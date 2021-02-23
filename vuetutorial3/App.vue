<template>
    <pokemon-cards
            :pokemons="starters"
            :selectedId="selectedId"
            @pokemonClicked="fetchEvolutions"
    />
    <pokemon-cards :pokemons="evolutions" />
</template>

<script>
    import Card from './Card.vue'
    import PokemonCards from './PokemonCards.vue'
    const api='https://pokeapi.co/api/v2/pokemon'
    const STARTER_IDS = [1, 4, 7]
    export default {
        data() {
            return {
                starters: [],
                evolutions: [],
                selectedId: null,
            }
        },
        components: {
            Card,
            PokemonCards,
        },
        async created() {
            const starters = await this.fetchData(STARTER_IDS)
            this.starters = starters
        },
        methods: {
            async fetchData(ids) {
                const responses = await Promise.all(ids.map(id => window.fetch(`${api}/${id}`)))
                const data = await Promise.all(responses.map(res => res.json()))
                return data.map(datum => ({
                    id: datum.id,
                    name: datum.name,
                    sprite: datum.sprites.other['official-artwork'].front_default,
                    types: datum.types.map(type => type.type.name)
                }))
            },
            async fetchEvolutions(pokemon) {
                this.selectedId = pokemon.id
                this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id +2])

            }
        }
    }
</script>

<style scoped>

</style>