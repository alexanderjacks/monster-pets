<template>
  <div id="">
    <p>
      Circular timer gauge
    </p>
      <vue-circle
        :progress="0"
        :size="100"
        :reverse="false"
        line-cap="round"
        :fill="fill"
        :empty-fill="{ gradient: ['red', 'green', 'blue'] }"
        :animation-start-value="0.0"
        :animation="{ duration: 1200, easing: 'circleProgressEasing' }"
        :start-angle="0"
        insert-mode="append"
        :thickness="5"
        :show-percent="true"
        @vue-circle-progress="progress"
        @vue-circle-end="progress_end">
          <p>Slot!</p>
      </vue-circle>
  </div>
</template>

<script>
  import VueCircle from 'vue2-circle-progress'
  export default {
    components: {
      VueCircle
    },
    data(){
      return{
        fill : { gradient: ["red", "green", "blue"] },
      }
    },
    methods:{
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
      }
    }
  }
</script>