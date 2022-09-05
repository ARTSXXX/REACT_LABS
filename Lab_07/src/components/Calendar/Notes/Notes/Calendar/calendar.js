const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5]; // 0 понедельник 6 - суббота

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    Novermber: 10,
    December: 11
};

export function areEqual(a, b) { // Функция которая примет два объекта даты
    if (!a || !b) return false; // Если даты равны

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function isLeapYear(year) { // // Проверка на високосный год (СтекОверлоу)
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date) { // Проверерка на дней в месяце
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];
    
    if (isLeapYear(year) && month === Month.February) {   // Проверка на февраь
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

export function getDayOfWeek(date) { // Проверка на дней в недели
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(year, month) {
    const result = []; // Возвращать будем массив месяцов
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) { //(daysInMonth + monthStartsOn) / DAYS_IN_WEEK - определяем кол-во недель в месяце
        result[i] = [];
        
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth) { // ВЫполнямем условию когда у нас стоят дни в начале или конце месяца прошлого/ будущего (32 следующий 0 предыдущий)
                result[i][j] = undefined;
            } else {
                result[i][j] = new Date(year, month, day++); // Получаем дни по месяцу, дефолт 1    
            }
        }
    }

    return result;
}