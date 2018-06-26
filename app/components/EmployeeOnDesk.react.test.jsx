import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'reactstrap';
import EmployeeOnDesk from './EmployeeOnDesk';

jest.mock('./DeskClock', () => 'DeskClock');

const initialEmployee = {
  name: 'John Doe',
  department: 'HR',
  email: 'ee@ee.ru',
};

test('EmployeeOnDesk changes the button text after click', () => {
  const component = shallow(<EmployeeOnDesk employee={initialEmployee} />);

  expect(component.find(Button).first().children().text()).toEqual('I am relaxing');
  component.find(Button).first().simulate('click');
  expect(component.find(Button).first().children().text()).toEqual('I am working');
});

test('Calls "toggleEmployeeOnDesk" on button click', () => {
  const spyToggleEmployeeOnDesk = jest.spyOn(EmployeeOnDesk.prototype, 'toggleEmployeeOnDesk');
  const component = shallow(<EmployeeOnDesk employee={initialEmployee} />);

  component.find(Button).first().simulate('click');
  expect(spyToggleEmployeeOnDesk.mock.calls.length).toBe(1);
  spyToggleEmployeeOnDesk.mockRestore();
});

test('Calls "deleteEmployee" on button click', () => {
  const spyDeleteEmployee = jest.spyOn(EmployeeOnDesk.prototype, 'deleteEmployee');
  const component = shallow(<EmployeeOnDesk employee={initialEmployee} />);

  component.find('.delete').simulate('click');
  expect(spyDeleteEmployee.mock.calls.length).toBe(1);
  spyDeleteEmployee.mockRestore();
});

test('Calls "toggleEditModal" on button click', () => {
  const spyToggleEditModal = jest.spyOn(EmployeeOnDesk.prototype, 'toggleEditModal');
  const component = shallow(<EmployeeOnDesk employee={initialEmployee} />);

  component.find(Button).last().simulate('click');
  expect(spyToggleEditModal.mock.calls.length).toBe(1);
  spyToggleEditModal.mockRestore();
});

