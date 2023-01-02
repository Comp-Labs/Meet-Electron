import * as React from 'react';
import logo from '../assets/logo.svg';
import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Typography from '@mui/joy/Typography';

export default function Home() {
  const [justify, setJustify] = React.useState('flex-start');
  return (
    <CssVarsProvider>
      <div className="center-screen">
      <div className="bg-red-200">Hello world</div>
        <img src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/logo-removebg.jpg" alt="Logo" className="logo" height={42} />
        <h2 class="lg:max-w-lg mt-12 text-4xl lg:text-5xl font-black leading-tight lg:leading-tight">The most developer friendly live video SDK</h2>
        <div class="flex flex-col space-y-1 mt-10">
          <label>Theme</label>
          <div class="flex space-x-3">
            <div class="inline-block p-1 bg-gray-600/50 rounded-full -rotate-45 dyte">
              <button title="Change theme to dyte" aria-label="Change theme to dyte" class="flex flex-col rounded-full overflow-hidden outline-none hover:shadow-xl ring-2 ring-transparent w-8 h-8"><div class="flex-1 bg-primary w-full"></div><div class="flex-1 bg-secondary w-full"></div></button></div>
            <div class="inline-block p-1 bg-gray-600/50 rounded-full -rotate-45 game-knights">
              <button title="Change theme to game-knights" aria-label="Change theme to game-knights" class="flex flex-col rounded-full overflow-hidden outline-none hover:shadow-xl ring-2 ring-transparent w-8 h-8"><div class="flex-1 bg-primary w-full"></div><div class="flex-1 bg-secondary w-full"></div></button></div>
            <div class="inline-block p-1 bg-gray-600/50 rounded-full -rotate-45 shop-on">
              <button title="Change theme to shop-on" aria-label="Change theme to shop-on" class="flex flex-col rounded-full overflow-hidden outline-none hover:shadow-xl ring-2 ring-white w-8 h-8"><div class="flex-1 bg-primary w-full"></div><div class="flex-1 bg-secondary w-full"></div></button></div>
            <div class="inline-block p-1 bg-gray-600/50 rounded-full -rotate-45 nature"><button title="Change theme to nature" aria-label="Change theme to nature" class="flex flex-col rounded-full overflow-hidden outline-none hover:shadow-xl ring-2 ring-transparent w-8 h-8"><div class="flex-1 bg-primary w-full"></div><div class="flex-1 bg-secondary w-full"></div></button></div></div></div>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography id="segmented-controls-example" fontWeight="lg" fontSize="sm">
            Meeting Type
          </Typography>
          <RadioGroup
            row
            aria-labelledby="segmented-controls-example"
            name="justify"
            value={justify}
            onChange={(event) => setJustify(event.target.value)}
            sx={{
              minHeight: 48,
              padding: '4px',
              borderRadius: 'md',
              bgcolor: 'neutral.softBg',
              '--RadioGroup-gap': '4px',
              '--Radio-action-radius': '8px',
            }}
          >
            {['Group', 'Webinar'].map((item) => (
              <Radio
                key={item}
                color="neutral"
                value={item}
                disableIcon
                label={item}
                variant="plain"
                sx={{
                  px: 2,
                  alignItems: 'center',
                }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: {
                      ...(checked && {
                        bgcolor: 'background.surface',
                        boxShadow: 'md',
                        '&:hover': {
                          bgcolor: 'background.surface',
                        },
                      }),
                    },
                  }),
                }}
              />
            ))}
          </RadioGroup>
        </Box>

      </div>
    </CssVarsProvider>
  );
}
