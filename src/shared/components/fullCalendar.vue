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
import rrulePlugin from '@fullcalendar/rrule'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; 

import bootstrapPlugin from '@fullcalendar/bootstrap';

const id = ref(1)

const calendarOptions = ref({
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin, rrulePlugin ],
    initialView: 'listWeek',
    headerToolbar: {
        center: 'dayGridMonth',
        left: 'timeGridWeek timeGridDay listWeek'
    },
    events: [
        {
            id: 12,
            title: 'Felipe Barrera',
            start: '2023-10-02T14:00:00',
            extendedProps: {
                status: 'done'
            },
        },
        {
            title: 'Birthday Party',
            start: '2023-10-03T07:00:00',
            backgroundColor: 'green',
            borderColor: 'green'
        }
    ],
    listDaySideFormat: {
        month: 'short',
        year: '2-digit',
        day: '2-digit',
        weekday: 'short'
    },
    eventDidMount: function(info){
        if (info.event.extendedProps.status === 'done') {
            console.log('BRRR', info.event);
            // Change background color of row
            info.el.style.backgroundColor = 'red';
            // Change color of dot marker
            var dotEl = info.el.getElementsByClassName('fc-event-dot')[0];
            if (dotEl) {
                dotEl.style.backgroundColor = 'white';
            }
        }
    },
    editable: true,
    noEventsClassNames: 'no-events',
    noEventsDidMount: function(){
        console.log('Esto solo se ejecuta donde no hayan eventos');
    }
})

</script>

<style>

.clases{
    background-color: red !important;
}

.class-all-day{
    background-color: red !important;
    color: white;
    min-width: 100px !important;
}

.no-events{
    background-color: lightblue !important;
    color: white !important;
}
</style>