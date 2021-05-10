

export default {

    methods: {

        s_contDaysByDate (date) {
            const oneDay = 24 * 60 * 60 * 1000;
            const diffDays = Math.round(Math.abs((new Date(date) - new Date()) / oneDay));
            if ( diffDays <= 0 ) {
                return 'today';
            } else if ( diffDays === 1 ) {
                return '1 day ago';
            }
            return JSON.stringify(diffDays) + ' days ago';
        },

        s_formatDate (date) {
            const newDate = new Date(date);
            const day = '' + newDate.getDate();
            const month = '' + this.s_getMonth( newDate.getMonth() + 1 );
            const year = '' + newDate.getFullYear();
            return month + ' ' + day + ',' + year;
        },

        s_getMonth (monthNumber) {
            switch (monthNumber) {
                case 1 : return 'Jan';
                case 2 : return 'Feb';
                case 3 : return 'Mar';
                case 4 : return 'Apr';
                case 5 : return 'May';
                case 6 : return 'Jun';
                case 7 : return 'Jul';
                case 8 : return 'Ago';
                case 9 : return 'Set';
                case 10 : return 'Oct';
                case 11 : return 'Nov';
                case 12 : return 'Dez';
            }
        }

    }

}

// const dateFormater = {};

// dateFormater.install = function (Vue) {

//    Vue.prototype.$format = (date) => {
//      return new Date(date);
//    }
   
// }

// export default class DataFormater {

//     format(date) {
//         return new Date(date);
//     }

// }
