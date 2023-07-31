import { useState } from "react";

import { TweetOptions } from "./TweetOptions";
import profile from "../assets/profile-img.jpg";
const message = [
  {
    id: "1001",
    username: "Denis Kyusya",
    handle: "@denkyu",
    profileImg: profile,
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, aliquam atque sint facilis vitae quos placeat enim quae veniam, molestiae consectetur natus, dolor laboriosam possimus. Eius eveniet nostrum quae iste.",
    tweetImg: profile,
  },
];

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Drawer,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { Chat, Heart, Repeat, ThreeDots, Share } from "react-bootstrap-icons";

import "./card.css";

export const TweetCard = () => {
  const [drawer, setDrawer] = useState(false);

  const handleOpenDrawer = () => setDrawer(true);
  const handleCloseDrawer = () => setDrawer(false);

  return (
    <div className="tweet">
      <Card sx={{ maxWidth: "auto", fontSize: 16 }} className="card">
        <CardHeader
          avatar={<Avatar src={message.map((item) => item.profileImg)} />}
          action={
            <>
              <IconButton aria-label="settings" onClick={handleOpenDrawer}>
                <ThreeDots
                  style={{
                    color: "var(--color-gray)",
                    fontSize: 20,
                  }}
                />
              </IconButton>
              <Drawer anchor="bottom" open={drawer} onClose={handleCloseDrawer}>
                {TweetOptions("bottom")}
              </Drawer>
            </>
          }
          title={message.map((item) => item.username)}
          subheader="September 14, 2016"
          className="card-header"
        />

        <div className="card-content">
          <CardContent>
            <Typography
              variant="body2"
              style={{
                color: "var(--color-black)",
                fontSize: 13,
                paddingBottom: "2rem",
              }}
            >
              {message.map((item) => item.message)}.
            </Typography>

            <CardMedia
              component="img"
              height="194"
              image={message.map((item) => item.tweetImg)}
              alt="Paella dish"
              style={{ borderRadius: "2rem" }}
            />

            {/* Action icons */}
            <CardActions
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "2rem",
              }}
            >
              {/* replies */}
              <IconButton aria-label="replies" className="card-actions">
                <Chat
                  style={{
                    color: "var(--color-gray)",
                    fontSize: 20,
                  }}
                />
                <p className="count"> 100</p>
              </IconButton>

              {/* Retweet */}
              <IconButton aria-label="retweet" className="card-actions">
                <Repeat style={{ color: "var(--color-gray)", fontSize: 20 }} />
                <p className="count"> 1500</p>
              </IconButton>

              {/* Like */}
              <IconButton aria-label="like" className="card-actions">
                <Heart style={{ color: "var(--color-gray)", fontSize: 20 }} />
                <p className="count"> 1500</p>
              </IconButton>

              {/* Share */}
              <IconButton aria-label="share" className="card-actions">
                <Share style={{ color: "var(--color-gray)", fontSize: 20 }} />
                <p className="count"> 1500</p>
              </IconButton>
            </CardActions>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};
