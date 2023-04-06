import { ClickTracker } from '../../../_utils/UserTracker';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IdolSns } from '../../../_utils/Types';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import axios from 'axios';
import { request } from '../../../_utils/axios';
import styled from "styled-components"
import { useAppSelector } from '../../../_hooks/hooks';
import { useParams } from 'react-router';
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const SnsFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconFrame = styled.div`
  display: flex;
  background-color: ${props => props.color || `var(--purple800-color)` };
  border-radius: 5px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const IconText = styled.div`
  text-align: center;
  font-size: 0.7rem;
`;

// 더미 데이터
const userData:IdolSns = {
  idol: "세븐틴",
  snsLink: {
    instagram: "https://www.instagram.com/saythename_17/",
    youtube: "https://twitter.com/pledis_17?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    twitter: "https://www.youtube.com/user/pledis17/videos?app=desktop"
  },
  interest: true
}

function IdolDataProfileSns() {
  // const params = useParams();
  // const idolName:string = params.idolName || "";
  const idolName:string = "세븐틴";

  // const {idol, snsLink}: IdolSns =  request("get", `idol/${idolName}/pos-neg`)
  const {idol, snsLink, interest} = userData

  const [like, setLike] = useState<boolean>(interest);

  return (
    <Wrapper>
      <SnsFrame>
        <IconFrame>
          <InstagramIcon 
            sx={{ fontSize: "1.3rem", cursor: "pointer", color: `var(--purple500-color)` }}
            onClick={()=> {
              window.open(snsLink.instagram)
              ClickTracker(idolName)
            }}
          />
        </IconFrame>
        <IconText>인스타</IconText>
      </SnsFrame>
      <SnsFrame>
        <IconFrame>
          <TwitterIcon 
            sx={{ fontSize: "1.3rem", cursor: "pointer", color: `var(--purple500-color)` }} 
            onClick={()=> {
              window.open(snsLink.twitter)
              ClickTracker(idolName)
          }} />
        </IconFrame>
        <IconText>트위터</IconText>
        </SnsFrame>
        <SnsFrame>
        <IconFrame>
        <YouTubeIcon 
          sx={{ fontSize: "1.3rem", cursor: "pointer", color: `var(--purple500-color)` }}
          onClick={()=> {
            window.open(snsLink.youtube)
            ClickTracker(idolName)
          }} />
        </IconFrame>
        <IconText>유튜브</IconText>
        </SnsFrame>
        <SnsFrame>
        <IconFrame color="#FDD8D8" >
        {
          like?
          <FavoriteIcon 
            sx={{ fontSize: "1.3rem", cursor: "pointer", color: `var(--red600-color)` }} 
            onClick={() => {
              setLike(false)
              ClickTracker(idolName)
            }} />
          :
          <FavoriteBorderIcon 
            sx={{ fontSize: "1.3rem", cursor: "pointer", color: `var(--red600-color)` }} 
            onClick={() => {
              setLike(true)
              ClickTracker(idolName)
            }}/>
        } 
        </IconFrame>
        <IconText>팔로잉</IconText>
      </SnsFrame>
    </Wrapper>  )
}

export default IdolDataProfileSns;


/* 내가 해야할 것

  1. 좋아요 버튼이 동작하면 서버에 알림
  2. 좋아요 버튼이 동작하면 스토어를 수정해

*/