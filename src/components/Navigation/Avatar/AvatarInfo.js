import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { IconButton, Typography, Link, Badge } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 200,
    textAlign: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    margin: "auto",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  subheader: {
    fontSize: 14,
    color: palette.grey[500],
    marginBottom: "0.875em",
  },
  statLabel: {
    fontSize: 12,
    color: palette.grey[500],
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: "1px",
  },
}));

export const AvatarInfo = React.memo(function ProfileCard() {
  const styles = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  const isGV = user && user.maLoaiNguoiDung === "GV";

  return (
    <Card className={cx(styles.card)}>
      {user ? (
        <CardContent>
          <Badge
            badgeContent={isGV ? user.maLoaiNguoiDung : null}
            color="error"
          >
            <Avatar
              className={styles.avatar}
              src={"https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/116572298_953265565147148_1924193502507982982_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=6wwc8iv4socAX9Mv2G3&_nc_ht=scontent.fhph1-1.fna&oh=5120a8f8e025b28c340d2ca23c6ed725&oe=5FDCEC23"}
            />
          </Badge>
          <h3 className={styles.heading}>{user.taiKhoan}</h3>
          <span className={styles.subheader}>
            {user.maNhom}
            <br />
            {user.email}
          </span>
        </CardContent>
      ) : null}
      <Divider light />
      <Typography className={styles.subheader}>
        Designed by TheFutureDev
      </Typography>
      <Typography className={styles.subheader} style={{ marginBottom: 0 }}>
        Contact me
      </Typography>
      <Box display="flex" justifyContent="center">
        <IconButton
          size="small"
          component={Link}
          href="https://www.facebook.com/ducchinh2701/"
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          size="small"
          component={Link}
          href=""
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon style={{ fontSize: "1.125rem" }} />
        </IconButton>
      </Box>
      <Typography className={styles.subheader}>
        © Copyright 2020 TheFutureDev
      </Typography>
    </Card>
  );
});

export default AvatarInfo;
