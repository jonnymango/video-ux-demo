import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
      super(props);
      this.state = {
          error : null,
          isLoaded : false,
          active: false
      };
      this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass() {
    const currentState = this.state.active;
    console.log(currentState)
    this.setState({ active: !currentState });
  };
  componentDidMount(){

    this.setState({
        isLoaded : true,

    });
  }
  render() {
      const {error, isLoaded} = this.state;
      console.log(this.props)
      const backgroundStyle = {
        background: `url(${this.props.vars.heroImage}) no-repeat center center`,
        backgroundSize: "cover"
      }
      
      if(error){
          return <div>Error in loading</div>
      }else if (!isLoaded) {
          return <div>Loading ...</div>
      }else{

          return(
            <div className={this.state.active ? 'header header--open': 'header header--closed'} id="headerWrapper" style={backgroundStyle}  onClick={this.toggleClass}>
               <img className={this.state.active ? 'header__logo header__logo--hidden': 'header__logo header__logo--visible'} src={this.props.vars.logo}  alt=""/> 
               <div className={this.state.active ? 'header__content header__content--open': 'header__content header__content--hidden'}>
               <img className="header__content__logo animated fadeInDown" src={this.props.vars.logo}  alt=""/>
               <p className="header__content__info animated fadeInDown">{this.props.vars.content}</p>
               <button className="header__content__btn animated fadeInDown">Watch Now</button>
               </div>
            </div>
          );



      }

  }
}

export default Header;