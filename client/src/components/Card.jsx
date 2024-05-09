import styled from "styled-components";

const Container = styled.div`
  height: 270px;
  width: 210px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: ${({ suggested }) => (suggested ? "12px" : "7px")};
  padding-bottom: 17px;
  box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 11px 1px rgba(0, 0, 0, 0.75);
`;

const CardTop = styled.div`
  height: ${({ suggested }) => (suggested ? "70%" : "60%")};
  width: 100%;
`;

const CardPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  cursor: pointer;
`;

const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  width: 100%;
  gap: ${({ suggested }) => (suggested ? "12px" : "7px")};
`;

const Name = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  background-color: ${({ theme }) => theme.spT};
  width: 80%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: lightgray;
  width: 80%;
  padding: 8px;
  border: none;
  border-radius: 6px;
  display: ${({ suggested }) => (suggested ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

const Card = ({ suggested }) => {
  return (
    <Container suggested={suggested}>
      <CardTop suggested={suggested}>
        <CardPic src="https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" />
      </CardTop>
      <CardBottom suggested={suggested}>
        <Name>Ayomide Oluwadiya</Name>
        <ConfirmButton>{suggested ? "Add Friend" : "Confirm"}</ConfirmButton>
        <DeleteButton suggested={suggested}>Delete</DeleteButton>
      </CardBottom>
    </Container>
  );
};

export default Card;
