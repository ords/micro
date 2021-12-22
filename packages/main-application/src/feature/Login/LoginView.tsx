import React from "react";
import View from "@ords/ui-library/dist/component/View";
import { RoutedViewProps } from "@ords/ui-library/dist/component/ViewRoute";
import { useForm, Controller } from "react-hook-form";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import srcLogoWebp from "./icon-small.webp";
import srcLogoPng from "./icon-small.png";

export default function LoginView({ animateIn }: RoutedViewProps) {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <View animateIn={animateIn}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Box m={1}>
          <picture>
            <source srcSet={srcLogoWebp} type="image/webp" />
            <img src={srcLogoPng} alt="logo" />
          </picture>
        </Box>
        <Box m={2}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Username"
                fullWidth
                variant="outlined"
                {...field}
              />
            )}
          />
        </Box>
        <Box m={2}>
          <Controller
            name="firstName2"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="Password"
                fullWidth
                variant="outlined"
                {...field}
              />
            )}
          />
        </Box>
      </Box>
    </View>
  );
}
