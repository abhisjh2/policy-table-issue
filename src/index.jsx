import React from 'react';
import { createRoot } from 'react-dom/client';
import { CDSFlex } from '@ciscodesignsystems/cds-react-flex/injected';
import { CDSTable } from '@ciscodesignsystems/cds-react-table/injected';
import { CDSCard } from '@ciscodesignsystems/cds-react-card/injected';
import { POLICY_TABLE_COLUMNS } from './data/tableColumns';
import rawData from './data/policyData.json';

import './index.scss';

function App() {
    return (
        <CDSFlex direction="column" gap="medium">
        <h2>Policy Management</h2>
            <CDSCard status="default">
                <CDSTable
                    columns={POLICY_TABLE_COLUMNS}
                    data={rawData}
                    // column sorting
                    enableSortColumns={true}
                    // column resizing
                    enableColumnResizing={true}
                    columnResizeMode="onChange"
                />
            </CDSCard>
        </CDSFlex>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

