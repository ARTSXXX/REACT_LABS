import { useState } from "react";
import "./Number.css";
const TableInfo = [
    { id: 1, name: "butter", price: 8, stock: 30 },
    { id: 2, name: "milk", price: 7, stock: 20 },
    { id: 3, name: "cheese", price: 6, stock: 10 },
    { id: 4, name: "yoghurt", price: 5, stock: 35 },
    { id: 5, name: "cereals", price: 15, stock: 40 },
    { id: 6, name: "bread", price: 3, stock: 35 }

];
function Table() {
    const [date, setDate] = useState(TableInfo);

    const [Ord, setOrd] = useState("ABC"); // Сортировка по возрастанию
    const sorting = (el) => {

        if (el === "price") { // В первом условие Что?
            if (Ord === "ABC") { // Во Втором условии по возрастанию или убыванию

                const sorted = [...date].sort((a, b) => a[el] - b[el]); // Создаем копию в которой с помощью метода sort сортируем по возрастанию
                setDate(sorted);

                setOrd("BCD");
            } // Изменение состояния для убывания (Название)

            else {
                const sorted = [...date].sort((a, b) => b[el] - a[el]); // Для убывания

                setDate(sorted);

                setOrd("ABC");
            }
        }
        if (Ord === "ABC") {
            const sorted = [...date].sort((a, b) => a[el].toLowerCase() > b[el].toLowerCase() ? 1 : -1) // Если 1 нужна перестнаовка если -1 не нужна
            setDate(sorted);

            setOrd("BCD")
        }

        if (Ord === "BCD") {

            const sorted = [...date].sort((a, b) =>

                a[el].toLowerCase() < b[el].toLowerCase() ? 1 : -1
            );

            setDate(sorted);

            setOrd("ABC");
        }
    }
    return (
        <div>
            <table>
                <tr>
                    <th onClick={() => sorting("name")}>Name</th>

                    <th onClick={() => sorting("price")}>Price</th>
                    <th onClick={() => sorting("stock")}>In Stock</th>

                </tr>
                {date.map((index) => {

                    return (
                        <tr key={index.id}>

                            <td>{index.name}</td>

                            <td>{index.price}</td>

                            <td>{index.stock}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
export default Table;