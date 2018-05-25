
Vue.component('reactivity-example', {
    template : `<div>
                    <h1>{{message}}</h1>
                    <input v-model="message"></input>
                    <button @click="reverseString()">Reverse</button>
                </div>`,
    computed : {
        reverseString(){
            return this.result = this.message.split('').reverse().join('');
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

var app = new Vue({
    el : '#root'
});