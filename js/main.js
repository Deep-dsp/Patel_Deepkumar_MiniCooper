import "./modules/burgerMenu.js";
import { fetchData, postData } from "./modules/TheDataMiner.js";
// import carThumb from "./modules/components.js";

(() => {

    Vue.component("thumnail-card", {

        dataHide:true,
        props:["item"],
        template:`<img @click="logClicked" :src="'images/' + item.images" alt="item images">`,

        mounted:function(){
            console.log(`loaded a ${this.item.name}'s image`);
        },

        methods:{
            logClicked(){
                console.log("Image Clicked ", this.item.name);
                this.dataHide = false;
                this.$emit("showmydata", this.item);
            }
        }
    });

    let vue_em = new Vue({

        data:{
            
            text: "click on images for more details",
            message:"Enjoy The Ride",
            removeAFormat:true,
            show_bio_data: false,

            carModels:[],

            currentModelData: {}
        },

        mounted:function()
        {
            console.log("Vue is mounted, trying fetch for initial data");

            fetchData("./includes/index.php")
            .then(data=>{
                    data.forEach(prof=>this.carModels.push(prof));
                })
                .catch(err=>console.error(err));

        },

        methods:
        {

            thumbSelected(item){
                console.log("Thumbnail Selected: ", item.name);
                // this.show_bio_data = this.show_bio_data ? false:true;
                this.show_bio_data = true;
                this.removeAFormat = false;
                this.currentModelData = item;
                // console.log("CURRENT : ", this.currentModelData.images);
            }
        }

    }).$mount("#app");

})();