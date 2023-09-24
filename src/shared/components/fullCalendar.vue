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

const id = ref(1)

const calendarOptions = ref({
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin ],
    initialView: 'dayGridMonth',
    headerToolbar: {
        center: 'title',
        left: 'prev,next today',
        right: 'dayGridMonth, dayGridYear, listDay'
    },
    editable: true,
    selectable: true,
    weekends: true,
    events: [
        { // this object will be "parsed" into an Event Object
            id: 12,
            groupId: 32,
            title: 'The Title', // a property!
            start: '2023-09-15', // a property!
            end: '2023-09-16',
            backgroundColor: 'red',
            allDay: true,
            daysOfWeek: [ 0 ]
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
})

</script>