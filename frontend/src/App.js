import React, { createContext, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import MyFooter from './Components/MyFooter/MyFooter';
import MyNav from './Components/MyNav/MyNav';
import SignIn from './Components/SignIn/SignIn';
import Page404 from './Components/Page404/Page404';
import MyFeedBack from './Components/MyFeedBack/MyFeedBack';
import FeedBack from './Components/FeedBack/FeedBack';
import MyProgress from './Components/MyProgress/MyProgress';
import Progress from './Components/Progress/Progress';
import LostButton from './Components/LostButton/LostButton';
import TeacherMonitor from './Components/TeacherMonitor/TeacherMonitor';
import Randomizer from './Components/Randomizer/Randomizer';
import LearningProgram from './Components/LearningProgram/LearningProgram';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import { initialState, reducer } from './store/reducer';

export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <MyNav />
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Page404 />} />
          <Route path="myfeedback" element={<MyFeedBack />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="myprogress" element={<MyProgress />} />
          <Route path="progress" element={<Progress />} />
          <Route path="lostbutton" element={<LostButton />} />
          <Route path="teachermonitor" element={<TeacherMonitor />} />
          <Route path="randomizer" element={<Randomizer />} />
          <Route path="learningprogram" element={<LearningProgram />} />
        </Routes>
      </AuthContext.Provider>
      <MyFooter />
    </div>
  );
}

export default App;
