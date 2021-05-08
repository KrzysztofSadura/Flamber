import { Button, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField} from '@material-ui/core';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import {CircularProgress} from '@material-ui/core';


    const StyledTableCell = withStyles(() => ({
      head: {
        backgroundColor: '#EEE',
        fontSize: '1.3rem',
        fontWeight: 'bold'
      },
      body: {
          fontSize: '1rem'
      },
    }))(TableCell);


  const MainButton = withStyles(() => ({
    root: {
      fontSize: '1.2rem',
      fontWeight: 'bold'
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: '50%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 1, 1),
    },
    table: {
        minWidth: 500
    }
  }));

  const modalStyle = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  };

const ModelAssets = () => {

    const {data, setData} = useContext(UserContext)
    const classes = useStyles();
    
    useEffect(() => {
      if (!data) return;
    }, [data]);


    return data ? ( 
        <div className="centered">
            <h2 className="heading-info">MODEL WALLET ASSETS</h2>
            <div className="assets-list">
                    <TableContainer component={Paper}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Model Asset Name </StyledTableCell>
                                    <StyledTableCell align="center">Composition</StyledTableCell>
                                    {/* <StyledTableCell align="center">Composition zł</StyledTableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.modelWallet.map((asset) => (
                                    <TableRow key={asset.id}>
                                        <StyledTableCell align="center">{asset.name}</StyledTableCell>
                                        <StyledTableCell align="center">{asset.percentage.toFixed(1)} %</StyledTableCell>
                                        {/* <StyledTableCell align="center">{(asset.percentage * data.initialAssets / 100).toFixed(2).toString().replace(/\./g, ',')}</StyledTableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            <div className="bottom-buttons">
                <Link style={{ textDecoration: 'none' }} to="/create"><MainButton color="primary" variant="text">Edit Assets</MainButton></Link>
                <Link  style={{ textDecoration: 'none '}} to="/real-assets"><MainButton color="secondary" variant="contained">Real Wallet</MainButton></Link>
            </div>
        </div>
     ) : (
      <div className="centered"><CircularProgress size='6rem'/></div>
     )
};
 
export default ModelAssets;