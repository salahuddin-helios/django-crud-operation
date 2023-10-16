import './App.css';
import React from 'react'
import {RouterProvider} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import router from './Route/Route';
import { ErrorBoundary } from 'react-error-boundary'
const falbackError = ({error,resetErrorBoundary})=>{
  return(
    <div>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
function App() {

  return (
    <div>
      <ErrorBoundary FallbackComponent={
        falbackError}
        onReset={() => {
          // reset the state of your app here
        }}
        resetKeys={['someKey']}
        >
      <RouterProvider router={router}>
    
      </RouterProvider>
      <Toaster />
      </ErrorBoundary>
    </div>

   
  );
}

export default App;
