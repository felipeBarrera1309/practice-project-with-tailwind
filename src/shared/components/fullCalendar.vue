<template>
    <section class="mx-auto w-full">
        <button class="bg-slate-700 text-white px-10 py-1 rounded-lg block mx-auto my-6" @click="prevCalendar">PREV</button>
        <FullCalendar ref="refFullCalendar" v-bind:options="calendarOptions" />
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

const refFullCalendar = ref()

const calendarOptions = ref({
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin, rrulePlugin ],
    locale: 'es',
    initialView: 'timeGridWeek',
    headerToolbar: {
        right: 'title',
        center: 'prev next today',
        left: 'timeGridWeek timeGridDay listWeek dayGridWeek dayGridMonth'
    },
    hiddenDays: [1],
    dayHeaderFormat: {
        weekday: 'long',
        omitCommas: true,
        month: 'numeric'
    },
    slotDuration: '00:20:00',
    slotLabelFormat: [
        {
            hour: '2-digit',
            minute: 'numeric'
        },
        {
            weekday: 'long'
        }
    ],
    slotMinTime: '00:00:00',
    slotMaxTime: '14:00:00',
    scrollTime: '10:00:00',
    scrollToTime: '10:00',
    firstDay: 4,
    showNonCurrentDates: true,
    validRange: {
        start: '2023-09-01',
        end: '2023-11-01'
    },
    events: [
        {
            id: 12,
            title: 'Felipe Barrera',
            start: '2023-10-02T14:00:00',
        },
        {
            title: 'Birthday Party',
            start: '2023-10-03T07:00:00',
            backgroundColor: 'green',
            borderColor: 'green',
        }
    ],
    defaultAllDay: true,
    navLinks: true,
    weekNumbers: true,
    droppable: true,
    editable: true,
    eventDragMinDistance: 1,
    // navLinkDayClick: function(date, jsEvent) {
    //     console.log('day', date.toISOString());
    //     console.log('coords', jsEvent.pageX, jsEvent.pageY);
    // },
    eventDrop: function(info){
        console.log('Estos son los valores: ', info);
    }
})

function prevCalendar(){
    console.log('Valores de la referencia: ', refFullCalendar.value);
}

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