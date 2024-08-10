import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Employees from "./Employees";

export default function App() {
  return (
    <div>
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}
