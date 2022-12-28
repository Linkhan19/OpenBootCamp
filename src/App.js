import TaskListComponent from "./Components/Container/task.list";
import CompoA from "./Components/cA";

function App() {

  return (
    <div className="App">
      <div className='grid place-items-center text-center'>
        <div className="">
          <TaskListComponent/>
        </div>
        <div className="pt-6">
          <div className="box-border border-solid border-black border-2 m-6 p-6 rounded-lg">
            <CompoA/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
