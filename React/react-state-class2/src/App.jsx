import "./App.css";
// import Ticket from "./Ticket.jsx";
// import LudoBoard from './LudoBoard'
// import TodoList from "./TodoList";
import LotteryTicket from "./LotteryTicket";
// import TicketNum from "./TicketNum";

function App() {
  return (
    <>
      {/* <LudoBoard/> */}
      {/* <TodoList/> */}
      {/* <LotteryTicket /> */}
      {/* <Ticket ticket={[5,6,8]}/>
      <Ticket ticket={[1,2,3,4,5]}/> */}
      <LotteryTicket n={3} winningSum={15}/>
    </>
  );
}

export default App;
