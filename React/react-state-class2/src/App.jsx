import "./App.css";
import Ticket from "./Ticket";
// import LudoBoard from './LudoBoard'
// import TodoList from "./TodoList";
// import LotteryTicket from "./LotteryTicket";
// import TicketNum from "./TicketNum";

function App() {
  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      {/* <LotteryTicket /> */}
      <Ticket ticket={[0,1,2,3]} />
    </>
  );
}

export default App;
