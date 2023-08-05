import {Table, Title} from './TransactionHistory.styled';
import React from "react";
import PropTypes from "prop-types";

export default function TransactionHistory({items}){

    //  ({id, type, amount, currency})= items;
    return(
        <Table >
  <Title>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Title>

  <tbody>
  {items.map((item) => (
          <tr className="dark-row" key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
   
  </tbody>
</Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
}