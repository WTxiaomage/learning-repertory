import React, { Component } from 'react'

// function Child(props) {
//   console.log(props);
//   return (
//     <>
//       <button onClick={props.onClick}>改标题</button>
//       <h1>{props.name}</h1>
//     </>
//   );
// }

// function areEqual(prevprops, nextprops) {
//   console.log('🚀🚀🚀wimi======>>>', prevprops, nextprops)

//   if (prevprops === nextprops) {
//     return true
//   }
// }

class Child6 extends Component {
  componentWillMount() {
    console.log('🚀🚀🚀wimi======>>>Child6  componentWillMount')
  }

  componentDidMount() {
    console.log('🚀🚀🚀wimi======>>>Child6  componentDidMount')
  }

  

  render() {
    return <div>{this.props.name}</div>
  }
}

export default Child6
