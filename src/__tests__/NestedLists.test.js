import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import {NestedLists} from '../components/NestedLists'
import {apiData} from '../fixtures'
import '@testing-library/jest-dom/extend-expect'


test('renders NestedLists components', async () => {
  const {  getByTestId } = render(<NestedLists filteredData={apiData} />)
  
  expect(getByTestId('0')).toBeInTheDocument()
  expect(getByTestId('7')).toBeInTheDocument()
  expect(getByTestId('1').textContent).toBe('9')
  expect(getByTestId('top_lists')).toBeInTheDocument()
  expect(getByTestId('top_lists').children.length).toBe(8)

})
