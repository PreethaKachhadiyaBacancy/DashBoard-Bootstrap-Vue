<template>
  <b-row>
    <b-col cols="6">
      <b-card>
        <div class="header translate">
          <h4>Employees Stats</h4>
          <p>New Employees on 22nd February, 2021</p>
        </div>

        <!-- <b-table
          hover
          small
          table-variant="light"
          :items="bc3Info"
          class="translate"
        ></b-table> -->

        <b-table
          v-if="dataFound"
          hover
          small
          table-variant="light"
          :fields="fields"
          :items="bc3Info"
          class="translate"
        >
          <template #cell(id)="data">
            {{ data.value }}
          </template>
          <template #cell(name)="data">
            {{ data.value }}
          </template>
          <template #cell(salary)="data">
            {{ data.value }}
          </template>
          <template #cell(countryid)="data">
            {{ data.item.country }}
            <!-- <b-icon-trash></b-icon-trash><br> -->
            <b-button @click="deleteRow(data.item.id)" variant="light">
              <b-icon-trash></b-icon-trash>
            </b-button>
          </template>
          <!-- <template #cell(index)="data">
            <b-button @click="deleteRow(data.index)">
              <b-icon-trash></b-icon-trash>
            </b-button>
          </template> -->
        </b-table>

        <div v-else>
          <p>No Data Found</p>
        </div>
      </b-card>
    </b-col>
    <b-col cols="6">
      <b-card>
        <div class="header translate">
          <h4>Employees Stats</h4>
          <p>New Employees on 22nd February, 2021</p>
        </div>
        <b-table
          hover
          small
          table-variant="light"
          :items="bc3Info"
          class="translate"
        ></b-table>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "BaseCard3",
  props: ["bc3Info"],
  data() {
    return {
      fields: ["id", "name", "salary", { key: "countryid", label: "Country" }],
    };
  },
  computed: {
    dataFound: function() {
      return this.bc3Info.length ? true : false;
    }
  },
  methods: {
    deleteRow(id) {
      console.log(id);
      this.$emit("deleteRow", id);
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

th {
  color: #f59733 !important;
  font-weight: 500 !important;
}

.header {
  /* height: rem; */
  /* width: 25rem; */
  margin: 0 auto;
  padding: 1% 3%;
  /* padding-bottom: -1%; */
  background-color: #f59733;
  color: white;
  text-align: left;
  box-shadow: 1px 1px 4px lightslategray;
}

.translate {
  transform: translateY(-35px);
}
</style>
