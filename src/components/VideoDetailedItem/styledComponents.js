import Styled from 'styled-components'

export const MainDiv = Styled.div`

`

export const VideoDetails = Styled.div`
display:flex;

min-height:100vh;
`
export const YoutubeVideoCon = Styled.div`
width:100%;

background-color:${props => props.bgcolor};
color:${props => props.color};
padding:40px;
`
export const Title = Styled.p``
export const ViewsCon = Styled.div`
display:flex;
align-items:center;
`
export const Views = Styled.p``
export const Published = Styled.p``
export const LikeCon = Styled.button`
display:flex;
align-items:center;

`
export const LikePara = Styled.p``
export const DisLikeCon = Styled.button`
display:flex;
align-items:center;

`
export const DisLikePara = Styled.p``
export const SaveCon = Styled.button`
display:flex;
align-items:center;
;
`
export const SavedPara = Styled.p``
export const EmotionCon = Styled.div`
display:flex;
width:200px;
justify-content:space-between;
`
export const BottomCon = Styled.div`
display:flex;
flex-direction:column;


`
export const Profile = Styled.img`
height:50px;
margin-right:20px;
`
export const NameCon = Styled.div`
`
export const Name = Styled.p`
margin:0px;
`
export const Subscribers = Styled.p``
export const Description = Styled.p``
export const MainBottom = Styled.div`
display:flex;
align-items:flex-start;
`
export const FailureCon = Styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:#000000S;
text-align:center;
width:100%;
color:${props => props.color};

`
export const FailureHead = Styled.h1``
export const FailurePara = Styled.p``
export const FailureImage = Styled.img`
height:260px;
`
export const FailureButton = Styled.button`
background-color:blue;
border-radius:10px;
border:0px;
height:30px;
width:100px;
color:white;
`
export const Loadercon = Styled.div`
width:100%;
display:flex;
min-height:60vh;
align-items:center;
justify-content:center;
background-color:${props => props.bgcolor}
`
