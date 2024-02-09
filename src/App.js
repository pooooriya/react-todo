import { Layout } from "./components/Layout";
import Todo from "./components/Todo";

function App() {
  return (
    <Layout>
      <div className="flex justify-center items-center py-3">
        <Todo />
      </div>
    </Layout>
  );
}

export default App;
