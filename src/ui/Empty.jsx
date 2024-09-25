import styled from "styled-components";

const EmptyContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 18px;
  color: #333;
`;

const Icon = styled.div`
  font-size: 50px;
  color: #ccc;
  margin-bottom: 10px;
`;

// Empty component
function Empty({ resource }) {
  return (
    <EmptyContainer>
      <Icon>🚫</Icon>
      <p>No {resource} could be found.</p>
    </EmptyContainer>
  );
}

export default Empty;
