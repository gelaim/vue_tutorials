const app = Vue.createApp({
    data() {
        return {
            message: "oi mundo!",
            paragraph: '',
            paragraphEnter: ''
        }
    },
    methods: {
        addParagraph(event) {
            this.paragraph = event.target.value
        },
        addParagraphEnter(event) {
            this.paragraphEnter = event.target.value
        },
        showAlert() {
            alert(this.message)
        }
    }
});
app.mount('#assignment')