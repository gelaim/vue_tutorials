const app = Vue.createApp({
    data(){
        return {
            name:'Thiago',
            age: 33,
            srcImg: 'https://image.shutterstock.com/image-photo/tropical-beach-colorful-umbrellas-top-600w-648576928.jpg'
        }
    },
    methods:{
        ageInFiveYears(){
            return this.age + 5
        },
        getFavoriteNumber(){
            return Math.random();
        }
    }
});
app.mount('#assignment')