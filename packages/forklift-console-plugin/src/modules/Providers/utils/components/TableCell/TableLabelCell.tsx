import React, { ReactNode } from 'react';

import { Label } from '@patternfly/react-core';

import { TableCell, TableCellProps } from './TableCell';

/**
 * A component that displays a table cell, with an optional label.
 *
 * @param {TableLabelCellProps} props - The props for the component.
 * @returns {ReactElement} The rendered TableLabelCell component.
 */
export const TableLabelCell: React.FC<TableLabelCellProps> = ({
  children,
  isWrap = false,
  hasLabel = false,
  label,
  labelColor = 'grey',
}) => {
  let labels: ReactNode[];
  let labelColors: Colors[];

  if (Array.isArray(label)) {
    labels = label;
  } else {
    labels = [label];
  }

  if (Array.isArray(labelColor)) {
    labelColors = labelColor;
  } else {
    labelColors = labels.map(() => labelColor);
  }

  return (
    <TableCell isWrap={isWrap}>
      {children}
      {hasLabel &&
        labels.map((_, i) => (
          <Label
            key={labels[i].toString()}
            isCompact
            color={labelColors[i]}
            className="forklift-table__flex-cell-label"
          >
            {labels[i]}
          </Label>
        ))}
    </TableCell>
  );
};

type Colors = 'blue' | 'cyan' | 'green' | 'orange' | 'purple' | 'red' | 'grey';
export interface TableLabelCellProps extends TableCellProps {
  hasLabel?: boolean;
  label?: ReactNode | ReactNode[];
  labelColor?: Colors | Colors[];
  isWrap?: boolean;
}
