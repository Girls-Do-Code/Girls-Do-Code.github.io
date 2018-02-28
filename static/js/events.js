const app = new Vue({
    el: '#events',
    data: {
        events: [],
	sortedEvents : [],
	imgUrl : ["static/img/event1.jpg", "static/img/event2.jpg", "static/img/event3.jpg", "static/img/event4.jpg","static/img/event5.jpg","static/img/event6.jpg"]
    },
    created() {
        fetch('https://girls-do-code.github.io/static/js/events.json')
            .then(response => response.json())
            .then(json => {
                this.events = json.events
		this.sortedEvents = this.alphaSort(this.events);
            });
    },
    methods: {
        alphaSort: function (arr) {
            return arr.sort(function (a, b) {
                var keyA = new Date(a.date),
                    keyB = new Date(b.date);

                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
		if(keyA == keyB) {
			var titleA = a.title, titleB = b.title;
		        if (titleA < titleB) return -1;
		        if (titleA > titleB) return 1;
			return 0;
		}
                return 0;
            });
        }
	   
    }
});



