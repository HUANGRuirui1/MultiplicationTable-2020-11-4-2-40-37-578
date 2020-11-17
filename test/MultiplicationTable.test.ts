import {MultiplicationTable} from '../src/MultiplicationTable'

describe('Multiplication Table', () => {
  it('should render table return invalid message if the input numbers is out of scope', () => {
    // given
    const table = new MultiplicationTable()
    const start = 0
    const end = 11
    //when
    const rendered = table.render(start, end)
    //then
    expect(rendered).toBe('invalid scope!')
  })

  it('should render table of nothing if the start number is greater than the end number', () => {
    // given
    const table = new MultiplicationTable()
    const start = 6
    const end = 2
    //when
    const rendered = table.render(start, end)
    //then
    expect(rendered).toBe('')
  })
})
