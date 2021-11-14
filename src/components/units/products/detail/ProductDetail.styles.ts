import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Wrapper = styled.div`
  width: 390px;
`;
export const TransactionInfo = styled.div`
  padding: 11px 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SellerProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;
export const SellerInfo = styled.div`
  width: 86%;
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;
export const SellerName = styled.div``;
export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TransactionLoca = styled.div`
  color: rgba(0, 0, 0, 0.3);
`;
export const TransactionWay = styled.div`
  color: #b69acb;
`;
export const ProductImages = styled.div`
  width: 390px;
  height: 390px;
  display: flex;
  align-items: center;
  background-color: lightgray;
`;
export const ProductImage = styled.img`
  width: 390px;
  height: 390px;
  object-fit: cover;
`;
export const ProductMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SaleStatus = styled.div`
  margin-top: 3px;
  margin-left: 17px;
  padding: 2px 7px;
  border-radius: 4px;
  background-color: #8915a6;
  color: #fff;
`;
export const Buttons = styled.div`
  padding: 11px 17px;
`;
export const ButtonsBuyer = styled.div`
  display: flex;
`;
export const PickBtn = styled(FavoriteBorderIcon)`
  color: #b69acb;
`;
export const SendBtn = styled(SendIcon)`
  color: #b69acb;
  margin-left: 12px;
`;
export const ButtonsSeller = styled.div`
  display: flex;
`;
export const EditBtn = styled(EditIcon)`
  color: #b69acb;
`;
export const DeleteBtn = styled(DeleteIcon)`
  color: #b69acb;
  margin-left: 12px;
`;
export const ProductInfo = styled.div``;
export const ProductInfoName = styled.div`
  font-weight: bold;
  font-size: medium;
`;
export const ProductInfoPrice = styled.div`
  font-size: medium;
`;
export const ProductInfoDetail = styled.div`
  padding-top: 5px;
`;
export const ProductInfoCreatedAt = styled.div`
  padding-top: 5px;
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
`;
export const ProductBottom = styled.div`
  padding: 0 17px;
  padding-bottom: 84px;
`;
export const Comments = styled.div`
  padding-top: 10px;
`;
export const CommentsCount = styled.div`
  font-size: medium;
  color: rgba(0, 0, 0, 0.3);
`;
export const Comment = styled.div``;
