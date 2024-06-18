import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button, IconButton, Box, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const activeCampaignsData = [
  { name: "Website Development Campaign", value: 400, color: "#8D6E63" },
  { name: "Social Media Campaign", value: 300, color: "#9575CD" },
  { name: "Electronic Item Sell Campaign", value: 300, color: "#78909C" },
  { name: "Job Applications", value: 200, color: "#FF7043" },
  { name: "Sell Home Loan Campaign", value: 278, color: "#FBC02D" },
];

const callData = [
  { date: "2024-06-11", calls: 2 },
  { date: "2024-06-12", calls: 2 },
  { date: "2024-06-14", calls: 4 },
  { date: "2024-06-15", calls: 8 },
  { date: "2024-06-16", calls: 14 },
  { date: "2024-06-17", calls: 7 },
];

const data = {
  salesmanBooking: [
    { campaignName: 'Social Media Campaign', salesman: 'Ford Mertz DDS', bookingTime: '23-06-2024 03:23 am' },
    { campaignName: 'Social Media Campaign', salesman: 'Emmanuelle Runolfsson', bookingTime: '19-06-2024 07:46 am' },
    { campaignName: 'Social Media Campaign', salesman: 'Leila Luettgen', bookingTime: '21-06-2024 04:42 pm' },
    { campaignName: 'Social Media Campaign', salesman: 'Vincenzo Ruecker', bookingTime: '19-06-2024 05:17 am' },
    { campaignName: 'Social Media Campaign', salesman: 'Dr. Cydney Vandervort Jr.', bookingTime: '25-06-2024 11:26 am' },
  ],
  followUp: [
    { campaignName: 'Social Media Campaign', time: '20-06-2024 06:52 am' },
    { campaignName: 'Social Media Campaign', time: '19-06-2024 08:45 pm' },
    { campaignName: 'Electronic Item Sell Campaign', time: '15-06-2024 02:05 pm' },
    { campaignName: 'Sell Home Loan Campaign', time: '18-06-2024 06:00 am' },
  ],
};

const Dashboard = () => {
  return (
    <Box className="dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">5</Typography>
              <Typography>Active Campaigns</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">3</Typography>
              <Typography>Total Follow Up</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">33</Typography>
              <Typography>Call Made</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="dashboard-card">
            <CardContent>
              <Typography variant="h6">2H, 7M, 30S</Typography>
              <Typography>Total Duration</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className="dashboard-chart">
              <Typography variant="h6">Active Actioned Campaigns</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={activeCampaignsData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {activeCampaignsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="dashboard-chart">
              <Typography variant="h6">Call Made</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={callData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="calls" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={10} md={8}>
            <Card className="card">
              <CardContent>
                <div className="header">
                  <Typography variant="h6">Salesman Booking</Typography>
                  <Button variant="text">View All</Button>
                </div>
                {data.salesmanBooking.map((booking, index) => (
                  <Grid container key={index} spacing={2}  className="row">
                    <Grid item xs={3}>
                      <Typography>{booking.campaignName}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{booking.salesman}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>{booking.bookingTime}</Typography>
                    </Grid>
                    <Grid item xs={3} className="action-icons">
                      <IconButton color="success">
                        <PlayArrowIcon />
                      </IconButton>
                      <IconButton color="error">
                        <VisibilityIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card className="card">
              <CardContent>
                <div className="header">
                  <Typography variant="h6">Follow Up</Typography>
                  <Button variant="text">View All</Button>
                </div>
                {data.followUp.map((followUp, index) => (
                  <Grid container key={index} spacing={2} alignItems="center" className="row">
                    <Grid item xs={8}>
                      <Typography>{followUp.campaignName}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography>{followUp.time}</Typography>
                    </Grid>
                    <Grid item xs={3} className="action-icons">
                      <IconButton color="success">
                        <PlayArrowIcon />
                      </IconButton>
                      <IconButton color="error">
                        <VisibilityIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
