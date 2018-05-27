// Tabbing --------------------------------------------------------------------------------

Vue.component('tabs', {
    template : `<div><div class="tabs">
                    <ul>
                        <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
                            <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                        </li>
                    </ul>
                </div>
                <div class="tabs-details">
                    <slot></slot>
                </div></div>`,
    data(){
        return {tabs : []};
    },
    created() {
        this.tabs = this.$children;
    },
    methods : {
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    props : {
        name : {required : true},
        selected : {default : false}
    },
    template : `<div v-show="isActive"><slot></slot></div>`,  
    data(){
        return {
            isActive : false
        }
    },
    computed : {
        href(){
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },
    mounted(){
        this.isActive = this.selected;
    }
});

// Reactivity --------------------------------------------------------------

Vue.component('reactivity-example', {
    template : `<div>
                    <h1>{{message}}</h1>
                    <h1>{{result}}</h1>
                    <input v-model="message"></input>
                    <button @click="reverseString()">Reverse</button>
                </div>`,
    computed : {

    },
    methods : {
        reverseString(){
            this.result = this.message.split('').reverse().join('');
            message = '';
        }
    },
    data(){
        return {
            message : '',
            result : ''
        }
    }
});

// Simple message -------------------------------------------------------------------

Vue.component('singular-message', {
    props : ['heading', 'message'],
    template : `<article class="message" v-show="isVisible">
                    <div class="message-header">
                    {{heading}}}
                    <button type="button" @click="hideHeader()">x</button>
                    </div>
                    <div class="message-body">
                        {{message}}
                    </div>
                </article>`,
    methods : {
        hideHeader(){
            this.isVisible = false
        }
    },
    data(){
        return{
            isVisible : true
        }
    }
});

// Task list -----------------------------------------------------------------------

Vue.component('task-list', {
    template: `<div><task v-for="task in tasks">{{task.name}}</task></div>`,
    data(){
        return {
            tasks : [
                {name : 'task1', completed : true},
                {name : 'task2', completed : false},
                {name : 'task3', completed : false},
                {name : 'task4', completed : false},
                {name : 'task5', completed : false},
                {name : 'task6', completed : true}
            ]
        }
    }
});

Vue.component('task', {
    template : `<li><slot></slot></li>`
});

// Vue instance -----------------------------------------------------------------

new Vue({
    el : '#root'
});