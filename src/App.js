import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Details from "./components/Details";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dataji, setDataji] = useState([]);

  const addData = () => {
    setDataji([...dataji, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className="data">
        <div className="entry">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {dataji.map((element, index) => {
          return (
            <Details
              key={index}
              name={element.name}
              email={element.email}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
