import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  InputAdornment
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import DashboardCard from "../components/DashboardCard";
import dashboards from "../data/dashboards";
import { useState } from "react";

export default function Home() {

  const [search, setSearch] = useState("");

  const filtered = dashboards.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  const total = dashboards.length;
  const active = dashboards.filter(d => d.status === "active").length;
  const coming = total - active;

  return (
    <Box sx={{ p: 5, background: "#F4F7FC", minHeight: "100vh" }}>

      <Typography variant="h3" fontWeight="bold">
        ARRIVE Analytics Hub
      </Typography>

      <Typography color="text.secondary" mb={4}>
        Executive Control Center
      </Typography>

      <Grid container spacing={3} mb={4}>

        <Grid item xs={12} md={3}>
          <Paper sx={{p:3,borderRadius:3}}>
            <Typography color="text.secondary">
              Dashboards
            </Typography>

            <Typography variant="h3" fontWeight="bold">
              {total}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{p:3,borderRadius:3}}>
            <Typography color="text.secondary">
              Active
            </Typography>

            <Typography variant="h3" color="green">
              {active}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{p:3,borderRadius:3}}>
            <Typography color="text.secondary">
              Coming Soon
            </Typography>

            <Typography variant="h3" color="orange">
              {coming}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={3}>
          <Paper sx={{p:3,borderRadius:3}}>
            <Typography color="text.secondary">
              Last Update
            </Typography>

            <Typography variant="h5">
              Today
            </Typography>
          </Paper>
        </Grid>

      </Grid>

      <TextField
        fullWidth
        placeholder="Search Dashboard..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        sx={{mb:5}}

        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          )
        }}
      />

      <Grid container spacing={3}>

        {filtered.map((dashboard)=>(
          <Grid item xs={12} md={4} lg={3} key={dashboard.id}>
            <DashboardCard dashboard={dashboard}/>
          </Grid>
        ))}

      </Grid>

    </Box>
  );
}