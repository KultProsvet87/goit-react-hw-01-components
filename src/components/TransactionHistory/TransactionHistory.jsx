import { Table, TableHead, TableTH } from './TransactionHistory.Styled';
import { Transactions } from './Transactions';
import PropTypes from 'prop-types';

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

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
};
