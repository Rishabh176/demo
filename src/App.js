import React from 'react';
import Form from './components/Form'

const App = () => {

  const addToCartAPI = () => {
    console.log("API is called");
  }

  return (
    <React.Fragment>
      <div>
        Hello
      </div>
      <Form addToCartAPI={addToCartAPI} />
    </React.Fragment>
    

  )
}

export default App;