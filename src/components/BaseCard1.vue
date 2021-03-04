<template>
  <!-- <b-container> -->
    <b-row align-h="between">
      <b-col v-for="bc1 in bc1Info" :key="bc1.id">
        <b-card>
          <b-row>
            <b-col md="4">
              <div :style="{ backgroundColor: bc1.color }" class="img"></div>
            </b-col>
            <b-col md="8" class="text">
              <p class="subText">{{ bc1.subText }}</p>
              <h3>{{ bc1.text }}</h3>
            </b-col>
            <hr />
            <p>{{ bc1.footer }}</p>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  <!-- </b-container> -->
</template>

<script>
export default {
  name: "BaseCard1",
  props: ["bc1Info"]
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.img {
  height: 60px;
  width: 60px;
}

.text {
  text-align: right;
}

.subText {
  font-size: 90%;
}

hr {
  width: 80%;
}

b-card {
  margin: 60px 60px;
}

/* b-row {
   padding: 20%;
} */

/* .card1 {
  display: flex;
} */
</style>
