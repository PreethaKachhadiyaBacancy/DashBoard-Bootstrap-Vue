<template>
  <div style="margin: 0; padding: 0">
    <base-card-1 :bc1Info="baseCard1" class="basecard"></base-card-1>
    <base-card-2 :bc2Info="baseCard2" class="basecard"></base-card-2>
    <base-card-3
      :bc3Info="employeeDetails"
      @deleteRow="deleteRow"
      @addRow="addNewData"
      class="basecard"
    ></base-card-3>
  </div>
</template>

<script>
import BaseCard1 from "./BaseCard1.vue";
import BaseCard2 from "./BaseCard2.vue";
import BaseCard3 from "./BaseCard3.vue";

export default {
  components: { BaseCard1, BaseCard2, BaseCard3 },
  emits: ["deleteRow"],
  name: "Dashboard",
  data() {
    return {
      baseCard1: [
        {
          color: "#f59733",
          subText: "Used Space",
          text: "49/50 GB",
          footer: "Get more space"
        },
        {
          color: "#50ab58",
          subText: "Revenue",
          text: "$34,245",
          footer: "Last 24 Hours"
        },
        {
          color: "#f54033",
          subText: "Fixed Issues",
          text: "75",
          footer: "Tracked from Github"
        },
        {
          color: "#30c2bf",
          subText: "Followers",
          text: "+245",
          footer: "Just Updated"
        }
      ],
      baseCard2: [
        {
          color: "#50ab58",
          text: "Daily Sales",
          subText: "55% increase in today sales",
          footer: "updated 4 minutes ago"
        },
        {
          color: "#f59733",
          text: "Email Subscriptions",
          subText: "Last Campaign Performance",
          footer: "campaign 2 days ago"
        },
        {
          color: "#f54033",
          text: "Completed Tasks",
          subText: "Last Campaign Performance",
          footer: "campaign 2 days ago"
        }
      ],
      employeeDetails: [
        {
          id: Math.random(),
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger"
        },
        {
          id: Math.random(),
          name: "abc xyz",
          salary: "$23,789",
          country: "America"
        },
        {
          id: Math.random(),
          name: "pqr mno",
          salary: "$12,345",
          country: "Netherlands"
        }
      ]
    };
  },
  methods: {
    deleteRow(id) {
      console.log("dashboard");
      this.employeeDetails = this.employeeDetails.filter(row => row.id != id);
    },
    addNewData(data, id) {
      console.log('dashboard');
      console.log(data);
      // console.log(data);
      console.log('dashboard id: ' + id);
      console.log('emplolyee details: ');
      // console.log(this.employeeDetails[0]);
      // console.log(this.employeeDetails[id-1]);

      if(id) {
        console.log('inside if');
      //   this.employeeDetails[id-1].id = data.id;
      //   this.employeeDetails[id-1].name = data.name;
      //   this.employeeDetails[id-1].salary = data.salary;
      //   this.employeeDetails[id-1].country = data.country;
      // console.log(this.employeeDetails[id-1]);
        

 this.employeeDetails = this.employeeDetails.map(row => {
        // if(row.id === id )
        console.log(row.id);
        return row.id === id ? data : row;
      })

      
      }
      else {
      this.employeeDetails.push(data);
        
      }

     

      // else {
      //   this.employeeDetails[data.id] = data;
      // }
    }
  }
};
</script>

<style scoped>
/* b-container b-row {
  margin: 0 !important;
  padding: 0 !important;
} */

/* div {
  margin: 0;
} */

.basecard {
  margin: 1% 0;
}

b-col {
  border: 1px solid black;
  margin: 0;
}

/* .row1 {
  height: 150px;
  border: 1px solid black;
}

.row2 {
  height: 20%;
  border: 1px solid black;
}

.row3 {
  height: 40%;
  border: 1px solid black;
} */
</style>
