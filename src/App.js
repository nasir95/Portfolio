import './App.css';
import SideBar from './component/SideBar';
import Home from './pages/home';
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles({
  container: {
    display: "flex"
  }
})

function App() {
  const classes = useStyles();
  return (
   <div className={classes.container}>
   <SideBar />
   <h1>Hello</h1>
   </div>
   )}

export default App;
