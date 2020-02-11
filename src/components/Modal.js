import React, { Component } from 'react';




class Modal extends Component {
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
      

     
      
      
      if(error){
          return <div>Error in loading</div>
      }else if (!isLoaded) {
          return <div>Loading ...</div>
      }else{

          return(
            
                <div className={this.state.active ? 'modal show': 'modal hide'}>
                  <div className="modal__container" >
                  <img src={this.props.data.logo}  alt=""/>
                  <h4>{this.props.data.content}</h4>
                  <button>Watch Now</button>
                  </div>
                  <div className={this.state.active ? 'backdrop show': 'backdrop hide'}></div>
                </div>
                
          
          );



      }

  }
}

export default Modal;