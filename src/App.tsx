import monkeyDance from './assets/images/avatars/monkeyD.svg'
import icon from './assets/images/infoCard/CreateCollectionIcon.svg'
import Button from './components/common/Button'
import Nav from './components/home/Nav'
function App() {
  return (
    <>
    <Nav/>
    <div className="bg-gradient2 p-8">
      <h1 className="textW">Hello, Tailwind CSS Color Test!</h1>
      <button className="bg-callAction textW px-4 py-2 mt-4">Call to Action</button>
    </div>
    <div className="bg-bg p-8">
      <h1 className="textW">Hello, Tailwind CSS Color Test!</h1>
      <button className="bg-callAction textW px-4 py-2 mt-4">Call to Action</button>
    </div>
    <div className="bg-gradient1 p-8">
      <h1 className="textW">Hello, Tailwind CSS Color Test!</h1>
      <button className="bg-callAction textW px-4 py-2 mt-4">Call to Action</button>
    </div>
    <img src={monkeyDance} alt="" />
    <img src={icon} alt="" />
    <div className='bg-black border-2'>
      <Button style="primary" onClick={() => console.log('clicked')}>
        Click me 
      </Button>
      <Button style="nofillPrimary" onClick={() => console.log('clicked')}>
        Click me 
      </Button>
      <Button style="secondary" onClick={() => console.log('clicked')}>
        Click me 
      </Button>
      <Button style="nofillSecondary" onClick={() => console.log('clicked')}>
        Click me 
      </Button>
      <Button style="tertiary" onClick={() => console.log('clicked')}>
        Click me 
      </Button>
      <Button style="nofillTertiary" onClick={() => console.log('clicked')}>
        Click me 
      </Button>
      
    </div>
    

    </>
  )
}

export default App
