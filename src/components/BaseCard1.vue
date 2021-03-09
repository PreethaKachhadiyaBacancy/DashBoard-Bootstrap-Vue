<template>
  <!-- <b-container> -->
    <b-row align-h="around">
      <b-col v-for="bc1 in bc1Info" :key="bc1.id" cols="6" md="3">
        <b-card class="card">
          <b-row>
            <b-col md="4">
              <div :style="{ backgroundColor: bc1.color }" class="img"></div>
            </b-col>
            <b-col md="8" class="text">
              <p class="subText">{{ bc1.subText }}</p>
              <h3>{{ bc1.text }}</h3>
            </b-col>
            <hr />
            <p class="footer">{{ bc1.footer }}</p>
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
  height: 75px;
  width: 75px;
  transform: translateY(-25px);
  border-radius: 2px;
  box-shadow: 1px 1px 4px lightslategray;
}

.text {
  text-align: right;
}

.subText, .footer {
  font-size: 95%;
}

.card {
  max-width: 90%;
  margin: 4% 5%;
  padding: 3%;
  border-radius: 3px;
  box-shadow: 1px 1px 2px lightslategray;
}

hr {
  width: 95%;
  margin: 1% auto 3% auto;
  /* margin-top: 1%; */
}


/* b-card {
 
} */

/* b-row {
   padding: 20%;
} */

/* .card1 {
  display: flex;
} */
</style>
