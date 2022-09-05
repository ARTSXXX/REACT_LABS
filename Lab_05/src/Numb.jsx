import { Component } from "react";



export default class Numb extends Component {
    constructor(props) { // Инициализация внутреннего состояния через присвоение объекта this.state.
        super(props); // Вызывает реакт. компонент
        this.state = {
            number: "",
            value: "",
            img: "",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        };
    }


    inputs = [
        {
            value: "Беларусь",
            code: "+375",
            img: "https://img5.goodfon.ru/original/1920x1408/8/f1/belarus-belar..",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Украина",
            code: "+380",
            img: "https://pbs.twimg.com/media/D54wHWcW0AYRv9g.jpg:large",
            mask: "XXXX (XX) XXX-XX-XX",
            count: 13,
        },
        {
            value: "Россия",
            code: "+7",
            img: "https://yulianovozhilova.ru/wp/wp-content/uploads/2019/05/фла..",
            mask: "XX (XXX) XXX-XX-XX",
            count: 12,
        },
    ];

    HandleNumberChange = (e) => {
        this.setState(
            {
                number: e.target.value,
            },
            () => {
                this.inputs.map((item) => {
                    if (this.state.number === item.code)
                        this.setState({
                            value: item.value,
                            img: item.img,
                            mask: item.mask,
                            count: item.count,
                        });
                });
                if (this.state.count === this.state.number.length) {
                    let maskA = this.state.mask.split(""); // Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой
                    let numberA = this.state.number.split("");
                    for (let i = 0, j = 0; i < maskA.length; i++)
                        if (maskA[i] === "X") {
                            maskA[i] = numberA[j];
                            j++;
                        }
                    this.setState({ number: maskA.join("") }); // метод join() позволяет преобразовать и объединить все элементы массива в одно строковое значение
                }
            }
        );
    };
    render() {
        return (
            <>
                <label>
                    <img
                        src={this.state.img}
                        style={{
                            height: "15px",
                            width: "30px",
                        }}
                    />
                    <input
                        placeholder="+375XXXXXXXX"
                        value={this.state.number}
                        onChange={this.HandleNumberChange}
                        maxLength={this.state.count}
                    />
                    <div>
                        <h2>Phone no:</h2>
                        <span >

                            {this.state.number}
                        </span> </div>
                </label>
                {
                    this.state.value ===
                    "Беларусь" && (
                        <div>
                            <input type="radio" name="1" />
                            МТС
                            <input type="radio" name="1" />
                            A1
                            <input type="radio" name="1" />
                            LIFE
                        </div>
                    )
                }
                {this.state.value === "Украина" && (
                    <div>
                        <input type="radio" name="1" />
                        Lifecell
                        <input type="radio" name="1" />
                        Vodafone
                        <input type="radio" name="1" />
                        Київстар
                    </div>
                )}
                {this.state.value === "Россия" && (
                    <div>
                        <input type="radio" name="1" />
                        Билайн
                        <input type="radio" name="1" />
                        Мегафон
                        <input type="radio" name="1" />
                        LIFE
                    </div>
                )}
            </>
        );
    }
}