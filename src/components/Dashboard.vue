<template>
  <div style="margin: 0; padding: 0">
    <base-card-1 :bc1Info="baseCard1"></base-card-1>
      <base-card-2></base-card-2>
    
      <base-card-3></base-card-3>
  </div>
</template>

<script>
import BaseCard1 from "./BaseCard1.vue";
import BaseCard2 from "./BaseCard2.vue";
import BaseCard3 from "./BaseCard3.vue";

export default {
  components: { BaseCard1, BaseCard2, BaseCard3 },
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
          id: "1",
          name: "Dakota Rice",
          salary: "$36,738",
          country: "Niger"
        },
        {
          id: "2",
          name: "abc xyz",
          salary: "$23,789",
          country: "America"
        },
        {
          id: "3",
          name: "pqr mno",
          salary: "$12,345",
          country: "Netherlands"
        }
      ]
    };
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
