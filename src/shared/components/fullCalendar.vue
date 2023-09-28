<template>
    <section class="mx-auto w-full">
        <FullCalendar v-bind:options="calendarOptions" />
    </section>
</template>

<script setup>
import { ref } from 'vue';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; 

import bootstrapPlugin from '@fullcalendar/bootstrap';

const id = ref(1)

const calendarOptions = ref({
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin ],
    initialView: 'dayGridMonth',
    customButtons: {
        custom: {
            text: 'FELIPE',
            click: function(){
                console.log('Este es el boton de FELIPE');
            }
        }
    },
    headerToolbar: {
        center: 'title prevYear nextYear',
        left: 'prev next today custom',
        right: 'dayGridMonth dayGridYear listDay'
    },
    titleFormat: {
        year: 'numeric', month: 'long', day: 'numeric'
    },
    titleRangeSeparator: ' / ',
    buttonText: {
        today: 'hoy',
        week: 'Semana',
        month: 'mes',
        day: 'dia',
        list: 'Lista',
        year: 'año'
    },
    themeSystem: 'bootstrap',
    bootstrapFontAwesome: {
        close: 'fa-times',
        prev: 'fa-chevron-left',
        next: 'fa-chevron-right',
        prevYear: 'fa-angle-double-left',
        nextYear: 'fa-angle-double-right'
    },
    firstDay: 2,
    fixedWeekCount: false,
    showNonCurrentDates: false,
    slotDuration: '00:00:03',
    dayHeaderClassNames: 'clases',
    stickyHeaderDates: true,
    editable: true,
    selectable: true,
    dayMinWidth: '600px',
    events: [
        { // this object will be "parsed" into an Event Object
            id: 12,
            groupId: 32,
            title: 'The Title', // a property!
            start: '2023-09-15', // a property!
            end: '2023-09-22',
            backgroundColor: 'red',
            allDay: true,
        },
        { // this object will be "parsed" into an Event Object
            id: 16,
            groupId: 32,
            title: 'Semanaalgo', // a property!
            start: '2023-09-12', // a property!
            backgroundColor: 'red',
            allDay: false,
        },
    ],
    eventClick: function(arg){
        if(arg.event){
            arg.event.remove()
        }
    },
    select: function(arg){
        console.log('Desde donde inicia: ', arg.start);
        console.log('Donde finaliza: ', arg.end);
        arg.view.calendar.unselect()
        arg.view.calendar.addEvent({
            title: 'Felipe',
            start: arg.start,
            end: arg.end
        })
    },
    eventChange: function (){
        console.log('CHANGWEEEE');
    },
    eventAdd: function(){
        console.log('Esto se ejecuta al AGREGARRRR');
    },
})

</script>

<style scoped>

.clases{
    background-color: red !important;
}
</style>