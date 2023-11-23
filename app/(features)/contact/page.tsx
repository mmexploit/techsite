import { Box, Button, Paper, TextInput, Textarea } from "@mantine/core";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-[80dvh] flex justify-center items-center flex-col">
      <Box className="min-h-[40dvh] pt-24 bg-gray-200 w-full">
        <p className="text-5xl  text-primary-700 text-center my-auto">
          Get In touch with Us!
        </p>
      </Box>
      <Box className="flex flex-row w-[60dvw] mx-auto min-h-[60dvh]  shadow-sm border-blue-500 border-2 rounded-lg my-16 ">
        <Box className="w-4/12 p-4 bg-primary-500 flex items-center justify-center">
          <p className="text-2xl ">Contact Us!</p>
        </Box>
        <Paper className="p-4 w-full my-auto">
          <TextInput label="Name" />
          <TextInput label="Email" />
          <Textarea label="Comments" rows={6} />
          <Button className="mt-4">Submit</Button>
        </Paper>
      </Box>
    </div>
  );
}
