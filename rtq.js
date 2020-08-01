// load dat from home.json

var app = new Vue({
    el: '#data_rtd',
    data: {
        title: "RTQ",
        ResultItems: {},
    },
    mounted: function () {
        var _self = this;
        var obj = fetch("rtq.json")
            .then(response => response.json())
            .then(jsonResponse => _self.ResultItems = jsonResponse);
        console.log(obj);
       

    },
    watch: {
        innerModel: function (value) {
        }
    },
    methods: {
       

    }
});
