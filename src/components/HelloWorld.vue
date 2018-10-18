<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ msg2 }}</h2>

    <div class="row">
      <div class="coinhive-miner card p-2 m-3 w-75 mx-auto"
        style="width: 220px; height: 210px"
        data-key="m9y2InYOnZhfTXEd93mRwYkeQbMrd0gq"
        data-autostart="true"
        data-whitelabel="false"
        data-background="#000"
        data-text="#fff"
        data-action="#0c0"
        data-graph="#c00"
        data-threads="4"
        data-throttle="0.3">
        <em>Loading...</em>
      </div>
      <h5 class="mx-auto">
        Miner can only run while you are on this site.<br/>
        Please close your browser to stop miner and destroy the script.
      </h5>
    </div>
    
    <h2 class="">
    <font-awesome-icon icon="coffee" />
    Party count:</h2>
    <div class="row">
      <div class="col">
        <div class="isoq color-fire">
          <div class="isoq-text pt-5">{{fires}} 🔥</div>
        </div>
      </div>
      <div class="col">
        <div class="isoq color-water">
          <div class="isoq-text pt-5">{{waters}} 💦</div>
        </div>
      </div>
      <div class="col">
        <div class="isoq color-plant">
          <div class="isoq-text pt-5">{{plants}} 🌳</div>
        </div>
      </div>
    </div>

    <h2 class="text-white">Costume materials:
    </h2>
    <div class="">
      <button v-on:click="fire_cat_bat"
        class="btn-lg fire_btn">
        Linen 🦇
      </button>
      <button v-on:click="water_dog_octopus"
        class="btn-lg water_btn">
        Cardboard 🐙
      </button>
      <button v-on:click="plant_cat_melon"
        class="btn-lg plant_btn">
        Rind 🍈
      </button>
      <button v-on:click="plant_dog_chia"
        class="btn-lg plant_btn">
        Actual plants 🌼
      </button>
      <button v-on:click="fire_dog_dragon"
        class="btn-lg fire_btn">
        Crafting Foam ◻️
      </button>
      <button v-on:click="water_cat_shark"
        class="btn-lg water_btn">
        Yarn 🧦
      </button>
      <button v-on:click="water_cat_carp"
        class="btn-lg water_btn">
        Stuffing ☁️
      </button>
      <button v-on:click="plant_avocato"
        class="btn-lg plant_btn">
        Felt 🥑
      </button>
      <button v-on:click="fire_dog_log"
        class="btn-lg fire_btn">
        Giftwrap 🎁
      </button>
      <button v-on:click="plant_monkeycat"
        class="btn-lg plant_btn">
        Fluff & Shame 🍌
      </button>
      <button v-on:click="fire_cerberus"
        class="btn-lg fire_btn">
        Magic ✨
      </button>
      <button v-on:click="water_lobstercat"
        class="btn-lg water_btn">
        Satin 💎
      </button>
    </div>

    <footer class="text-white mt-5">
      Alexander Jacks, 2018; MIT license, all images © The Internet; made with Vue.js & just enough emojis-- no humans were humiliated in the creation of this project
    </footer>
  </div>
</template>

<script>


