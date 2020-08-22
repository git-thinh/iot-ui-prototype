// load dat from home.json

var app = new Vue({
    el: '#data_rtq',
    data: {
        title: "RTQ",
        min_val: 20,
        between_val: "6-29",
        max_val: 40,
        ResultItems: {},
    },
    mounted: function () {
        var _self = this;
        var obj = fetch("rtq.json")
            .then(response => response.json())
            .then(jsonResponse => _self.ResultItems = jsonResponse);

        for (index = 0; index < _self.ResultItems.length; ++index) {
            _self.fn_change_item(_self.ResultItems[index], _self.min_val, _self.max_val)
        }
    },
    watch: {
        innerModel: function (value) {
        }
    },
    methods: {
        fn_rowItemClick: function (event, row, rindex) {
            var _self = this;
        },
        fn_change_color_show: function () {

            var _self = this;
            var items = _self.ResultItems;
            var _min = parseInt(_self.min_val) + 1;
            var _max = parseInt(_self.max_val) - 1;
            _self.between_val = _min + "-" + _max;
            items.forEach(element => {
                _self.fn_change_item(element, _min, _max)
            });

        },
        isNumber: function (evt) {
            var _self = this;
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        fn_change_item:function(item, _min, _max) {
            if (item.percent < _min) {
                item.color = "green";
            } else if (item.percent >= _max) {
                item.color = "red";
            } else {
                item.color = "#fbbd08";
            }
         }
    }
});


