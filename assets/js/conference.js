new Vue({
    el: '#vue_conferences',
    data: {
        searchString: "",
        cols: [
            "CCF",
            "abbreviation",
            "full_name",
            "submission_deadline",
            "notification_date",
            "conference_date",
            "tags"
        ],
        conference_items: [{
                CCF: "",
                abbreviation: "MLSys 2022",
                href: "https://mlsys.org/",
                full_name: "The Conference on Machine Learning and Systems",
                submission_deadline: "2021-10-08",
                notification_date: "2022-01-15",
                conference_date: "2022-04-11",
                tags: [
                    "System"
                ]
            },
            {
                CCF: "A",
                abbreviation: "OSDI 2022",
                href: "https://www.usenix.org/conference/osdi22",
                full_name: "16th USENIX Symposium on Operating Systems Design and Implementation",
                submission_deadline: "2021-12-07",
                notification_date: "",
                conference_date: "2022-07-11",
                tags: [
                    "System"
                ]
            },
            {
                CCF: "A",
                abbreviation: "NSDI 2022",
                href: "https://www.usenix.org/conference/nsdi22",
                full_name: "USENIX Symposium on Networked Systems Design and Implementation",
                submission_deadline: "2021-09-09",
                notification_date: "2021-12-15",
                conference_date: "2022-04-04",
                tags: [
                    "System"
                ]
            },
            {
                CCF: "",
                abbreviation: "SEC 2021",
                href: "http://acm-ieee-sec.org/2021/",
                full_name: "ACM/IEEE Symposium on Edge Computing",
                submission_deadline: "2021-06-24",
                notification_date: "2021-09-03",
                conference_date: "2021-11-04",
                tags: [
                    "Edge",
                    "MLSys"
                ]
            },
            {
                CCF: "B",
                abbreviation: "CoNEXT 2021",
                href: "https://conferences2.sigcomm.org/co-next/2021/",
                full_name: "International Conference on emerging Networking EXperiments and Technologies",
                submission_deadline: "2021-06-21",
                notification_date: "2021-09-13",
                conference_date: "2021-12-06",
                tags: []
            },
            {
                CCF: "B",
                abbreviation: "IMC 2021",
                href: "https://conferences.sigcomm.org/imc/2021/",
                full_name: "Internet Measurement Conference",
                submission_deadline: "2021-05-26",
                notification_date: "2021-08-18",
                conference_date: "2021-11-02",
                tags: [
                    "Measurement"
                ]
            },
            {
                CCF: "A",
                abbreviation: "SIGCOMM 2021",
                href: "https://conferences.sigcomm.org/sigcomm/2021/",
                full_name: "Annual Conference of the ACM Special Interest Group on Data Communication",
                submission_deadline: "2021-01-20",
                notification_date: "2021-05-03",
                conference_date: "2021-08-23",
                tags: []
            }

        ]
    },
    computed: {
        filteredConferences: function() {
            var Conferences_array = this.conference_items,
                searchString = this.searchString;

            if (!searchString) {
                return Conferences_array;
            }

            searchString = searchString.trim().toLowerCase();

            Conferences_array = Conferences_array.filter(function(item) {

                if (item.abbreviation.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
                if (item.full_name.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
                for (var tag_index = 0; tag_index < item.tags.length; tag_index++) {
                    if (item.tags[tag_index].toLowerCase().indexOf(searchString) !== -1) {
                        return item;
                    }
                }
            })
            return Conferences_array;;
        }
    }
})