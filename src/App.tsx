import monkeyDance from './assets/images/avatars/monkeyD.svg'
import icon from './assets/images/infoCard/CreateCollectionIcon.svg'
function App() {
  return (
    <>
    <div className="bg-gradient2 p-8">
      <h1 className="textW">Hello, Tailwind CSS Color Test!</h1>
      <button className="bg-callAction textW px-4 py-2 mt-4">Call to Action</button>
    </div>
    <div className="bg-gradient1 p-8">
      <h1 className="textW">Hello, Tailwind CSS Color Test!</h1>
      <button className="bg-callAction textW px-4 py-2 mt-4">Call to Action</button>
    </div>
    <img src={monkeyDance} alt="" />
    <img src={icon} alt="" />


    </>
  )
}

export default App
