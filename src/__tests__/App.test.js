import React from 'react' 
import { render } from '@testing-library/react' 
import App from '../App' 
import {apiData} from '../fixtures' 
import '@testing-library/jest-dom/extend-expect' 

beforeEach(() => {
  jest.resetAllMocks() 
})    

test('renders  First Lists and second Lists heading `h2` in APP components', async () => {
  const {  getByTestId } = render(<App  />) 
  
  expect(getByTestId('firstList')).toBeInTheDocument() 
  expect(getByTestId('firstList').textContent).toBe('First list untouched') 
  expect(getByTestId('secondList')).toBeInTheDocument() 
  expect(getByTestId('secondList').textContent).toBe('Second list Manipulated') 
}) 

test('checking loading statement',  () => {
  const {  getByTestId} = render(<App  loading={true}/>) 
  expect(getByTestId('loadingtestid')).toBeInTheDocument() 
}) 


