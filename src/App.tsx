import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./view/login/login";
import { Todo } from "./view/todo/app";
import "./App.css";
import { Home } from "./view/home/app";
import { Calendar } from "./view/calendar/app";
import Week from "./view/week/week";
import { Suggestion } from "./view/suggestions/suggestion";
import { AddTask } from "./view/addtask/app";
import { Profile } from "./view/profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route
          path="/login"
          element={
            <Login email={""} password={""} isLoading={false} error={null} />
          }
        />
      </Routes>
      <Routes>
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <Routes>
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Routes>
        <Route path="/week" element={<Week day="" number={0} />} />
      </Routes>
      <Routes>
        <Route
          path="/suggestion"
          element={
            <Suggestion
              icon={undefined}
              category={undefined}
              description={undefined}
              subcategories={undefined}
            />
          }
        />
      </Routes>
      <Routes>
        <Route path="/addtask" element={<AddTask />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
