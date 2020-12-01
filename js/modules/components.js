export default{

    name: "components",
    props:["item"],
    template:`<img @click="carCliked" :src="'images/' + item.images" alt="item images">`,

    mounted:function(){
        console.log(`loaded a ${this.item.name}'s image`);
        console.log(`${this.item.images}`);
    },

    methods:{
        carClicked(){
            console.log(`Thumbnail image ${this.item.name} selected from component`)
        }
    }
}