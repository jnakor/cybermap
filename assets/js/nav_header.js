function displayChs(btnGroup) {
    if (btnGroup.children.length > 1) {
        if (btnGroup.children[1].className.indexOf(' show') == -1) {
            btnGroup.children[1].className += ' show'
        }
    }

}

function hiddenChs(btnGroup) {
    if (btnGroup.children.length > 1) {
        if (btnGroup.children[1].className.indexOf(' show') > 0) {
            btnGroup.children[1].className = btnGroup.children[1].className.replace(' show', '')
        }
    }
}

Vue.component("nav_header", {
    props: ["nav_items"],
    template: `
    <header id="app">
        <div class='header'>
            <div class="container">

                <div class="logo">
                    <a href="index.html"><img alt="Logo" src="images/logo.png"></a>
                </div>


                <nav id="main-menu" class="main-menu">
                    <div class="btn-group" onmouseenter="displayChs(this)" onmouseleave="hiddenChs(this)" style="margin: 2.5px;" v-for="nav_item in nav_items">

                        <a :href="nav_item.href" class="btn btn-light btn-md dropdown-toggle minw  " aria-haspopup="true" role="button">{{nav_item.text}}<span class="sr-only" data-toggle="dropdown"> Toggle Dropdown</span></a>

                        <div class="dropdown-menu" v-if="nav_item.child_exist">
                            <div v-for="nav_ch in nav_item.chs">
                                <div class="dropdown-submenu" v-if="nav_ch.ch_exist">
                                    <a class="dropdown-item dropdown-toggle" href="blank.html">{{nav_ch.text}}</a>
                                    <div class="dropdown-menu ">
                                        <a v-for="ch_ch in nav_ch.chs " class="dropdown-item" href="blank.html ">{{ch_ch.text}}</a>
                                    </div>
                                </div>

                                <a v-else class="dropdown-item dropdown-toggle " href="blank.html ">{{nav_ch.text}}</a>
                            </div>

                        </div>

                    </div>
                </nav>
                <div>
                    <img src=" images/tsinghua-right.png " style="width: 150px; ">
                </div>

            </div>
        </div>
    </header>`

})

new Vue({
    el: '#nav_header',
    data: {
        nav_items: [{
                text: "Home",
                href: "index.html",
                child_exist: false
            },
            {
                text: "Research",
                href: "research/research.html",
                child_exist: false
            },
            {
                text: "Team",
                href: "team/team.html",
                child_exist: false
            }, {
                text: "Datasets",
                href: "blank.html",
                child_exist: false
            },
            {
                text: "Analysis",
                href: "blank.html",
                child_exist: true,
                chs: [{
                        text: "Node analysis",
                        ch_exist: true,
                        chs: [{
                                text: "IP geolocation"
                            },
                            {
                                text: "IP2AS"
                            },
                            {
                                text: "Alias Resolution"
                            }
                        ]
                    },
                    {
                        text: "Topology data analysis",
                        ch_exist: false
                    },
                    {
                        text: "Routing data analysis",
                        ch_exist: false
                    },
                    {
                        text: "Topology completeness improvements",
                        ch_exist: false
                    },
                    {
                        text: "Routing inference improvements",
                        ch_exist: false
                    },
                    {
                        text: "Routing security",
                        ch_exist: false
                    }
                ]
            },
            {
                text: "Software/Tools",
                href: "blank.html",
                child_exist: false
            }
        ]

    }
})