import INDIA from './INDIA';
import './Phone.css'
const Phone = () =>{
  return (
    <div className="App">
     

<table>

<th><div className='country'>Страна:</div>
    <tr>Беларусь</tr>
    <tr>Россия</tr>
    <tr>Украина</tr>
    <tr>Польша</tr>
    <tr>Литва</tr>
    <tr>Лавтвия</tr>
</th>

<th ><div className='country'>Формат номера телефона:</div>
<INDIA/>
</th>

<th><div className='country'>Оператор:</div>
<tr>
<div>   
        <form>  
          
          <input type="radio"  name='operator' /> МТС 
          <input type="radio"  name='operator'  /> A1 
          <input type="radio"   name='operator'  /> life 
        </form>  
      </div>   </tr>

<tr><div>       
        <form>  
          
          <input type="radio"  name='operator' /> Билайн 
          <input type="radio"  name='operator'  /> Мегафон 
          <input type="radio"   name='operator'  /> Tele2 
        </form>  
      </div> </tr>
<tr><div>   
        <form>  
          
          <input type="radio"  name='operator' /> Lifecell 
          <input type="radio"  name='operator'  /> Vodafone 
          <input type="radio"   name='operator'  /> Київстар 
        </form>  
      </div> </tr>
    
      <tr><div>   
        <form>  
          
          <input type="radio"  name='operator' /> Orange 
          <input type="radio"  name='operator'  /> Play 
          <input type="radio"   name='operator'  /> Plus 
        </form>  
      </div> </tr>
      
      <tr><div>   
        <form>  
          
          <input type="radio"  name='operator' /> Telia 
          <input type="radio"  name='operator'  /> Bite 
          <input type="radio"   name='operator'  /> Tele2 
        </form>  
      </div> </tr>
      <tr><div>   
        <form>  
          
          <input type="radio"  name='operator' /> LMT 
          <input type="radio"  name='operator'  /> Tele2 
          <input type="radio"   name='operator'  /> Bite 
        </form>  
      </div> </tr>
</th>
  
    
</table>
    </div>
  );
}

export default Phone;
