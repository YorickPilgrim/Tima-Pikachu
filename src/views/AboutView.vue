<template>
  <div class="wrapper">
    <div class="wrap">
      <div class="posts">
        <button @click="getAllPokemon">Получить всех пакичуков</button>
        <div class="poliList" v-for="pokemon in allPokemon" :key="pokemon.name">
          <div @click="showPokemonDetails(pokemon)">
            <!-- <h2>{{ pokemon.name }}</h2> -->
            <img :src="pokemon.image" :alt="pokemon.name" />
            <!-- Дополнительные поля с информацией о покемоне могут быть добавлены здесь -->
          </div>
        </div>
      </div>
      <div class="post">
        <div>
          <h3>Имя выбранной чушки</h3>
          <ul>
            <li
              style="padding: 10px; background: rgb(231 195 124)"
              v-for="pokemon in selectedPokemonList"
              :key="pokemon.name"
            >
              <h2>{{ pokemon.name }}</h2>
              <img :src="pokemon.image" :alt="pokemon.name" />
            </li>
          </ul>
        </div>
        <div style="padding: 10px; background: wheat" v-if="selectedPokemon">
          <h2>
            {{ selectedPokemon.name }}
          </h2>
          <img :src="selectedPokemon.image" :alt="selectedPokemon.name" />
          <button @click="addSelectedPokemon">
            Добавить в список выбранных
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: bold;
  text-transform: capitalize;
}
.wrapper {
  display: flex;
  justify-content: space-evenly;
}
.wrap {
  display: flex;
  justify-content: space-evenly;
  max-height: 465px;
}
.wrapper div {
  width: 100%;
}
.posts {
  overflow-y: scroll;
  height: 100%;
  background-color: aquamarine;
  padding: 100px;
}
.posts button {
  margin: 0 auto;
  display: block;
  background-color: greenyellow;
  padding: 10px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  text-align: center;
}
.post ul {
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  height: 150px;
}
.poliList {
  margin: 0 auto;
}
.poliList div {
  margin: 0 auto;
}
.poliList img {
  width: 400px;
}
.post {
  overflow-y: scroll;
  height: 100%;
  background-color: brown;
  padding: 100px;
}
.post h3 {
  margin: 0 auto;
  display: block;
  background-color: rgb(248, 255, 47);
  padding: 10px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  text-align: center;
}
.post button {
  margin: 0 auto;
  display: block;
  background-color: #649911;
  padding: 10px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  text-align: center;
}
</style>

<script>
import { ref } from "vue"
import { useAllPokemon } from "../components/pikapika"

export default {
  setup() {
    const { allPokemon, getAllPokemon } = useAllPokemon()
    const selectedPokemon = ref(null)
    const selectedPokemonList = ref([])

    const showPokemonDetails = (pokemon) => {
      selectedPokemon.value = pokemon
    }

    const addSelectedPokemon = () => {
      if (selectedPokemon.value) {
        selectedPokemonList.value.push(selectedPokemon.value)
        selectedPokemon.value = null // Сбросить выбранный покемон после добавления в список
      }
    }

    return {
      allPokemon,
      getAllPokemon,
      selectedPokemon,
      selectedPokemonList,
      showPokemonDetails,
      addSelectedPokemon,
    }
  },
}
</script>
