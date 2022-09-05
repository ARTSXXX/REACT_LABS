import React from 'react';
import classnames from 'classnames'; // Подключения для подсвечивания даты

import * as calendar from './calendar'; // Импортирует все из календаря

import './index.css';

export default class Calendar extends React.Component {
    static defaultProps = { // Пропсы со значениями дат, а также пустая функция
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        onChange: Function.prototype // Функция которая ничего не делает(если клиент не передаст onchange)
    };

    state = { // Состояние текущей даты, нал так как дефолтная не выбранная дата
        date: this.props.date, 
        currentDate: new Date(), //Текущая дата
        selectedDate: null // Выбранная дата  
    };
    // Создание геттеров
    get year() {
        return this.state.date.getFullYear(); // Динамическое состояние для года
    }

    get month() {
        return this.state.date.getMonth(); // Динамеческое состояние для месяца
    }

    get day() {
        return this.state.date.getDate(); // Динамическое состояние для дня
    }

    handlePrevMonthButtonClick = () => { // Методы для обработки кнопок прошлого месяца
        const date = new Date(this.year, this.month - 1);

        this.setState({ date }); // Состояния отправки даты
    };

    handleNextMonthButtonClick = () => {  // Методы для обработки кнопок прошлого месяца
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleSelectChange = () => { // Метод для обработки календаря
        const year = this.yearSelect.value;
        const month = this.monthSelect.value;

        const date = new Date(year, month);

        this.setState({ date });
    };

    handleDayClick = date => { // Обработчик который будет срабатывать при нажатии на день календаря
        this.setState({ selectedDate: date });

        this.props.onChange(date); // Функция онченж которая Событие change происходит по окончании изменения значения элемента формы, когда это изменение зафиксировано.
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendar.getMonthData(this.year, this.month);

        return (
            <div className="calendar">
                <header>
                    <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

                    <select
                        ref={element => this.monthSelect = element}
                        value={this.month}
                        onChange={this.handleSelectChange}
                    >
                        {monthNames.map((name, index) =>
                            <option key={name} value={index}>{name}</option>
                        )}
                    </select>

                    <select
                        ref={element => this.yearSelect = element} // refs используются для получения ссылки на узел DOM , или получает ссылку на элемент
                        value={this.year}
                        onChange={this.handleSelectChange}
                    >
                        {years.map(year =>
                            <option key={year} value={year}>{year}</option>
                        )}
                    </select>

                    <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>
                </header>

                <table>
                    <thead>
                        <tr>
                            {weekDayNames.map(name =>
                                <th key={name}>{name}</th>
                            )}
                        </tr>
                    </thead>

                    <tbody>
                        {monthData.map((week, index) =>
                            <tr key={index} className="week">
                                {week.map((date, index) => date ? // Заполнение 
                                    <td
                                        key={index}
                                        className={classnames('day', {
                                            'today': calendar.areEqual(date, currentDate),
                                            'selected': calendar.areEqual(date, selectedDate)
                                        })}
                                        onClick={() => this.handleDayClick(date)} // сработает при клики на день
                                    >{date.getDate()}</td>
                                    :
                                    <td key={index} />
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}