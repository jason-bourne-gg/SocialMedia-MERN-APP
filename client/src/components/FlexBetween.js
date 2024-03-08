import { Box } from "@mui/material";
import { styled } from "@mui/system";

// styled component, we can define all css inside it
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;
