import PropTypes from 'prop-types';
import css from '../Transactions/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => {
                return <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            })}
  </tbody>
</table>
}
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape).isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.number.isRequired,
}