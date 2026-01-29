import withLayouBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";

 const PropertyDetail = () => {
   return (
       <>
         <Stack sx={{ background: "#81c784" }}>Header Basic</Stack>
         <Container>PROPERTY DETAIL </Container>
               <Stack sx={{ background: "#a1887f" }}>Footer</Stack>

         </>
   );
 }

 export default withLayouBasic(PropertyDetail);