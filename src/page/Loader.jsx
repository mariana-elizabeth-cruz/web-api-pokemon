import { zoomies } from 'ldrs'

zoomies.register()
const Loader = () => {
  return (
    // Default values shown
    <div className="containerLoader">
      <l-zoomies
        size="80"
        stroke="5"
        bg-opacity="0.1"
        speed="1.4"
        color="black"
      ></l-zoomies>
    </div>

  )
}

export default Loader