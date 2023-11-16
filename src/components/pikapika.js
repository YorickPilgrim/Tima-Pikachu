import { ref } from "vue"
import axios from "axios"

export function useAllPokemon() {
  const allPokemon = ref([])

  const getAllPokemon = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=50"
      ) // Получить первые 151 покемона в этом примере
      const pokemonList = response.data.results

      // Запросить дополнительную информацию для каждого покемона
      const pokemonDetails = await Promise.all(
        pokemonList.map(async (pokemon) => {
          const detailResponse = await axios.get(pokemon.url)
          return {
            name: detailResponse.data.name,
            image: detailResponse.data.sprites.front_default,
            // Дополнительные данные о покемоне, которые вам нужны, могут быть добавлены здесь
          }
        })
      )

      allPokemon.value = pokemonDetails
    } catch (error) {
      console.error("Ошибка при получении данных о покемонах:", error)
    }
  }

  return {
    allPokemon,
    getAllPokemon,
  }
}
