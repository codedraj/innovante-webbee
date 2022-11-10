import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import Container from 'common/Container';

const Services = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 3;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box>
      <Container paddingY={'0 !important'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            Services
          </Typography>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            gutterBottom
          >
            High-impact design & development services
          </Box>
          <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
            We take you by hand on each step of the process
          </Typography>
        </Box>
      </Container>
      <Box>
        <Slider {...sliderOpts}>
          {[
            {
              title: 'Concept & CAD',
              subtitle:
                'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              color: colors.purple,
            },
            {
              title: 'Prototyping',
              subtitle:
                'We design intuitive web & mobile apps focused on driving user engagement and increasing users retention.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              ),
              color: colors.green,
            },
            {
              title: 'Mass Manufacturing',
              subtitle:
                'We transform businesses into world-class brands by going through a well thought brand identity design process.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              ),
              color: colors.amber,
            },
            // {
            //   title: 'Concept & CAD',
            //   subtitle:
            //     'We design and develop amazing, lightning fast, and high-converting websites that make your business grow.',
            //   icon: (
            //     <svg
            //       width={48}
            //       height={48}
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       stroke="currentColor"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         strokeWidth={2}
            //         d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            //       />
            //     </svg>
            //   ),
            //   color: colors.purple,
            // },
            // {
            //   title: 'Prototyping',
            //   subtitle:
            //     'We design intuitive web & mobile apps focused on driving user engagement and increasing users retention.',
            //   icon: (
            //     <svg
            //       width={48}
            //       height={48}
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       stroke="currentColor"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         strokeWidth={2}
            //         d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            //       />
            //     </svg>
            //   ),
            //   color: colors.green,
            // },
            // {
            //   title: 'Mass Manufacturing',
            //   subtitle:
            //     'We transform businesses into world-class brands by going through a well thought brand identity design process.',
            //   icon: (
            //     <svg
            //       width={48}
            //       height={48}
            //       xmlns="http://www.w3.org/2000/svg"
            //       fill="none"
            //       viewBox="0 0 24 24"
            //       stroke="currentColor"
            //     >
            //       <path
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //         strokeWidth={2}
            //         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            //       />
            //     </svg>
            //   ),
            //   color: colors.amber,
            // },
          ].map((item, i) => (
            <Box padding={{ xs: 1, md: 2, lg: 3 }} key={i}>
              <Box
                component={Card}
                boxShadow={{ xs: 1, sm: 3 }}
                borderRadius={5}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  padding={{ xs: 2, sm: 4, md: 6 }}
                  sx={{
                    '&:last-child': {
                      paddingBottom: { xs: 2, sm: 4, md: 6 },
                    },
                  }}
                >
                  <Box
                    component={Avatar}
                    variant="rounded"
                    width={84}
                    height={84}
                    marginBottom={2}
                    bgcolor={
                      themeMode === 'light' ? item.color[50] : item.color[200]
                    }
                    borderRadius={5}
                  >
                    <Box color={item.color[themeMode === 'light' ? 500 : 700]}>
                      {item.icon}
                    </Box>
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    {item.title}
                  </Box>
                  <Typography align={'center'} color="textSecondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
