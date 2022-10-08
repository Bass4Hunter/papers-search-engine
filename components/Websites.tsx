import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import result from '../types/result';
import Item from './Item';

type Props = {
    results: Array<result>
}
const Websites = (props: Props) => {
    const { results } = props

    return <TableContainer component={Paper} sx={{ maxHeight: 300 , minWidth: 1000 }} >
        <Table stickyHeader aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {results.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="center"><Item>{row.title}</Item></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default Websites