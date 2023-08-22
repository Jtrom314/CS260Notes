define([
  'app/plugins/moment/plugin',
  'core/timezone'
  ], function (
  moment,
  Timezone
  ) {
    return {
      props: {
        highlightedDays: {
          type: Array,
          required: true
        }
      },
      data: function () {
        return {
          currentPeriodBegin: moment.tz(window.global_firstDayOfPeriod, Timezone.getActiveTZ()),
  				currentPeriodEnd: moment.tz(window.global_lastDayOfPeriod, Timezone.getActiveTZ()),
  				currentTime: moment(),
  				dayNames: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
  				monthInfo: {},
  				selectedMonth: {
  					name: moment().format('MMMM'),
  					year: moment().year()
  				},
  				selectedYear: moment().year(),
  				calendarLoaded: false,
  				currentMonth: null,
        }
      },
      computed: {
        months: function () {
  				let months = [];
  				let startMonth;
  				let endMonth;
  
  				startMonth = this.currentPeriodBegin.month();
  				endMonth = this.currentPeriodEnd.month();
  
  				let workingMonth = this.currentPeriodBegin.clone();
  				for (; startMonth <= endMonth; startMonth++ ) {
  					months.push({
  						name: workingMonth.format('MMMM'),
  						year: workingMonth.year()
  					});
  					workingMonth.add(1, 'month');
  				}
  				return months;
  			},
        highligthedDayMap: function () {
          let map = {};
          if ( this.highlightedDays === null ) {
            return null;
          }
          this.highlightedDays.forEach( currentDay => {
            let date = moment( currentDay, "YYYY-MM-DD" );
            let dateMonth = date.format('MMMM');
            let dateYear = date.year();
            if ( !map[dateYear] ) {
              map[dateYear] = {};
            }
            if ( !map[dateYear][dateMonth] ) {
              map[dateYear][dateMonth] = {};
            }
            map[dateYear][dateMonth][date.date()] = date;
          });
          return map;
        }
      },
      methods: {
        createMonthInfo: function () {
          let monthsToCreate = [];
          this.months.forEach(month => {
            this.months.forEach(month => {
  					if (!this.monthInfo[month.year]) {
  						this.monthInfo[month.year] = {};
  					}
  					if (!this.monthInfo[month.year][month.name] && !monthsToCreate.includes( month ) ) {
  						monthsToCreate.push(month);
  					}
  				});

          monthsToCreate.forEach(month => {
            let monthDays = [];
            const currentMonth = moment().tz( Timezone.getActiveTZ() ).year( month.year ).month( month.name ).startOf( 'month' );
  					const previousYear = month.name === 'January' ? month.year - 1 : month.year;
  					const previousMonth = moment().month( month.name ).subtract( 1, "month" ).format('MMMM');
  					const lastMonth = moment().tz( Timezone.getActiveTZ() ).year( previousYear ).month( previousMonth ).startOf( 'month' );
  					const daysInLastMonth = lastMonth.daysInMonth();

            let dayToStart = daysInLastMonth - currentMonth.day() + 1;
            for (i = 0; i < currentMonth.day(); i++) {
              let isHighlightedDay;
              if ( this.highlightedDayMap[previousYear] && this.highlightedDayMap[previousYear][previousMonth] ) {
                isHighlightedDay = ( this.highlightedDayMap[previousYear][previousMonth][dayToStart] != undefined );
              }
              monthDays.push({
                date: dayToStart,
                isHighlightedDay: isHighlightedDay
              });
              dayToStart++;
            }
            
					for ( let day = 1; day <= currentMonth.daysInMonth(); day++ ) {
						let isClassDay;
						if ( this.classDaysMap[month.year] && this.classDaysMap[month.year][month.name] ) {
							isClassDay = ( this.classDaysMap[month.year][month.name][day] != undefined );
						}

						const dateToPass = moment( `${month.name} ${day}, ${month.year}` ).format("YYYY-MM-DD");
						monthDays.push( {
							date: day,
							dateToPass: dateToPass,
							isClassDay: isClassDay,
						});
					}

					const nextYear = month.name === 'December' ? month.year + 1 : month.year;
					const nextMonth = moment().month( month.name ).add( 1, 'month' ).format('MMMM');
					let daysToAdd = 1;

					for ( i = currentMonth.endOf( 'month' ).day(); i < 6; i++ ) {
						//need to get the beginning of the next month
						let isClassDay;
						if ( this.classDaysMap[nextYear] && this.classDaysMap[nextYear][nextMonth] ) {
							isClassDay = ( this.classDaysMap[nextYear][nextMonth][daysToAdd] != undefined )
						}

						const dateToPass = moment( `${nextMonth} ${daysToAdd}, ${nextYear}` ).format("YYYY-MM-DD");
						monthDays.push({
							date: daysToAdd,
							dateToPass: dateToPass,
							isClassDay: isClassDay
						});

						daysToAdd++;
					}

					this.monthInfo[month.year][month.name] = monthDays;
				});
          }}},
      watch: {
        'highlightedDays': {
          handler: function () {
            this.createMonthInfo();
          },
          deep: true,
          immediate: true
      }
                              
                              
    }
}
