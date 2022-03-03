import React, { useEffect } from 'react';
import './scss/app.scss';
import {Header} from './components'
import Home from './pages/Home';



import { useDispatch } from 'react-redux';
import {fetchPizzas, setPizzas} from './redux/actions/pizzas'
import axios from 'axios';
import Cart from './pages/Cart';
import { Routes, Route } from 'react-router-dom';

//import { func } from 'prop-types';

//------первый вариант 
// function App() {
//   let [pizzas, setPizzas] = useState([])
//   useEffect(() => {
    // fetch('http://localhost:3000/db.json')
    // .then(response => response.json())
    // .then(result => {
    //   setPizzas(result.pizzas);  
    // })

//     axios.get('http://localhost:3000/db.json').then(resp => setPizzas(resp.data.pizzas))
//   }, []);
  

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//           <Home items={pizzas}/>
//       </div>
//     </div>
//   );
// }

//-----второй вариант, переписывали с использованием редакса
//import { setPizzas as setPizzasAction } from './redux/actions/pizzas';
// class App extends React.Component {
 
//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({data}) => this.props.setPizzas(data.pizzas)) //тут setPizzas это action creator из стейта
  // }

//   render() {
//     console.log(this.props)
//     return (
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Home items={this.props.items}/>
//         </div>
//       </div>
//     )
//     }
// }
//коннект возвращает в пропсах состояние

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// } 

//возвращает данные из хранилища

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// } 

//нужно взять все диспатчи (экшены) и превратить их в функции в виде диспатчей. т.е не нужно будет писать в ахиос запросе this.props.dispatch(setPizzas(data.pizzas), а можно будет сделать this.props.setPizzas(data.pizzas). т.е. вызываем пропсы, a setPizzas он сам берет у себя диспатч и передает туда объект

// export default connect(mapStateToProps, mapDispatchToProps)(App); 

//объединяем редакс и реакт компоненту
//коннект сначала получает экшены и состояния и эпп подключается к хранилищу. если хранилище изменяется то эпп джс будет производить ререндер



//---------третий вариант. редакс с хуками

function App() {

  const dispatch = useDispatch();
  
  

  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
  )
}

export default App;