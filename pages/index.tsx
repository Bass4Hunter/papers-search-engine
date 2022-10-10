import { IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import Item from '../components/Item';
import Websites from '../components/Websites';
import result from '../types/result';
import SearchIcon from '@mui/icons-material/Search';

const Home: NextPage = () => {
  const [results, setResults] = React.useState<Array<result>>([])
  const [search, setSearch] = React.useState<string | null>()

  const handleTyping = (e: any) => {
    setSearch(e.target.value)
  }

  const HandleClickSearch = async () => {
    const res = await fetch(`http://localhost:3000/api/${search}`)
    const data = await res.json()

    const results = data.results
    setResults([...results])
  }

  return <>
    <Head>
      <title>Papers Search Engine</title>
      <meta property="og:title" content="Serch Engine" key="title" />
    </Head >

    <Box sx={{ flexGrow: 1 }}>

      <Grid container
        direction='column'
        justifyContent="center"
        alignItems="center"
        minHeight={800}
      >
        <Grid item xs={10}>
          <Box component={'div'} mb={10} width='100%' sx={{ justifyContent: 'center', display: 'flex' }}>
            <Typography variant='h3'>Papers Search Engine</Typography>
          </Box>
        </Grid>


        <Box width={800} sx={{ direction: 'row', display: 'flex' }}>
          <TextField onChange={handleTyping} fullWidth id="outlined-basic" label="Word" variant="outlined" />
          <Button variant="outlined" onClick={HandleClickSearch} endIcon={<SearchIcon />} />
        </Box>

        <Grid item xs={10}>
          <Box width='100%' mt={7}>
            <Websites results={results} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  </>
}

export default Home
