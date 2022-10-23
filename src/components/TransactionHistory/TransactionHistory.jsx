import { Table, TableHead, TableTH } from './TransactionHistory.Styled';
import { Transactions } from './Transactions';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTH>Type</TableTH>
          <TableTH>Amount</TableTH>
          <TableTH>Currency</TableTH>
        </tr>
      </TableHead>
      <Transactions transactions={items} />
    </Table>
  );
};

// <table class="transaction-history">
//   <thead>
//     <tr>
//       <th>Type</th>
//       <th>Amount</th>
//       <th>Currency</th>
//     </tr>
//   </thead>

//   <tbody>
// <tr>
//   <td>Invoice</td>
//   <td>125</td>
//   <td>USD</td>
// </tr>
//     <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>
//   </tbody>
// </table>
