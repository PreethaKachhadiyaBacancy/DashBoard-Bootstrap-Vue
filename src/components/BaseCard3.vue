<template>
  <b-row>
    <b-col cols="6">
      <b-card>
        <div class="header translate">
          <b-row>
            <b-col cols="9">
              <b-row>
                <h4 class="heading">Employees Stats</h4>
              </b-row>
              <b-row>
                <p class="para">New Employees on 22nd February, 2021</p>
              </b-row>
            </b-col>
            <b-col cols="3" align-self="center">
              <b-button @click="addModal" class="addButton">
                <b-icon-plus
                  class="plusIcon"
                  style="margin: 0; padding; 0"
                ></b-icon-plus>
                <p class="paraBtn">Add</p>
              </b-button>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------ -->
        <b-modal
          id="addEditModal"
          ref="modal"
          title="Add/Edit Details"
          @ok="addEditDetails"
        >
          <b-form>
            <b-form-group label="Full Name:" label-for="name">
              <b-form-input
                id="name"
                v-model="newData.name"
                placeholder="Enter Full Name"
                required
              >
              </b-form-input>
            </b-form-group>
            <b-form-group label="Salary(in $):" label-for="salary">
              <b-form-input
                id="salary"
                v-model="newData.salary"
                placeholder="Enter Salary"
                required
              >
              </b-form-input>
            </b-form-group>
            <b-form-group label="Country:" label-for="country">
              <b-form-input
                id="country"
                v-model="newData.country"
                placeholder="Enter Country"
                required
              >
              </b-form-input>
            </b-form-group>
          </b-form>
        </b-modal>

        <b-table
          v-if="dataFound"
          hover
          small
          table-variant="light"
          :fields="fields"
          :items="bc3Info"
          class="translate"
        >
          <template #cell(index)="data">
            {{ data.index + 1}}
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
            <b-button @click="editModal(data.item.id)" variant="light">
              <b-icon-pencil></b-icon-pencil>
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
      fields: [
        "index",
        "name",
        "salary",
        { key: "countryid", label: "Country", tdClass: "deleteCol" }
      ],
      // dataIndex: 3,
      editId: null,
      newData: {
        id: null,
        name: "",
        country: "",
        salary: ""
      },
      addIsSelected: true
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
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm(
          "Please confirm that you want to delete the Employee Details.",
          {
            title: "Delete Confirmation",
            size: "sm",
            buttonSize: "lg",
            okVariant: "danger",
            okTitle: "YES",
            cancelTitle: "NO",
            footerClass: "p-3",
            hideHeaderClose: false,
            centered: true,
            headerBgVariant: "danger",
            headerTextVariant: "light"
          }
        )
        .then(value => {
          if (value) {
            this.$emit("deleteRow", id);
          }
          // this.boxTwo = value
        })
        .catch(err => {
          console.log("Error during Deletion");
        });
    },
    addModal() {
      this.resetNewData();
      this.addIsSelected = true;
      this.editId = null;
      // this.dataIndex += 1;
      // this.newData.id = this.dataIndex;
      // this.newData.salary = "$" + this.newData.salary;
      this.$bvModal.show("addEditModal");
    },
    addEditDetails() {
      // var temp = this.bc3Info.find(row => row.id === this.editId);
      // ------ADD-----
      console.log(this.addIsSelected);
      if (this.addIsSelected) {
        this.editId = null;
        // this.dataIndex += 1;
        this.newData.id = Math.random();
        this.newData.salary = "$" + this.newData.salary;
      }
      // ------EDIT-------
      // else {
        // console.log("inside else");
        // var tempDetails = this.bc3Info.find(row => row.id === this.editId);
        // this.bc3Info.find(row => row.id === id);
        // console.log("temp details:" + tempDetails);
        // this.newData.id = tempDetails.editId;
        // this.newData.name = tempDetails.name;
        // this.newData.country = tempDetails.country;
        // this.newData.salary = tempDetails.salary;
        // console.log("end of else");
        // this.editId = id;
      // }

      // var details = this.newData;

      console.log(this.newData);

      var details = {
        ...this.newData
      }

      this.$emit("addRow", details, this.editId);
      this.editId = null;
      this.$nextTick(() => {
        this.$bvModal.hide("addEditModal");
        // this.resetNewData();
      });
      // this.resetNewData();
    },
    // addDetails(id = null) {
    //   // bvModalEvt.preventDefault();
    //   this.resetNewData();
    //   var temp = this.bc3Info.find(row => row.id === this.editId);
    //   if (!temp) {
    //     // ----ADD------
    //     // this.newData.salary = this.newData.salary;
    //   } else {
    //     var tempDetails = this.bc3Info.find(row => row.id === id);
    //     // this.bc3Info.find(row => row.id === id);
    //     console.log("temp details:" + tempDetails);
    //     this.newData.id = tempDetails.id;
    //     this.newData.name = tempDetails.name;
    //     this.newData.country = tempDetails.country;
    //     this.newData.salary = tempDetails.salary;

    //     this.editId = id;
    //   }
    //   this.$emit("addRow", this.newData, this.editId);
    //   this.editId = null;
    //   this.$nextTick(() => {
    //     this.$bvModal.hide("addEditModal");
    //   });
    //   // this.$bvModal.hide('addEditModal');
    //   // this.resetNewData();
    // },
    editModal(id) {
      console.log("id=" + id);
      this.addIsSelected = false;
      this.editId = id;
      console.log('editId = ' + this.editId);
      var tempDetails = this.bc3Info.find(row => row.id === id);
      // // this.bc3Info.find(row => row.id === id);
      // console.log("temp details:" + tempDetails);
      this.newData.id = tempDetails.id;
      this.newData.name = tempDetails.name;
      this.newData.country = tempDetails.country;
      this.newData.salary = tempDetails.salary;

      this.$bvModal.show("addEditModal");

      // console.log(this.newData);
      // tempDetails.id = this.newData.id;
      // tempDetails.name = this.newData.name;
      // tempDetails.salary  = this.newData.salary;
      // tempDetails.country = this.newData.country;
    },
    resetNewData() {
      this.newData.id = null;
      this.newData.name = "";
      this.newData.country = "";
      this.newData.salary = "";
      // var length = this.bc3Info.length;
      // this.dataIndex = this.bc3Info[length-1].id;
      // this.dataIndex = this.bc3Info.length;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-align: left;
}

th {
  color: #f59733 !important;
  font-weight: 500 !important;
  font-size: 120%;
}

.header {
  /* height: rem; */
  /* width: 25rem; */
  margin: 0 auto;
  padding: 1% 6%;
  /* padding-bottom: -1%; */
  background-color: #f59733;
  color: white;
  text-align: left;
  box-shadow: 1px 1px 4px lightslategray;
}

.heading {
  margin-top: 2%;
}

.translate {
  transform: translateY(-35px);
}

.addButton {
  padding: 0;
  align-content: space-between;
  display: flex;
  width: 100%;
  height: 40px;
  padding-right: 10px;
  align-items: center;
  background-color: #f59733;
  border: 2px solid white;
  border-radius: 5px;
}

.plusIcon {
  height: 80%;
  width: 80%;
}

.para {
  margin-bottom: 2%;
}

.paraBtn {
  margin: 0;
  /* margin-left: 7%; */
  /* padding: 4px 0; */
  font-size: 125%;
}

.deleteCol > button {
  float: right;
}
</style>
