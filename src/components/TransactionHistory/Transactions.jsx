import { TableRow, TableTD } from './TransactionHistory.Styled';

export const Transactions = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map((transaction, index) => {
        const { id, type, amount, currency } = transaction;
        return (
          <TableRow index={index} key={id}>
            <TableTD>{type}</TableTD>
            <TableTD>{amount}</TableTD>
            <TableTD>{currency}</TableTD>
          </TableRow>
        );
      })}
    </tbody>
  );
};
