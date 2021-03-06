import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import * as actions from "../../../store/actions";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const AvatarItem = ({ onSideOpen }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
        onClick={onSideOpen}
      >
        <Avatar alt="Remy Sharp" 
        src="https://scontent.fhph1-1.fna.fbcdn.net/v/t1.0-9/116572298_953265565147148_1924193502507982982_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=6wwc8iv4socAX9Mv2G3&_nc_ht=scontent.fhph1-1.fna&oh=5120a8f8e025b28c340d2ca23c6ed725&oe=5FDCEC23" />
      </StyledBadge>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSideOpen: () => dispatch(actions.openSidebar()),
  };
};

export default connect(null, mapDispatchToProps)(AvatarItem);