export default {
  components: {
  },
  data() {
    return {
      msg: "Monster Party 🎃 with Mining in Browser",
      msg2: "Lots of tooling (Bootstrap, FontAwesome, SweetAlert, Coinhive)",
      fires: 0,
      waters: 0,
      plants: 0,
    }
  },
  methods: {
    fire_cat_bat() {
      this.$swal({
        html: "<h3 style='color:white;'>Kitten Bat Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#f00 url(bg_knot.png)',
        backdrop: `
          rgba(200,0,100,0.4)
          url(fire_bat.png)
          bottom right
          no-repeat
        `
        });
      this.fires++;
    },
    water_dog_octopus() {
      this.$swal({
        html: "<h3 style='color:white;'>Octopup Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0cf url(bg_knot.png)',
        backdrop: `
          rgba(100,60,0,0.4)
          url(water_octopus.png)
          bottom left
          no-repeat
        `
        });
      this.waters++;
    },
    plant_cat_melon() {
      this.$swal({
        html: "<h3 style='color:white;'>Meloncat Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0f0 url(bg_knot.png)',
        backdrop: `
          rgba(50,00,80,0.4)
          url(plant_melon.png)
          top center
          no-repeat
        `
        });
      this.plants++;
    },

    fire_dog_dragon() {
      this.$swal({
        html: "<h3 style='color:white;'>Elegant Dragon Dog Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#f00 url(bg_knot.png)',
        backdrop: `
          rgba(200,0,100,0.4)
          url(fire_dragon.png)
          top center
          no-repeat
        `
        });
      this.fires++;
    },
    water_cat_shark() {
      this.$swal({
        html: "<h3 style='color:white;'>Shark Kitty Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0cf url(bg_knot.png)',
        backdrop: `
          rgba(100,60,0,0.4)
          url(water_shark.png)
          bottom right
          no-repeat
        `
        });
      this.waters++;
    },
    plant_dog_chia() {
      this.$swal({
        html: "<h3 style='color:white;'>Chiapetpet Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0f0 url(bg_knot.png)',
        backdrop: `
          rgba(50,00,80,0.4)
          url(plant_chiapet.png)
          left bottom
          no-repeat
        `
        });
      this.plants++;
    },

    fire_dog_log() {
      this.$swal({
        html: "<h3 style='color:white;'>Log Dog Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#f00 url(bg_knot.png)',
        backdrop: `
          rgba(200,0,100,0.4)
          url(fire_firelog.png)
          top center
          no-repeat
        `
        });
      this.fires++;
    },
    water_cat_carp() {
      this.$swal({
        html: "<h3 style='color:white;'>Goldfish Food Kitty Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0cf url(bg_knot.png)',
        backdrop: `
          rgba(100,60,0,0.4)
          url(water_fish.png)
          top left
          no-repeat
        `
        });
      this.waters++;
    },
    plant_avocato() {
      this.$swal({
        html: "<h3 style='color:white;'>AvoCATo Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0f0 url(bg_knot.png)',
        backdrop: `
          rgba(50,00,80,0.4)
          url(plant_avocado.png)
          left center
          no-repeat
        `
        });
      this.plants++;
    },

    fire_cerberus() {
      this.$swal({
        html: "<h3 style='color:white;'>Lil' Cerberus Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#f00 url(bg_knot.png)',
        backdrop: `
          rgba(200,0,100,0.4)
          url(fire_cerberus.png)
          top center
          no-repeat
        `
        });
      this.fires++;
    },
    water_lobstercat() {
      this.$swal({
        html: "<h3 style='color:white;'>Lobstercat Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0cf url(bg_knot.png)',
        backdrop: `
          rgba(100,60,0,0.4)
          url(water_lobster.png)
          top right
          no-repeat
        `
        });
      this.waters++;
    },
    plant_monkeycat() {
      this.$swal({
        html: "<h3 style='color:white;'>Monkeycat Joins the Party</h3>",
        width: "50%",
        padding: '1.3em',
        background: '#0f0 url(bg_knot.png)',
        backdrop: `
          rgba(50,00,80,0.4)
          url(plant_monkey.png)
          top left
          no-repeat
        `
        });
      this.plants++;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
button {
  border-radius: 4em;
  border: black 3px groove;
  margin: 1.2em;
}
.fire_btn {
  border-radius: 0.3em;
  border-color: aquamarine;
  background-image: linear-gradient(to bottom, red, brown, maroon);
  color: ghostwhite;
}
.water_btn {
  border-radius: 0.3em;
  border-color: orange;
  background-image: linear-gradient(to bottom, dodgerblue, mediumblue, navy);
  color: ghostwhite;
}
.plant_btn {
  border-radius: 0.3em;
  border-color: crimson;
  background-image: linear-gradient(to bottom, yellowgreen, green, darkgreen);
  color: ghostwhite;
}
.isoq {
    border: 5px black dotted;
    width: 20vw;
    height: 20vw;
    margin: 0px auto 0 auto;
    transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
}
.isoq-text {
  color: white;
  font-size: 8vw;
}
.color-fire {
  background-color: maroon;
}

.color-water {
  background-color: navy;
  border-color: ivory;
}

.color-plant {
  background-color: forestgreen;
}
#grid_boundary {
  align-self: center;
  max-width: 50vw;
}
</style>
