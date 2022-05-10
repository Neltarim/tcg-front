<template>
  <section class="w-full h-full">
    <CraftTable 
      :recipes="player.recipes" 
      :ressources="player.ressources"
    ></CraftTable>
    
    <ObjectsTable 
      :objects="player.objects"
    ></ObjectsTable>

    <OpponentBoard
      :hero="opponent.hero"
      :servants="opponent.servants"
    ></OpponentBoard>

    <ActionStack :actionStack="actionStack"></ActionStack>

    <PlayerBoard
      :hero="player.hero"
      :servants="player.servants"
    ></PlayerBoard>

  </section>
</template>

<script>
import OpponentBoard from "../components/Game/opponent/OpponentBoard.vue";
import PlayerBoard from "../components/Game/player/PlayerBoard.vue";
import ObjectsTable from "../components/Game/player/ObjectsTable.vue";
import CraftTable from "../components/Game/player/CraftTable.vue";
import ActionStack from "../components/Game/ActionStack.vue";

import getHero from "../assets/data/heroes.js"
import getRecipe from "../assets/data/recipes.js"
import getRessource from "../assets/data/ressources.js"


export default {
  name: "Game",
  components: { 
    OpponentBoard, PlayerBoard, ObjectsTable, 
    CraftTable, ActionStack 
  },
  data() { 
    return {
      opponent: {},
      player: {},
      actionStack: [],
      countDown: null
    }
  },

  mounted() {

    const ressourcesRefs = [ {id: 1, quantity: 26} ]
    const recipesRefs = [1, 2 , 3]


    this.opponent = {
      hero: getHero(1),
      servants: [],
    }

    this.player = {
      hero: getHero(2),
      servants: [],
      ressources: ressourcesRefs.map((ref) => {
        let res = getRessource(ref.id)
        res.quantity = ref.quantity
        return res
      }),
      recipes: recipesRefs.map((id) => getRecipe(id)),
      objects: [],
    }
  }
}
</script>