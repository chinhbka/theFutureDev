import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Box } from "@material-ui/core";
;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
  background: {
    background: "linear-gradient(120deg, #e6f4ff, #e6f4ff)",
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const About = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"92.2vh"}
      className={cardStyles.background}
    >
      <Box m={3}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={
              "https://pngimage.net/wp-content/uploads/2018/06/react-icon-png-7.png"
            }
          
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"TheFutureDev"}
              heading={"About"}
              body={
                "This is a product of theFutureDev team. Thanks for using!"
              }
            />
            
          
            
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
});

export default About;
