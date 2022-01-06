import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; import { Box, Grid, Progress, ProgressLabel, Text } from '@chakra-ui/react'
import {
  incrementProgressByAmount, selectCraft
} from './craftSlice';

export function Counter() {
  const craft = useSelector(selectCraft);
  const dispatch = useDispatch();

  return (
      <Grid templateColumns='9fr 1fr' gap={5}  >
        <Progress
          value={craft.progress}
          max={craft.maxProgress}
          colSpan={4}
          display="inline"
          size="sm"
          m={0}
        />
        <Text display="block">{craft.progress}/{craft.maxProgress}</Text>
      </Grid>
      <button
        onClick={() => dispatch(incrementProgressByAmount(10))}
      >
        Increment value
      </button>
  );
}
