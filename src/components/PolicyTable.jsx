import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@ciscodesignsystems/cds-react-table';
import { POLICY_TABLE_COLUMNS } from '../constants/tableColumns';

const PolicyTable = ({ data }) => {
  return (
    <div>
      <h2>Policy Management</h2>
      <p>List of all policies</p>
      <Table
        columns={POLICY_TABLE_COLUMNS}
        data={data}
      />
    </div>
  );
};

PolicyTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PolicyTable;

