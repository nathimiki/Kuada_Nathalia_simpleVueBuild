const vm = new Vue({
    el : "#app",

    data : {
        welcomeMessage : "Our first Vue app!",

        deliciousFruit : [
            { name: "apple", flavour: "tasty!"},
            { name: "oranges", flavour: "sweet!"},
            { name: "pineapple", flavour: "tangy!"},

        ]
    },

    methods : {
        logFruit(e) {
            console.log(e.currentTarget);
        }
    }
});