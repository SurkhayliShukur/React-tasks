import Button from "./components/Button";

function App() {


  return (
    <>
      <div >
        <Button label="Save" onClick={() => alert("Save clicked")} />
        <Button label="Cancel" onClick={() => alert("Cancel clicked")} />
      </div>
    </>
  )
}

export default App
