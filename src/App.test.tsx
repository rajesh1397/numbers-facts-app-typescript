import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { yearcontext } from './YearContext/YearContext';
import { rest } from "msw";
import {setupServer} from 'msw/node'
import App from './App';

let URL: string = 'http://numbersapi.com/1997/year';
const yearData='a sample mock data for testing purpose'
const server = setupServer(
  rest.get(URL, (req,res,ctx) => {
    return res(
      ctx.json(yearData)
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(()=>server.close())

describe('On first time loading', () => {
  test('renders title,input form,button', () => {
    render(<App />);

    expect(screen.getByText(/facts of year/i)).toBeInTheDocument();
    expect(screen.getByTestId('yearinput')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByTestId('yearfactdiv')).not.toBeInTheDocument();

  })

  test('fetch data from api and display in div', async() => {
    render(<yearcontext.Provider value={{yearData,getApiData:(enteredYear)=>{}}}>
             <App/>
          </yearcontext.Provider>)

    userEvent.type(screen.getByTestId('yearinput'),'1997')
    userEvent.click(screen.getByRole('button'))

    const yearfactdiv = await screen.findByTestId('yearfactdiv')

    expect(yearfactdiv).toHaveTextContent('a sample mock data for testing purpose')
    expect(yearfactdiv).toBeInTheDocument()
  })
})
