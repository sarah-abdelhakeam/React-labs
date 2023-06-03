import logo from './logo.svg';
import './App.css';
// import Hello from './component/functions';
// import Greating from './component/class1'
// import PropsEx from './component/lab2/functionalProps';
// import Props2 from './component/lab2/classProps'
// import States from './component/lab2/states';
// import CounterInc from './component/lab2/increasingButton'
// import ProductsList from './component/lab3/Products'
// import products from './component/lab3/ProductData'
// import Registeration from './component/lab3/registeration'
// import Login from './component/lab3/login';
// import APIex from './component/lab3/APIex';
// import PostEx from './component/lab3/postEx';
// import Comp5 from './component/lab3/Comp5';
// import ContextEx from './component/lab3/ContextEx';
import HooksProducts from './HooksComp/HooksProducts'
import HooksCards from './HooksComp/HooksCards'
import GetApiHooks from './HooksComp/GetApiHooks'
import SearchProduct from './HooksComp/SearchProduct';
import LogInHooks from './HooksComp/LogInHooks';
import RegisterHooks from './HooksComp/RegisterHooks';
import Component1 from './HooksComp/CompUseContext'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
        {/* <Greating></Greating> */}
        {/* <Hello/> */}

      {/* <Props2 couese1='java' couese2="c programming"/> */}
        
        {/* <PropsEx fname='sarah' lname="hakeam" age='25' job_title="software Engineer "/> */}
      
      {/* <States /> */}
{/* <CounterInc/> */}
{/* <ProductsList/> */}
{/* <Registeration/> */}

{/* <Login/> */}
{/* <APIex/> */}
{/* <PostEx/> */}
{/* <Comp5/> */}
{/* <ContextEx/> */}

{/*     --------------------     HOOKS   -----------------------     */}
{/* <HooksProducts/> */}
{/* <HooksCards/> */}
{/* <GetApiHooks/> */}

{/* <SearchProduct/> */}

{/* <LogInHooks/> */}
{/* <RegisterHooks/> */}
{/* <Component5/> */}
<Component1/>



      </header>

    </div>
  );
}

export default App;
