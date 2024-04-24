import styled from "styled-components";
import Ayomide from "../img/Ayomide 2.png";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

const Container = styled.div`
  width: 30%;
  position: sticky;
  top: 90px;
  overflow-y: scroll;
  overflow-x: hidden;
  height: Calc(100vh - 120px);
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-track {
    background: lightgray;
  }

  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;

const RightHeadSpan = styled.span`
  font-size: 16px;
  font-weight: bold;
  display: flex;
  gap: 5px;
  align-items: center;
`;

const RightHeadSpanb = styled.span`
  padding: 1px 4px;
  color: white;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.spT};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

const RightItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const Spans = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 3px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 5px;
  &:first-child {
    color: ${({ theme }) => theme.spT};
  }
  &:last-child {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button = styled.button`
  border: none;
  background: transparent;
  font-weight: bold;
  cursor: pointer;
  &:first-child {
    color: ${({ theme }) => theme.spT};
  }
  &:last-child {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button2 = styled.button`
  border: none;
  background: transparent;
  font-weight: bold;
  color: ${({ theme }) => theme.spT};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px;
  cursor: pointer;
`;

const Span1 = styled.span`
  font-size: 14px;
`;

const Span1b = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Span2 = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Divider = styled.hr`
  width: 90%;
  margin: 25px 0px;
`;

const ActiveNowContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 14px;
  padding: 15px 30px;
  border-radius: 25px;
`;

const ProfileImages = styled.div`
  display: flex;
`;

const ActiveProfile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.text};
  margin-left: -10px;
`;

const Followers = styled.div`
  display: flex;
  gap: 5px;
  font-size: 16px;
  align-items: center;
  font-weight: bold;
  margin-left: -10px;
`;

const FollowersSpan = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  font-weight: 300;
`;

const Pre = styled.pre`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const P = styled.p``;

const HomeRight = ({ theme }) => {
  return (
    <Container>
      {/* THE RIGHT SIDE OF THE HOME PAGE CONSIST OF THREE SECTIONS: THE TOP, THE
      MIDDLE AND THE BOTTOM SECTION */}

      {/* THIS IS THE TOP SECTION, IT CONTAINS USER'S FRIEND REQUESTS */}
      <RightHeadSpan>
        Requests
        <RightHeadSpanb>5</RightHeadSpanb>
      </RightHeadSpan>
      <RightItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>
              Ayomide Oluwadiya <Span1b>wants to add you to friends</Span1b>
            </Span1>
            <Buttons>
              <Button>Accept</Button>
              <Button>Decline</Button>
            </Buttons>
          </Spans>
        </Info>
      </RightItem>
      <RightItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>
              Ayomide Oluwadiya <Span1b>wants to add you to friends</Span1b>
            </Span1>
            <Buttons>
              <Button>Accept</Button>
              <Button>Decline</Button>
            </Buttons>
          </Spans>
        </Info>
      </RightItem>
      <Button2>View All</Button2>
      <Divider />

      {/* THIS IS THE MIDDLE SECTION, AND IT IS DIVIDED INTO TWO SECTIONS */}
      {/* --------------------------------------------------------------- */}
      {/* THIS IS THE FIRST SECTION OF THE MIDDLE SECTION,
       IT CONTAINS SUGGESTIONS ON USERS TO FRIEND */}
      <RightHeadSpan>Suggestions for you</RightHeadSpan>
      <RightItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>Ayomide Oluwadiya</Span1>
            <Span2>Lagos, Nigeria</Span2>
          </Spans>
        </Info>
        <GroupAddOutlinedIcon style={{ color: "#0000ff" }} />
      </RightItem>
      <RightItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>Ayomide Oluwadiya</Span1>
            <Span2>Lagos, Nigeria</Span2>
          </Spans>
        </Info>
        <GroupAddOutlinedIcon style={{ color: "#0000ff" }} />
      </RightItem>
      <RightItem>
        <Info>
          <ProfileImage src={Ayomide} alt="profilepic" />
          <Spans>
            <Span1>Ayomide Oluwadiya</Span1>
            <Span2>Lagos, Nigeria</Span2>
          </Spans>
        </Info>
        <GroupAddOutlinedIcon style={{ color: "#0000ff" }} />
      </RightItem>
      <Button2>View All</Button2>
      <Divider />

      {/* THIS IS THE SECOND SECTION IN THE MIDDLE SECTION, IT CONTAINS PRESENTLY ACTIVE FRIENDS */}
      <ActiveNowContainer>
        <ProfileImages>
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
          <ActiveProfile src={Ayomide} alt="ActiveProfileImage" />
        </ProfileImages>
        <Followers>
          200.3k <FollowersSpan>Followers</FollowersSpan>
        </Followers>
        <span style={{ marginLeft: "-10px" }}>Active now on your profile</span>
      </ActiveNowContainer>
      <Divider />

      {/* THIS IS THE BOTTOM OF THE RIGHT SIDE OF THE HOME PAGE */}
      <Pre>
        <P>
          About {"    "} Accessibility {"    "} Help Center
        </P>{" "}
        <P>Privacy and Terms {"    "} Advertising</P>
        <P>Business Services</P>
      </Pre>
    </Container>
  );
};

export default HomeRight;
