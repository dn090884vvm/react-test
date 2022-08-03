import { Counter } from './Counter/Counter';
import { Counter1 } from './Counter/Counter1';
import { CounterWithMethod } from './Counter/CounterWithMethod';
import { Toggle } from './Switcher/Switcher';
import { App1 } from './UpState/UpState';
import { LoginForm } from './Form/Form1Uncontrolled';
import { SignUpForm } from './Form/FormComplicated';
import { SignUpFormExtended } from './Form/FormComplicatedExtended';
import Axios from './Axios/Axios';

export const App = () => {
  return (
    <>
      {/* <Counter step={6} /> */}
      {/* <Counter1 step={3} /> */}
      {/* <CounterWithMethod step={4} /> */}
      {/* <Toggle children={['Hello', ' new']} /> */}
      {/* <App1 /> */}
      {/* <LoginForm onSubmit={values => console.log('ITS', values)} /> */}
      {/* <SignUpForm onSubmit={values => console.log(values)} /> */}
      {/* <SignUpForm onSubmit={values => values} /> */}
      {/* <SignUpFormExtended onSubmit={values => console.log(values)} /> */}
      <Axios />
    </>
  );
};
