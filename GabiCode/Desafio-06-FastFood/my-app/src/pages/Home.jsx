import React, { Component } from "react"
import "../styles/Home.css"
import Logo from '../img/3697355.jpg';
import ImageHome from "../img/6233230.jpg"
import Minichef from "../img/Screenshot_1.png"
import { FaSearch, FaShoppingBasket, FaBars, FaTimes} from "react-icons/fa";

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      menuOn: true,
    }

  }

  toggle = () => {
      this.setState({
        menuOn: !this.state.menuOn,
      })
  }

  mostrar(set){
      if(set === true){
        return <FaBars/>
      }else{
        return <FaTimes/>
      }
  }

  render(){
    return (
  
      <div className="App">
          <section className="main">
            <div className="navbar">
              <div className='image'>
                <img src={Logo} alt="" />
                <h1>City</h1>
              </div>
  
              <div className="options">
                <div className="nav">
                  <a href="#home">Home</a>
                  <a href="#home">Menu</a>
                  <a href="#home">Services</a>
                  <a href="#home">Shop</a>
                
  
                  <div className="search">
                    <FaSearch className="icon" /> <input type="text" placeholder="Search" className="search"/>
                  </div>
                </div>
  
                <div className="menu-bars" id="menu-btn" onClick={
                  () => {
                    const nav = window.document.querySelector(".nav");
                    const home = window.document.querySelector(".home");
                    nav.classList.toggle("active");
                    home.classList.toggle("active");
                    this.toggle()
                  }
                }>{this.mostrar(this.state.menuOn)}</div>
  
                <div className="cesta"><FaShoppingBasket/></div>
              </div>  
            </div>

            <div className="home">
              <div className="esquerda">
                <a href="#">Bike Delivery</a>
                <h1>Fasted <span>Delivery</span> & Easy <span>Pickup</span>.</h1>
                <h2>Grocen atssures fresh grocery every morning to your family witch getting out in pandemic</h2>
                <div className="buttons">
                  <a href="#" className="primeiro">Order now</a>
                  <a href="#" className="segundo">Order process</a>
                </div>

                <div className="footer">
                  <div className="mini-chef">
                    <div className="image">
                      <img src={Minichef} alt="" />
                    </div>
                    <span>|</span>
                    <h2>When you are too lazy to cook, we are just a click away!</h2>
                  </div>
                  <div className="credit">
                    <h1>Created by <span>Victor Mesquita</span> | 2022</h1>
                  </div>
                </div>
              </div>

              <div className="direita">
                <div className="container">
                  <img src={ImageHome} alt="" />
                </div>
              </div>
            </div>
          </section>
      </div>
    );
  }
}

export default Home;