<template>
  <div class="container mt-1">
   <div class="row">
     <div class="col-md-9 order-sm-first order-last">
       <mapbox-map :accessToken="token" :zoom="zoom" :center="center">
         <mapbox-navigation-control position="bottom-left" />
          <mapbox-marker
          v-for="car in carData"
          v-bind:key = "car.year"
          :lngLat="[car.longitude,car.latitude]">
           <mapbox-popup class="popup-content">
            <div class="detail-popup">
              <p>Date:{{car.year}} Hour: {{car.acc_time}}</p>
              <p>Collision Type: {{car.collision_type_desc}}</p>
              <p>Report Type: {{car.report_type}}</p>
              <p>Light Discription: {{car.light_desc}}</p>
            </div>
          </mapbox-popup>
        </mapbox-marker>
       </mapbox-map>
     </div>
     <div class="col-md-3">
        <p class="text-initial">Total Crashes: {{carData.length}}</p>
       <div class="form-group">
         <select class="form-control" v-model="searchYear">
           <option value="">Year</option>
           <option value="2022">2022</option>
           <option value="2021">2021</option>
           <option value="2020">2020</option>
           <option value="2019">2019</option>
         </select>
       </div>
       <div class="form-group">
         <select class="form-control" v-model="collisionType">
           <option value="">Type of Collision</option>
           <option value="Single Vehicle">Single Vehicle</option>
           <option value="Other">Other</option>
         </select>
       </div>
       <div class="form-group">
         <select class="form-control" v-model="reportType">
           <option value="">Type of Report</option>
           <option value="Property Damage Crash">Property Damage Crash</option>
         </select>
       </div>
       <div class="form-group">
         <select class="form-control" v-model="lightDec">
           <option value="">Light Discription</option>
           <option value="Daylight">Daylight</option>
         </select>
       </div>
     </div>
   </div> 
  </div>
</template>

<script>
import { MapboxMap } from "vue-mapbox-ts";
import { mapActions } from "vuex";

export default {
  name: 'HelloWorld',
    components: {
    MapboxMap
  },
  data() {
      return {
          zoom:8,
          center: [-77.0970206666667,38.9922000],
          token : 'pk.eyJ1IjoibmFiZWVscGhhdGFrNDk0OSIsImEiOiJjbDgzMHd0dmYwMWFyM3VtZnBrbW1lMXloIn0.-vkh5gFE_djtVCC1l5hqdg',
          searchYear: '',
          collisionType: '',
          lightDec: '',
          reportType: '',
        }
    },
    computed:{
      carData(){
        if( this.collisionType || this.lightDec || this.reportType || this.searchYear){
            return this.$store.getters.carData.filter(car => {
              return car.year == this.searchYear || car.collision_type_desc == this.collisionType || car.year == this.lightDecm || car.year == this.reportType;
            });
          }else{
            return this.$store.getters.carData;
          }
      },
    },
    methods:{
      ...mapActions(["getMap"]),
    },

    mounted(){
      this.getMap();
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
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mapboxgl-popup-content{
  border-radius: 9px !important;
  border: 1px solid !important;
}
.mapbox-map{
  height: 800px !important;
}
.detail-popup p{
  margin: 0;
  text-align: initial;
}
.text-initial{
  text-align: initial;
}
</style>
