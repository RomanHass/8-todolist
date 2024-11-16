import { userReducer } from "./user-reducer";

test("user reducer should increment only age", () => {

  // state
  const startState = { age: 20, childrenCount: 2, name: 'Roman' };

    // action
  const endState = userReducer(startState, { type: 'INCREMENT-AGE' })

  // expect
  expect(endState.age).toBe(21);
  expect(endState.childrenCount).toBe(2);
  
}); 


test("user reducer should increment only childrenCount", () => {
  const startState = { age: 20, childrenCount: 2, name: 'Roman' };

  const endState = userReducer(startState, { type: 'INCREMENT-CHILDREN-COUNT' });

  expect(endState.childrenCount).toBe(3);
  expect(endState.age).toBe(20);

});

test("user reducer should change name of user", () => {
  const startState = { age: 20, childrenCount: 2, name: 'Roman' };

  const newName = 'Viktor';

  const action = {
    type: 'CHANGE-USER-NAME',
    newName: newName
  }

  const endState = userReducer(startState, action);

  expect(endState.name).toBe(newName);
});
