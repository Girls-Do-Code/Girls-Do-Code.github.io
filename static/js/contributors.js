const app2 = new Vue({
    el: '#contributors',
    data: {
        contributors: [],
	sortedContributors : [],
    },
    created() {
        fetch('https://opencode18.github.io/Girls-who-code/static/js/contributors.json')
            .then(response => response.json())
            .then(json => {
                this.contributors = json.contributors
		        this.sortedContributors = this.alphaSort(this.contributors);
                console.log(this.sortedContributors);
                
            });
    },
    methods: {
        alphaSort: function (arr) {
            return arr.sort(function (a, b) {
                var keyA = a.name,
                    keyB = b.name;

                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            });
        }
	   
    }
});



