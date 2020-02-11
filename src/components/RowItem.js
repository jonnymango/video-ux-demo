import React, { Component } from 'react';


class RowItem extends Component {
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
      //console.log(this.props.data.image)
      const backgroundStyle = {
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0,0,0,0.32) 100%),url(${this.props.data.heroImage})`,
        backgroundPosition: "center",
    

     
      }
    
     





      
      
      if(error){
          return <div>Error in loading</div>
      }else if (!isLoaded) {
          return <div>Loading ...</div>
      }else{

          return(
            <>
            <div className="row__container--item" onClick={this.toggleClass} >
                <img alt="" src={this.props.data.image} className="row__container--item-image" />  
            </div>
            <div className={this.state.active ? 'modal show': 'modal hide'} onClick={this.toggleClass}>
                  <div className="modal__container" >
                  <img className="modal__logo animated fadeInDown" src={this.props.data.logo}  alt=""/>
                  <p className="modal__info animated fadeInDown">{this.props.data.content}</p>
                  <button className="modal__btn animated fadeInDown">Watch Now</button>
                  </div>
                </div>
                <div className={this.state.active ? 'backdrop show': 'backdrop hide'} style={backgroundStyle}></div> 
            </>
          );



      }

  }
}

export default RowItem;