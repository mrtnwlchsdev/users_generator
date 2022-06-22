const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            email: 'john@example.com',
            picture: 'https://unavatar.io/github/1stevengrant'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()

            this.firstName = results[0].name.first,
            this.lastName =  results[0].name.last,
            this.gender = results[0].gender,
            this.email = results[0].email,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app');