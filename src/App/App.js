import './App.css'
import Header from '../Header/Header';
import React from 'react'
import SearchBox from '../SearchBox/SearchBox';
import ResultContainer from '../ResultContainer/ResultContainer';


const name=require('@rstacruz/startup-name-generator');
class App extends React.Component{
  constructor(){
    super();
    this.state={
      webname:"'Find Name'",
      headerExpanded: true,
      suggestedNames:[],
    }
  }
  
  handleInputChange=(inputData)=>{
    console.log(inputData)
    this.setState({
      headerExpanded: !inputData,
      suggestedNames:inputData? name(inputData):[]
    })
    }

  render()
  {
  return(
    <div>
      <Header webname={this.state.webname} headerExpanded={this.state.headerExpanded}/>
      <SearchBox onInputChange={this.handleInputChange} />
      <ResultContainer suggestedNames={this.state.suggestedNames}/>
    </div>

  )
};

}
export default App;
