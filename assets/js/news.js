Vue.component("vue_news", {
    props: ["news_items"],
    template: `<ul class="whatsnew">
    <li class="item mb-1 whatsnew" v-for="new_item in news_items">
        {{new_item.content}}
        <span class="time-info">{{new_item.time}}</span>
    </li>
</ul>`

})

new Vue({
    el: '#vue_news',
    data: {
        news_items: [{
                content: "Juncai Liu post his first blog on this website. The blog is about distributed learning and it is in Chinese. We should write more!ome",
                time: "Sep. 19, 2021"
            },
            {
                content: `Congrats to Juncai Liu! Our paper "FedPA: an Adaptively Partial Model Aggregation Strategy in Federated Learning " is accepted by Computer Networks.`,
                time: "Sep. 6, 2021"
            },
            {
                content: "The second page (our team) is available!",
                time: "Aug. 28, 2021"
            },
            {
                content: "The first page (homepage) is available!",
                time: "Aug. 28, 2021"
            },
            {
                content: "We launch our website program!",
                time: "Aug. 25, 2021"
            }
        ]

    }
})