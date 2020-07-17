// load dat from home.json

var app = new Vue({
    el: '#data_rtd',
    data: {
        title: "Real time display",
        ResultItems: {},
    },
    mounted: function () {
        var _self = this;
        var obj = fetch("rtd.json")
            .then(response => response.json())
            .then(jsonResponse => _self.ResultItems = jsonResponse );
    },
    watch: {
        innerModel: function (value) {
        }
    },
    methods: {
        fn_rowItemClick: function (event, row, rindex) {
            var _self = this;
            console.log(row);
        }

    }
})
