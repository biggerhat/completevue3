<template>
    <div class="cards">
        <card
              v-for="pokemon in pokemons"
              @click="click(pokemon)"
              :class="{ opace: selectedId && pokemon.id !== selectedId }"
              class="card"
        >
            <template v-slot:title>
                {{ pokemon.name }} #{{ pokemon.id }}
            </template>
            <template v-slot:content>
                <img :src="pokemon.sprite" :title="pokemon.name" />
            </template>
            <template v-slot:description>
                <div v-for="type in pokemon.types">
                    {{ type }}
                </div>
            </template>
        </card>
    </div>
</template>

<script>
    import Card from './Card.vue'
    export default {
        components: {
            Card
        },
        props: {
            selectedId: {
                type: Number
            },
            pokemons: {
                type: Array
            },
        },
        methods: {
            click(pokemon) {
                this.$emit('pokemonClicked', pokemon)
            }

        }

    }
</script>

<style scoped>
    .cards {
        display: flex;
    }

    img {
        width: 100%;
    }

    .opace {
        opacity: 0.5;
    }

    .card:hover {
        opacity: 1.0;
    }
</style>