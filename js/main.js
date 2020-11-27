import "./modules/burgerMenu.js";
import { fetchData, postData } from "./modules/TheDataMiner.js";
// import carThumb from "./modules/components.js";

(() => {

    Vue.component("thumnail-card", {

        show_bio_data: false,

        currentModelData: {},

        props:["item"],
        template:`<img @click.prevent="thumbSelected(item)" :src="'images/' + item.images" alt="item images">`,

        mounted:function(){
            console.log(`loaded a ${this.item.name}'s image`);
            console.log(`${this.item.images}`);
        },

        methods:{
            thumbSelected(item){
                console.log("Thumbnail Selected: ", item.name);
                this.show_bio_data = this.show_bio_data ? false:true;
                this.currentModelData = item;
            }
        }
    });

    let vue_em = new Vue({

        data:{
            message: "Hello Vue!",
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
            logClicked(item){
                console.log("Image Clicked ", item.name);
            }
        }

    }).$mount("#app");

})();