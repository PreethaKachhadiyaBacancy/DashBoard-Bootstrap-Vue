<template>
  <b-row align-h="around">
    <b-col v-for="bc2 in bc2Info" :key="bc2.id" cols="12" md="4">
      <b-card class="card">
        <b-row>
          <div
            :style="{ backgroundColor: bc2.color }"
            class="img translate"
          ></div>
        </b-row>
        <b-row>
          <div class="texts translate">
            <h4>{{ bc2.text }}</h4>
            <p class="subText">{{ bc2.subText }}</p>
          </div>
        </b-row>
        <b-row>
          <hr class="translate" />
          <p class="footer translate">{{ bc2.footer }}</p>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "BaseCard2",
  props: ["bc2Info"]
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}



.subText {
  font-size: 80%;
}

.texts {
  align-items: stretch;
  margin-top: 15px;
  text-align: left;
}

.card {
  max-width: 90%;
  margin: 4% 5%;
  padding: 3%;
  /* height: 90; */
  border-radius: 3px;
  box-shadow: 1px 1px 2px lightslategray;
}

.img {
  height: 10rem;
  width: 25rem;
  margin: 0 auto;
  box-shadow: 1px 1px 4px lightslategray;
}

.translate {
  transform: translateY(-30px);
}

.footer {
  margin-bottom: -30px;
}

hr {
  width: 135%;
  margin: 3% auto 3% auto;
  /* margin-top: 1%; */
}
</style>
