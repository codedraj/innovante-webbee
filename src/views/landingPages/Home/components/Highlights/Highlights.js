import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import smart from './idea.png';
import ergonomic from './vitruvian-man.png';
import profits from './profits.png';

const Highlights = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Smart Solutions',
            subtitle:
              'Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.',
            icon: smart,
          },
          {
            title: 'Ergonomic Designs',
            subtitle:
              'Designed with the latest design trends in mind. Webbee feels modern, minimal, and beautiful.',
            icon: ergonomic,
          },
          {
            title: 'That are Cost Effective',
            subtitle:
              "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
            icon: profits,
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={'100%'} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                {/* <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box> */}
                <Avatar alt={item.title} src={item.icon} />

                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
