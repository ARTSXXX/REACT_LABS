import { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Products({ product }) {
    const [products, setProducts] = useState(product);
    const [sortPrice, setSortPrice] = useState("");
    const [sortSale, setSortSale] = useState("");
    const [research, setResearch] = useState("")

    const handleChangeSort = (e) => {
        setSortSale("Сортировка по cидке")

        if (e.target.value === "in") {

            setSortPrice(e.target.value)
            const result = "price";
            setProducts([...product].sort((a, b) => a[result] - b[result]))

        }
        else {

            setSortPrice(e.target.value)
            const result = "price";
            setProducts([...product].sort((a, b) => b[result] - a[result]))
        }

    }
    const handleChangeSortSale = (e) => {
        setSortPrice("Сортировка по ценам")

        if (e.target.value === "in") {

            setSortSale(e.target.value)
            const result = "sale";
            setProducts([...product].sort((a, b) => a[result] - b[result]))
        }
        else {

            setSortSale(e.target.value)
            const result = "sale";
            setProducts([...product].sort((a, b) => b[result] - a[result]))
        }

    }
    return (

        <div>
            <div className="wrapper">
                <input type="text"
                    value={research}
                    onChange={(e) => setResearch(e.target.value)}
                    placeholder="Поиск..." />
                <div className="block">
                    <select value={sortPrice} onChange={handleChangeSort}>
                        <option>Сортировка по ценам</option>
                        <option value="in">По возростанию</option>
                        <option value="des">По убыванию</option>
                    </select>
                    <select value={sortSale} onChange={handleChangeSortSale}>
                        <option>Сортировка по скидке</option>
                        <option value="in">По возростанию</option>
                        <option value="des">По убыванию</option>
                    </select>
                </div>
                <div className="blocks__products">
                    {
                        products.filter((item) => {
                            if (research === "")
                                return item;
                            else if (item.title.toLowerCase().includes(research.toLowerCase())) {
                                return item
                            }
                        })
                            .map((item, index) => {

                                const { id, title, description, sale, price, img } = item
                                return (<div className='product' key={index}>
                                    <div className="img">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>  Title: {title}</h1>
                                        <p className="description">
                                            Description:    {description}
                                        </p>
                                        <h1 className="price">
                                            Price:      {price}$
                                        </h1>
                                        <p className="sale">
                                            Sale:    {sale}%
                                        </p>
                                    </div>
                                </div>
                                )
                            })}

                </div>
            </div>

        </div>
    );
}
Products.propTypes = {
    product: PropTypes.array
}
export default Products;

