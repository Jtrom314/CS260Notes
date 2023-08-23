<template>
  <div class="calendar-width bg-base rounded-md px-4 pt-2 pb-4" v-if="calendarLoaded" ref="calendar">
    <div class="grid grid-cols-7">
        <div class="flex justify-center col-span-7">
          <p class="text-lg font-bold text-primary px-4">{{currentMonth.name}}</p>
        </div>
    <p v-for="dayName in dayNames" :key="dayName" class="flex justify-center font-bold text-primary">{{dayName}}</p>
    <AttendanceCalendarDate
      v-for="day in monthInfo[currentMonth.year][currentMonth.name]"
      :day="day"

    />
  </div>
 </div>
</template>
