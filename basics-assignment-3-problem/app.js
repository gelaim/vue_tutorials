const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    watch: {
        result(value) {
            if (value > 0) {
                const that = this;
                setTimeout(function () { that.result = 0 }, 5000)
            }
        }
    },
    computed: {
        message() {
            console.log(this.result)
            console.log('oioi')
            if (this.result < 37) {
                return "Not there yet"
            }
            if (this.result > 37) {
                return "Too much!"
            }
            else {
                result = 37
            }
            return result
        }
    },
    methods: {
        addOne() {
            this.result += 1
        },
        addFive() {
            this.result += 5
        }
    }
})
app.mount("#assignment")