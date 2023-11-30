import { Box, Button, Paper, TextInput, Textarea } from "@mantine/core";
import bgTop1 from "../../../public/bgtop.svg"
export default function Contact() {
  return (
    <div className="min-h-[80dvh] flex justify-center items-center flex-col">
      <Box className="h-[30dvh] pt-24 bg-no-repeat bg-center bg-cover w-full" style={{backgroundImage: `url(${bgTop1.src})`}}/>
      <Box className="min-h-[40dvh] pt-24 bg-gray-200 w-full">
        <p className="text-5xl  text-primary-700 text-center my-auto">
          Get In touch with Us!
        </p>
      </Box>
      <Box className="flex md:flex-row flex-col min-w-[80dvw] md:w-[60dvw] md:mx-auto min-h-[60dvh] shadow-sm border-blue-500 border-2 rounded-lg my-16 ">
        <Box className="md:w-4/12 p-4 bg-primary-500 flex items-center justify-center">
          <p className="text-2xl text-white">Contact Us!</p>
        </Box>
        <Paper className="p-4 w-full my-auto">
          <TextInput label="Name" withAsterisk/>
          <TextInput label="Email" withAsterisk/>
          <Textarea label="Comments" rows={6} withAsterisk/>
          <Button className="mt-4 bg-primary-800">Submit</Button>
        </Paper>
      </Box>
    </div>
  );
}
