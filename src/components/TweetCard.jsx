import { useState } from "react";

import { TweetOptions } from "./TweetOptions";
import { Link } from "react-router-dom";
import { Chat, Heart, Repeat, ThreeDots, Share } from "react-bootstrap-icons";
import { Avatar } from "@mui/material";

import "./card.css";

export const TweetCard = ({ name, handle, tweet, img }) => {
  // const [drawer, setDrawer] = useState(false);

  // const handleOpenDrawer = () => setDrawer(true);
  // const handleCloseDrawer = () => setDrawer(false);

  return (
    <div className="tweet">
      <div className="card">
        <Avatar />

        <div className="card__box">
          <div className="card__header">
            <div className="card__header-user">
              <h3 className="card__user">{name}</h3>
              <Link className="card__link">
                <p className="card__handle">{handle}</p>
                <span className="card__time">16m</span>
              </Link>
            </div>
            <ThreeDots style={{ fontSize: "2rem" }} className="card__more" />
          </div>

          <p className="card__content">{tweet}</p>

          <img src={img} alt="userpost" className="card__img" />

          <ul className="card__actions">
            <li className="card__actions-act">
              <Chat /> 1,233
            </li>
            <li className="card__actions-act">
              <Heart /> 589
            </li>
            <li className="card__actions-act">
              <Repeat /> 4788
            </li>
            <li className="card__actions-act">
              <Share />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// <Card sx={{ maxWidth: "auto", fontSize: 16 }} className="card">
//         <CardHeader
//           avatar={<Avatar src={message.map((item) => item.profileImg)} />}
//           action={
//             <>
//               <IconButton aria-label="settings" onClick={handleOpenDrawer}>
//                 <ThreeDots
//                   style={{
//                     color: "var(--color-gray)",
//                     fontSize: 20,
//                   }}
//                 />
//               </IconButton>
//               <Drawer anchor="bottom" open={drawer} onClose={handleCloseDrawer}>
//                 {TweetOptions("bottom")}
//               </Drawer>
//             </>
//           }
//           title={message.map((item) => item.username)}
//           subheader="September 14, 2016"
//           className="card-header"
//         />

//         <div className="card-content">
//           <CardContent>
//             <Typography
//               variant="body2"
//               style={{
//                 color: "var(--color-black)",
//                 fontSize: 13,
//                 paddingBottom: "2rem",
//               }}
//             >
//               {message.map((item) => item.message)}.
//             </Typography>

//             <CardMedia
//               component="img"
//               height="194"
//               image={message.map((item) => item.tweetImg)}
//               alt="Paella dish"
//               style={{ borderRadius: "2rem", height: "100" }}
//             />

//             {/* Action icons */}
//             <CardActions
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 paddingTop: "2rem",
//               }}
//             >
//               {/* replies */}
//               <IconButton aria-label="replies" className="card-actions">
//                 <Chat
//                   style={{
//                     color: "var(--color-gray)",
//                     fontSize: 20,
//                   }}
//                 />
//                 <p className="count"> 100</p>
//               </IconButton>

//               {/* Retweet */}
//               <IconButton aria-label="retweet" className="card-actions">
//                 <Repeat style={{ color: "var(--color-gray)", fontSize: 20 }} />
//                 <p className="count"> 1500</p>
//               </IconButton>

//               {/* Like */}
//               <IconButton aria-label="like" className="card-actions">
//                 <Heart style={{ color: "var(--color-gray)", fontSize: 20 }} />
//                 <p className="count"> 1500</p>
//               </IconButton>

//               {/* Share */}
//               <IconButton aria-label="share" className="card-actions">
//                 <Share style={{ color: "var(--color-gray)", fontSize: 20 }} />
//                 <p className="count"> 1500</p>
//               </IconButton>
//             </CardActions>
//           </CardContent>
//         </div>
//       </Card>
