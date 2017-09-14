import React from 'react'
import ReactDOM from 'react-dom'
import CardImage from './CardImage'
import registerServiceWorker from './registerServiceWorker'

const src = 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg'

const App = () => {
  return (
    <CardImage animation='rotate' src={src} width={200} shadow title='Bedtime Stories' description='Jay Chou Music Jay Chou Music' />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
