Vue.component("vue_readings", {
    props: ["reading_items"],
    template: `<ul class="whatsnew "><li class="item mb-1 inthenews" v-for="reading_item in reading_items">
    <span class="text-info text-nowrap" v-for="tag in reading_item.tags">[{{tag}}]</span>{{reading_item.paper}}</span>
</li></ul>`

})

new Vue({
    el: '#vue_readings',
    data: {
        reading_items: [{
                tags: ['Measurement'],
                paper: "On Mapping the Interconnections in Today’s Internet, TON 2019."
            },
            {
                tags: ['Measurement'],
                paper: "TopoScope: Recover AS Relationships From Fragmentary Observations, IMC 2020."
            },
            {
                tags: ['MLSys'],
                paper: "Scalable Deep Learning on Distributed Infrastructures Challenges Techniques, and Tools, CSUR 2020."
            }, {
                tags: ['MLSys'],
                paper: "A Generic Communication Scheduler for Distributed DNN Training Acceleratio, SOSP 2019."
            }, {
                tags: ['Overlay', 'Qos'],
                paper: "Judicious QoS using cloud overlays, CoNEXT 2020. "
            }
        ]

    }
})