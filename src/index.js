import React from 'react'
import ReactDOM from 'react-dom'
import CardImage from './CardImage'
import registerServiceWorker from './registerServiceWorker'

// const src = 'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg'
const src = 'http://img5.mtime.cn/mg/2017/09/18/174206.77324760.jpg'

const App = () => {
  return (
    <div style={{display: 'flex'}}>
      <CardImage animation='rotate' src={src} width={200} shadow title='Title' description='Jay Chou Music' style={{margin: '10px', borderRadius: '4px', padding: '10px'}} />
      <CardImage  src={src} title='Mtime article' description='this is an article from Mtime' shadow style={{margin: '10px'}} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
